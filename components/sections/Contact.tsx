"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { MapPin, Mail, Clock, Phone, CheckCircle2, AlertCircle } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";
import SectionHeader from "@/components/ui/SectionHeader";
import { SITE } from "@/lib/data";

type FormData = {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
};

type Status = "idle" | "sending" | "sent" | "error";

const INFO_ITEMS = [
  { icon: MapPin, label: "Location", val: SITE.location },
  { icon: Mail,   label: "Email",    val: SITE.email },
  { icon: Clock,  label: "Response time", val: SITE.responseTime },
  { icon: Phone,  label: "Contact",  val: "+91 635344388" },
];

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errMsg, setErrMsg] = useState("");

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  async function onSubmit(data: FormData) {
    setStatus("sending");
    setErrMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
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
    `form-field ${hasError ? "!border-red-400" : ""}`;

  return (
    <section id="contact" className="relative z-[1] py-28 px-6">
      <div className="max-w-[1100px] mx-auto">
        <FadeUp>
          <SectionHeader
            label="Get in touch"
            title="Start a project"
            sub="Have an idea? A deadline? A budget? Tell us everything — we'll figure out how to make it happen."
          />
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-14 items-start">
          <FadeUp delay={0.1}>
            <div className="space-y-7">
              {INFO_ITEMS.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent-soft flex items-center justify-center flex-shrink-0">
                    <item.icon size={16} className="text-accent" strokeWidth={2} />
                  </div>
                  <div>
                    <span className="block text-[12.5px] font-medium text-faint mb-0.5">
                      {item.label}
                    </span>
                    <span className="text-[14.5px] text-ink">{item.val}</span>
                  </div>
                </div>
              ))}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                </div>
                <div>
                  <span className="block text-[12.5px] font-medium text-faint mb-0.5">Status</span>
                  <span className="text-[14.5px] text-emerald-600 font-medium">{SITE.status}</span>
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13.5px] font-medium text-ink mb-2">Your name *</label>
                  <input
                    {...register("name", { required: "Name is required", minLength: { value: 2, message: "Too short" } })}
                    type="text"
                    placeholder="Your Name"
                    className={fieldClass(!!errors.name)}
                  />
                  {errors.name && <span className="text-[12.5px] text-red-500 mt-1 block">{errors.name.message}</span>}
                </div>
                <div>
                  <label className="block text-[13.5px] font-medium text-ink mb-2">Email address *</label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email" },
                    })}
                    type="email"
                    placeholder="your.email@company.com"
                    className={fieldClass(!!errors.email)}
                  />
                  {errors.email && <span className="text-[12.5px] text-red-500 mt-1 block">{errors.email.message}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13.5px] font-medium text-ink mb-2">Project type</label>
                  <select {...register("projectType")} className={fieldClass()}>
                    <option value="">Select one...</option>
                    {["Web Development", "Mobile App", "UI/UX Design", "E-Commerce", "SaaS Product", "Other"].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[13.5px] font-medium text-ink mb-2">Budget range</label>
                  <select {...register("budget")} className={fieldClass()}>
                    <option value="">Select range...</option>
                    {["Under ₹20K", "₹50K – ₹1.5L", "₹1.5L – ₹5L", "₹5L+", "Let's talk"].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[13.5px] font-medium text-ink mb-2">Tell us about your project *</label>
                <textarea
                  {...register("message", { required: "Message is required", minLength: { value: 10, message: "Please add more detail" } })}
                  rows={5}
                  placeholder="What are you building? What's the goal? Any deadline or specific requirements? The more detail, the better."
                  className={`${fieldClass(!!errors.message)} resize-y`}
                />
                {errors.message && <span className="text-[12.5px] text-red-500 mt-1 block">{errors.message.message}</span>}
              </div>

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-[13.5px] text-red-600 bg-red-50 rounded-xl px-4 py-3"
                >
                  <AlertCircle size={16} /> {errMsg}
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                whileTap={{ scale: 0.98 }}
                className={`btn w-full !py-3.5 ${
                  status === "sent" ? "bg-emerald-500 text-white" : "btn-primary"
                } ${status === "sending" ? "opacity-70" : ""}`}
              >
                {status === "sent" ? (
                  <>
                    <CheckCircle2 size={17} /> Message sent — we&apos;ll be in touch!
                  </>
                ) : status === "sending" ? (
                  "Sending..."
                ) : status === "error" ? (
                  "Try again"
                ) : (
                  "Send message"
                )}
              </motion.button>

              <p className="text-[13px] text-faint text-center">
                No spam. We reply within 24 hours.
              </p>
            </form>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
