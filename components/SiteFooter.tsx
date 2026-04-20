import Link from "next/link";
import { Code2, Globe, Mail, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";

const serviceLinks = [
  "AI Development",
  "Machine Learning",
  "Web Development",
  "Cloud Infrastructure",
  "UI/UX Design",
];

const companyLinks = [
  "About Us",
  "Portfolio",
  "Careers",
  "Blog",
  "Contact",
];

const resourceLinks = [
  "Documentation",
  "API Reference",
  "Support",
  "Privacy Policy",
  "Terms of Service",
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a] pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <Logo className="h-10 w-10" />
              <span className="text-sm font-semibold text-white">Parallax</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-pt-muted">
              Building intelligent digital solutions that transform businesses
              through innovation and technology.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: MessageCircle, label: "Social" },
                { Icon: Globe, label: "Website" },
                { Icon: Code2, label: "Open source" },
                { Icon: Mail, label: "Email" },
              ].map(({ Icon, label }) => (
                <Link
                  key={label}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-pt-muted transition hover:border-white/30 hover:text-white"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-2">
              {serviceLinks.map((t) => (
                <li key={t}>
                  <Link
                    href="#services"
                    className="text-sm text-pt-muted transition hover:text-white"
                  >
                    {t}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-2">
              {companyLinks.map((t) => (
                <li key={t}>
                  <Link
                    href={t === "Contact" ? "#contact" : "#about"}
                    className="text-sm text-pt-muted transition hover:text-white"
                  >
                    {t}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Resources</h3>
            <ul className="mt-4 space-y-2">
              {resourceLinks.map((t) => (
                <li key={t}>
                  <Link href="#" className="text-sm text-pt-muted transition hover:text-white">
                    {t}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col items-center justify-between gap-4 text-xs text-zinc-500 sm:flex-row">
          <p>© 2026 Parallax Technologies. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-zinc-300">
              Privacy
            </Link>
            <Link href="#" className="hover:text-zinc-300">
              Terms
            </Link>
            <Link href="#" className="hover:text-zinc-300">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
