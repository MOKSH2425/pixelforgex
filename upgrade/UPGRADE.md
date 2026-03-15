# PIXELFORGEX.DEV — Upgrade Pack v0.2.0

This pack adds **5 major features** on top of the base project:

1. ✅ **Framer Motion animations** — scroll-triggered, staggered, glitch
2. ✅ **Real contact form** — Resend API + react-hook-form validation + auto-reply
3. ✅ **Blog / Case Studies** — MDX-powered, 3 sample posts included
4. ✅ **Vercel deployment config** — security headers, region, build settings
5. ✅ **Environment variables** — documented, structured, ready to fill in

---

## Step 1 — Copy files into your project

Merge these folders into your existing `pixelforgex/` directory:

```
upgrade/
├── package.json                          → replace existing
├── .env.example                          → add new file
├── vercel.json                           → add new file
│
├── components/
│   ├── ui/
│   │   ├── FadeUp.tsx                    → add new file
│   │   ├── StaggerGrid.tsx               → add new file
│   │   └── GlitchText.tsx                → add new file
│   └── sections/
│       ├── Hero.tsx                      → REPLACE existing
│       ├── Services.tsx                  → REPLACE existing
│       ├── Portfolio.tsx                 → REPLACE existing
│       └── Contact.tsx                   → REPLACE existing
│
├── app/
│   ├── api/contact/route.ts              → add new file
│   └── work/
│       ├── page.tsx                      → add new file
│       └── [slug]/page.tsx               → add new file
│
├── lib/
│   └── posts.ts                          → add new file
│
└── content/work/
    ├── nexus-analytics.mdx               → add new file
    ├── velvet-threads.mdx                → add new file
    └── taskpilot-app.mdx                 → add new file
```

---

## Step 2 — Install new dependencies

```bash
npm install
```

New packages being added:
- `resend` — email sending
- `gray-matter` — MDX frontmatter parsing
- `next-mdx-remote` — MDX rendering in Next.js
- `react-hook-form` — form validation
- `zod` — schema validation for the API route

---

## Step 3 — Set up environment variables

```bash
# Copy the example file
cp .env.example .env.local
```

Then open `.env.local` and fill in:

### Getting your Resend API key (free, 2 minutes)

1. Go to [resend.com](https://resend.com) and sign up
2. Navigate to **API Keys** → **Create API Key**
3. Paste the key into `RESEND_API_KEY`

### Email setup (two options)

**Option A — Testing (works immediately, no domain needed)**
```
RESEND_API_KEY=re_your_key_here
CONTACT_TO_EMAIL=your@email.com
CONTACT_FROM_EMAIL=PIXELFORGEX.DEV <onboarding@resend.dev>
```

**Option B — Production (your own domain)**
1. In Resend, go to **Domains** → **Add Domain**
2. Add `pixelforgex.dev` (or your domain)
3. Add the DNS records Resend gives you to your domain registrar
4. Wait for verification (usually 5–30 minutes)
5. Then use:
```
CONTACT_FROM_EMAIL=PIXELFORGEX.DEV <noreply@pixelforgex.dev>
```

---

## Step 4 — Add "Work" to your navigation

Open `lib/data.ts` and add the Work link to `NAV_LINKS`:

```ts
export const NAV_LINKS = [
  { label: "Services",  href: "#services"  },
  { label: "Work",      href: "#portfolio" },
  { label: "About",     href: "#about"     },
  { label: "Team",      href: "#team"      },
  { label: "Contact",   href: "#contact"   },
  { label: "Case Studies", href: "/work"   }, // ← ADD THIS
] as const;
```

---

## Step 5 — Test locally

```bash
npm run dev
```

Check these work:
- [ ] Hero animation plays on load
- [ ] Services cards stagger in on scroll
- [ ] Portfolio filter animation (cards animate in/out)
- [ ] Contact form validation (try submitting empty)
- [ ] Contact form submission (check email arrives)
- [ ] `/work` page loads with 3 case studies
- [ ] `/work/nexus-analytics` loads full case study

---

## Step 6 — Add your real case studies

Each case study is an MDX file in `content/work/`.

**File naming:** use the same slug as your project ID in `lib/data.ts`
- `velvet` → `content/work/velvet.mdx`
- `nexus` → `content/work/nexus.mdx`

**Required frontmatter fields:**

```yaml
---
title: "Project Name — Subtitle"
client: "Client Company"
category: "SAAS / WEB APP"
date: "2024-11-15"
coverColor: "#00FFFF"
bgFrom: "#0D0D1A"
bgTo: "#0A1A1A"
tags: ["WEB", "SAAS"]
summary: "One paragraph summary shown on the card."
deliverables:
  - "What you built"
  - "Another deliverable"
stack:
  - "Next.js"
  - "PostgreSQL"
results:
  - "Metric that improved"
  - "Another result"
---

## Your MDX content here

Write normally in Markdown. Headers, bold, blockquotes, lists all work.
```

**Supported MDX elements:**
- `## H2` — section heading
- `### H3` — sub-heading (renders in cyan)
- `**bold**` — renders in pixel font
- `> blockquote` — styled with magenta left border
- `` `inline code` `` — green monospace
- ` ```code block``` ` — dark terminal style

---

## Step 7 — Deploy to Vercel

### First deployment

```bash
# Install Vercel CLI (if not installed)
npm i -g vercel

# Deploy
vercel
```

Follow the prompts:
1. Link to your GitHub account
2. Create a new project called `pixelforgex-dev`
3. Accept all defaults (Vercel auto-detects Next.js)

### Add environment variables on Vercel

1. Go to your project on [vercel.com](https://vercel.com)
2. **Settings** → **Environment Variables**
3. Add all variables from your `.env.local`

> ⚠️ Never commit `.env.local` — it's in `.gitignore`

### Set up your custom domain

1. In Vercel: **Settings** → **Domains** → **Add Domain**
2. Enter `pixelforgex.dev`
3. Vercel gives you 2 DNS records — add them to your registrar
4. SSL is automatic

### Auto-deploy on push

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/pixelforgex-dev.git
git push -u origin main
```

From this point, every `git push` to `main` auto-deploys. ✅

---

## Recommended deploy checklist

Before going live, run through these:

- [ ] Fill `lib/data.ts` with real team names, projects, contact info
- [ ] Add real project screenshots to `public/projects/` and update `Portfolio.tsx`
- [ ] Replace `CONTACT_TO_EMAIL` with your actual email
- [ ] Add Google Analytics or Vercel Analytics (`npx vercel link && npx vercel env pull`)
- [ ] Run `npm run build` locally — fix any TypeScript errors before pushing
- [ ] Test the contact form on the live Vercel preview URL before pointing your domain
- [ ] Add an `app/opengraph-image.tsx` for social sharing previews
- [ ] Run Lighthouse — you should be 90+ on all metrics out of the box

---

## What's next after this

Once live, here's what top agencies add next:

- **Analytics** — Vercel Analytics (free, built-in) or Plausible
- **CMS** — Sanity.io for content updates without code (team members, projects, blog posts)
- **Pricing page** — `/pricing` with three tiers
- **Testimonials with video** — Loom embed in case studies
- **Live chat** — Crisp or Tawk.to for instant client conversations
