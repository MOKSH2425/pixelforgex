"use client";

import { useState }          from "react";
import { useForm }            from "react-hook-form";
import { motion }             from "framer-motion";
import FadeUp                 from "@/components/ui/FadeUp";
import SectionHeader          from "@/components/ui/SectionHeader";
import { SITE }               from "@/lib/data";

const SOCIALS = ["GITHUB", "TWITTER", "LINKEDIN", "INSTAGRAM"];

type FormData = {
  name:        string;
  email:       string;
  projectType: string;
  budget:      string;
  message:     string;
};

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus]   = useState<Status>("idle");
  const [errMsg, setErrMsg]   = useState("");

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  async function onSubmit(data: FormData) {
    setStatus("sending");
    setErrMsg("");
    try {
      const res = await fetch("/api/contact", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(data),
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error ?? "Something went wrong.");
      }
      setStatus("sent");
      reset();
    } catch (e: unknown) {
      setStatus("error");
      setErrMsg(e instanceof Error ? e.message : "Unexpected error.");
    }
  }

  const fieldClass = (hasError?: boolean) =>
    `form-field w-full ${hasError ? "border-[#FF4444]" : ""}`;

  return (
    <section id="contact" className="relative z-[1] py-24 px-8 bg-[#12121A]">
      <div className="max-w-[1100px] mx-auto">
        <FadeUp>
          <SectionHeader
            label="GET IN TOUCH"
            title="START A PROJECT"
            sub="Have an idea? A deadline? A budget? Tell us everything — we'll figure out how to make it happen."
          />
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-16 items-start">

          {/* ── Left info ── */}
          <FadeUp delay={0.1}>
            <div className="space-y-8">
              {[
                { icon: "📍", label: "LOCATION",     val: SITE.location },
                { icon: "✉️", label: "EMAIL",         val: SITE.email    },
                { icon: "⏱️", label: "RESPONSE TIME", val: SITE.responseTime },
                { icon: "🟢", label: "STATUS",        val: SITE.status, green: true },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <span className="text-lg mt-0.5 flex-shrink-0">{item.icon}</span>
                  <div>
                    <span className="block font-pixel text-[7px] text-[#00FFFF] mb-1 tracking-[0.08em]">
                      {item.label}
                    </span>
                    <span className={`text-[12px] ${item.green ? "text-[#00FF41]" : "text-[#888]"}`}>
                      {item.val}
                    </span>
                  </div>
                </div>
              ))}

              <div className="flex gap-3 flex-wrap pt-2">
                {SOCIALS.map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="font-pixel text-[6px] text-[#444] border border-[#222] px-3 py-2 hover:text-[#FF00FF] hover:border-[#FF00FF] transition-all duration-200"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* ── Right form ── */}
          <FadeUp delay={0.2}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-pixel text-[7px] text-[#555] mb-2 tracking-[0.06em]">
                    YOUR NAME *
                  </label>
                  <input
                    {...register("name", { required: "Name is required", minLength: { value: 2, message: "Too short" } })}
                    type="text"
                    placeholder="John Doe"
                    className={fieldClass(!!errors.name)}
                  />
                  {errors.name && (
                    <span className="font-pixel text-[6px] text-[#FF4444] mt-1 block">
                      {errors.name.message}
                    </span>
                  )}
                </div>
                <div>
                  <label className="block font-pixel text-[7px] text-[#555] mb-2 tracking-[0.06em]">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email" },
                    })}
                    type="email"
                    placeholder="john@company.com"
                    className={fieldClass(!!errors.email)}
                  />
                  {errors.email && (
                    <span className="font-pixel text-[6px] text-[#FF4444] mt-1 block">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-pixel text-[7px] text-[#555] mb-2 tracking-[0.06em]">
                    PROJECT TYPE
                  </label>
                  <select {...register("projectType")} className={fieldClass()}>
                    <option value="">SELECT ONE...</option>
                    {["Web Development","Mobile App","UI/UX Design","E-Commerce","SaaS Product","Other"].map(o => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-pixel text-[7px] text-[#555] mb-2 tracking-[0.06em]">
                    BUDGET RANGE
                  </label>
                  <select {...register("budget")} className={fieldClass()}>
                    <option value="">SELECT RANGE...</option>
                    {["Under ₹50K","₹50K – ₹1.5L","₹1.5L – ₹5L","₹5L+","Let's talk"].map(o => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-pixel text-[7px] text-[#555] mb-2 tracking-[0.06em]">
                  TELL US ABOUT YOUR PROJECT *
                </label>
                <textarea
                  {...register("message", { required: "Message is required", minLength: { value: 10, message: "Please add more detail" } })}
                  rows={5}
                  placeholder="What are you building? What's the goal? Any deadline or specific requirements? The more detail, the better."
                  className={`${fieldClass(!!errors.message)} resize-y`}
                />
                {errors.message && (
                  <span className="font-pixel text-[6px] text-[#FF4444] mt-1 block">
                    {errors.message.message}
                  </span>
                )}
              </div>

              {/* Error state */}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-pixel text-[7px] text-[#FF4444] border border-[#FF4444] px-4 py-3"
                >
                  ERROR: {errMsg}
                </motion.div>
              )}

              {/* Submit button */}
              <motion.button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                whileTap={{ scale: 0.98 }}
                className={`w-full font-pixel text-[9px] py-4 tracking-[0.08em] transition-all duration-300 border-none cursor-pointer ${
                  status === "sent"
                    ? "bg-[#00FF41] text-[#060608]"
                    : status === "sending"
                    ? "bg-[#333] text-[#00FFFF] border border-[#00FFFF]"
                    : status === "error"
                    ? "bg-[#FF4444] text-white hover:bg-[#FF00FF]"
                    : "bg-[#00FFFF] text-[#060608] hover:bg-[#FF00FF] hover:text-[#060608]"
                }`}
              >
                {status === "sent"    ? "✓ MESSAGE SENT — WE'LL BE IN TOUCH!"
                : status === "sending" ? "SENDING..."
                : status === "error"   ? "TRY AGAIN →"
                :                        "SEND MESSAGE →"}
              </motion.button>

              <p className="font-pixel text-[6px] text-[#333] text-center">
                No spam. We reply within 24 hours.
              </p>
            </form>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
