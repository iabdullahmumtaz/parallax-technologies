import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Terms of Service | Parallax Technologies",
  description:
    "Terms governing use of the Parallax Technologies website and engagement with our company.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 border-t border-white/5 pt-16">
        <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Terms of service
          </h1>
          <p className="mt-2 text-sm text-pt-muted">Last updated: April 21, 2026</p>
          <div className="mt-10 space-y-8 text-sm leading-relaxed text-pt-muted sm:text-base">
            <section>
              <h2 className="text-lg font-semibold text-white">Agreement</h2>
              <p className="mt-3">
                By accessing this website, you agree to these terms. If you do not
                agree, please do not use the site.{" "}
                <strong className="text-white">Parallax Technologies</strong> may
                update these terms from time to time; continued use after changes
                constitutes acceptance of the revised terms.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white">Website use</h2>
              <p className="mt-3">
                Content on this site is provided for general information. You may
                not misuse the site, attempt unauthorized access, or use automated
                means to scrape or overload our systems without permission.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white">
                Professional services
              </h2>
              <p className="mt-3">
                Custom development, consulting, and related services are governed
                by separate statements of work or contracts. Nothing on this site
                alone obligates us to perform work until both parties have agreed
                in writing.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white">
                Intellectual property
              </h2>
              <p className="mt-3">
                Unless otherwise noted, Parallax Technologies owns or licenses the
                branding, text, graphics, and layout on this site. You may not
                copy or redistribute site materials for commercial use without our
                consent.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white">
                Disclaimer of warranties
              </h2>
              <p className="mt-3">
                The site is provided &quot;as is&quot; without warranties of any
                kind. To the fullest extent permitted by law, we disclaim liability
                for indirect or consequential damages arising from your use of the
                site.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white">Contact</h2>
              <p className="mt-3">
                For legal or contractual questions:{" "}
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
