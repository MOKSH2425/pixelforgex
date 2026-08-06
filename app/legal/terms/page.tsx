import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Terms of Service — Pixelforgex",
  description:
    "The terms governing our services and client engagement with Pixelforgex.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 px-6 relative z-[1]">
        <div className="max-w-[760px] mx-auto">
          <Link
            href="/"
            className="text-[13px] font-medium text-subtle hover:text-ink transition-colors duration-200"
          >
            ← Back home
          </Link>

          <div className="mt-8 border border-line rounded-[28px] bg-surface p-8 md:p-10 shadow-softer">
            <p className="eyebrow mb-4">Legal</p>
            <h1 className="text-[32px] font-semibold text-ink tracking-tight mb-4">
              Terms of Service
            </h1>
            <p className="text-[15px] text-subtle leading-8 mb-6">
              These terms outline the working relationship between Pixelforgex
              and clients engaging us for design, development, or consulting
              services.
            </p>

            <div className="space-y-6 text-[15px] text-subtle leading-8">
              <section>
                <h2 className="text-[18px] font-semibold text-ink mb-2">
                  Project scope
                </h2>
                <p>
                  Project scope, timelines, deliverables, and budget are agreed
                  in writing before work begins. Any changes after approval may
                  be billed separately.
                </p>
              </section>

              <section>
                <h2 className="text-[18px] font-semibold text-ink mb-2">
                  Payment
                </h2>
                <p>
                  Payments are handled according to the agreed proposal or
                  invoice schedule. Late payments may delay delivery until the
                  balance is settled.
                </p>
              </section>

              <section>
                <h2 className="text-[18px] font-semibold text-ink mb-2">
                  Ownership
                </h2>
                <p>
                  Completed work is transferred to the client upon full payment,
                  unless otherwise discussed in writing.
                </p>
              </section>

              <section>
                <h2 className="text-[18px] font-semibold text-ink mb-2">
                  Contact
                </h2>
                <p>
                  For questions about these terms, contact
                  pixelforgex.dev@gmail.com.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
