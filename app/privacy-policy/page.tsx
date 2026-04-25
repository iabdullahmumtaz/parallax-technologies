import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Privacy Policy | Parallax Technologies",
  description:
    "How Parallax Technologies collects, uses, and protects information when you use our website and services.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 border-t border-white/5 pt-16">
        <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Privacy policy
          </h1>
          <p className="mt-2 text-sm text-pt-muted">Last updated: April 21, 2026</p>
          <div className="mt-10 space-y-8 text-sm leading-relaxed text-pt-muted sm:text-base">
            <section>
              <h2 className="text-lg font-semibold text-white">Who we are</h2>
              <p className="mt-3">
                This policy describes how{" "}
                <strong className="text-white">Parallax Technologies</strong>{" "}
                (&quot;we&quot;, &quot;us&quot;) handles information when you visit
                our website or contact us about services.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white">
                Information we collect
              </h2>
              <p className="mt-3">
                When you use our contact form or email us, we may collect your
                name, email address, company name, and the content of your message.
                We also receive standard technical data from your browser (such as
                approximate region and device type) through typical server and
                analytics logs where enabled.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white">
                How we use information
              </h2>
              <p className="mt-3">
                We use contact details to respond to inquiries, operate our
                business, improve our website, and—if you agree—follow up about
                relevant services. We do not sell your personal information.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white">Retention</h2>
              <p className="mt-3">
                We retain messages and related records only as long as needed to
                fulfill the purpose for which they were collected, unless a longer
                period is required for legal or compliance reasons.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white">Your rights</h2>
              <p className="mt-3">
                Depending on where you live, you may have rights to access,
                correct, or delete certain personal data. Contact us using the
                details on our site and we will respond within a reasonable time.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white">Contact</h2>
              <p className="mt-3">
                Questions about this policy:{" "}
                <a
                  href="mailto:info.parallax.tech@gmail.com"
                  className="text-pt-mint underline-offset-2 hover:underline"
                >
                  info.parallax.tech@gmail.com
                </a>
                .
              </p>
            </section>
          </div>
          <p className="mt-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-pt-mint hover:underline"
            >
              <Logo className="h-8 w-8" aria-hidden />
              Back to Parallax Technologies
            </Link>
          </p>
        </article>
      </main>
    </>
  );
}
