import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Privacy Policy — Pixelforgex",
  description:
    "How Pixelforgex handles your information and privacy commitments.",
};

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-[15px] text-subtle leading-8 mb-6">
              Pixelforgex respects your privacy and only collects the minimum
              information needed to respond to your enquiries and provide our
              services.
            </p>

            <div className="space-y-6 text-[15px] text-subtle leading-8">
              <section>
                <h2 className="text-[18px] font-semibold text-ink mb-2">
                  What we collect
                </h2>
                <p>
                  We may collect your name, email address, project details, and
                  any other information you voluntarily share through our
                  contact form.
                </p>
              </section>

              <section>
                <h2 className="text-[18px] font-semibold text-ink mb-2">
                  How we use it
                </h2>
                <p>
                  Your information is used only to understand your project,
                  reply to your enquiry, and provide the services you request.
                </p>
              </section>

              <section>
                <h2 className="text-[18px] font-semibold text-ink mb-2">
                  Data protection
                </h2>
                <p>
                  We take reasonable steps to keep your information secure and
                  never sell or share your personal information with third
                  parties for marketing purposes.
                </p>
              </section>

              <section>
                <h2 className="text-[18px] font-semibold text-ink mb-2">
                  Contact
                </h2>
                <p>
                  If you have any questions about privacy, reach out at
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
