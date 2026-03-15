import { NextRequest, NextResponse } from "next/server";
import { Resend }                     from "resend";
import { z }                          from "zod";

// ── Input validation ──────────────────────────────────────────
const schema = z.object({
  name:        z.string().min(2).max(80),
  email:       z.string().email(),
  projectType: z.string().optional(),
  budget:      z.string().optional(),
  message:     z.string().min(10).max(5000),
});

// ── Rate limiting (simple in-memory, resets on cold start) ────
const rateMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3;   // max submissions per window
const WINDOW_MS  = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now  = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || entry.resetAt < now) {
    rateMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

// ── Handler ───────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  // Rate limit check
  const ip = req.headers.get("x-forwarded-for") ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Try again later." },
      { status: 429 }
    );
  }

  // Parse + validate
  const body   = await req.json().catch(() => ({}));
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid input.", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }
  const { name, email, projectType, budget, message } = parsed.data;

  // Check env vars
  const apiKey  = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "PIXELFORGEX.DEV <noreply@pixelforgex.dev>";
  if (!apiKey || !toEmail) {
    console.error("Missing RESEND_API_KEY or CONTACT_TO_EMAIL env vars");
    return NextResponse.json({ error: "Server config error." }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  // Send email to YOU (the studio)
  const { error } = await resend.emails.send({
    from:    fromEmail,
    to:      toEmail,
    replyTo: email,
    subject: `[PIXELFORGEX] New enquiry from ${name}`,
    html: `
      <div style="font-family:monospace;background:#060608;color:#C8C8D8;padding:32px;border:1px solid #1A1A28;max-width:600px">
        <h2 style="color:#00FFFF;font-size:14px;margin:0 0 24px">NEW PROJECT ENQUIRY</h2>

        <table style="width:100%;border-collapse:collapse;font-size:13px">
          <tr><td style="padding:8px 0;color:#666;width:120px">Name</td>
              <td style="padding:8px 0;color:#fff">${name}</td></tr>
          <tr><td style="padding:8px 0;color:#666">Email</td>
              <td style="padding:8px 0;color:#00FFFF"><a href="mailto:${email}" style="color:#00FFFF">${email}</a></td></tr>
          ${projectType ? `<tr><td style="padding:8px 0;color:#666">Project type</td>
              <td style="padding:8px 0;color:#fff">${projectType}</td></tr>` : ""}
          ${budget ? `<tr><td style="padding:8px 0;color:#666">Budget</td>
              <td style="padding:8px 0;color:#FFE600">${budget}</td></tr>` : ""}
        </table>

        <div style="margin-top:24px;padding:16px;background:#0D0D12;border-left:3px solid #FF00FF">
          <p style="color:#666;font-size:11px;margin:0 0 8px">MESSAGE</p>
          <p style="color:#CCC;font-size:13px;line-height:1.8;margin:0;white-space:pre-wrap">${message}</p>
        </div>

        <p style="color:#333;font-size:10px;margin-top:24px">
          Sent via pixelforgex.dev contact form · ${new Date().toUTCString()}
        </p>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }

  // Auto-reply to the client
  await resend.emails.send({
    from:    fromEmail,
    to:      email,
    subject: "We got your message — PIXELFORGEX.DEV",
    html: `
      <div style="font-family:monospace;background:#060608;color:#C8C8D8;padding:32px;border:1px solid #1A1A28;max-width:600px">
        <h2 style="color:#00FFFF;font-size:14px;margin:0 0 16px">MESSAGE RECEIVED ✓</h2>
        <p style="color:#888;font-size:13px;line-height:1.8;margin:0 0 16px">
          Hey ${name}, thanks for reaching out! We've received your enquiry and will get back to you within 24 hours.
        </p>
        <p style="color:#888;font-size:13px;line-height:1.8;margin:0 0 24px">
          In the meantime, feel free to check out our work at
          <a href="${process.env.NEXT_PUBLIC_SITE_URL ?? "https://pixelforgex.dev"}" style="color:#00FFFF">pixelforgex.dev</a>.
        </p>
        <p style="color:#555;font-size:11px;border-top:1px solid #1A1A28;padding-top:16px;margin:0">
          — The PIXELFORGEX team
        </p>
      </div>
    `,
  });

  return NextResponse.json({ success: true });
}
