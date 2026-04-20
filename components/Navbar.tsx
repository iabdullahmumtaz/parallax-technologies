import Link from "next/link";
import { Logo } from "./Logo";

const links = [
  { href: "#services", label: "Services" },
  { href: "#technology", label: "Technology" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-pt-navy/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#" className="flex items-center gap-2 text-white">
          <Logo className="h-9 w-9" />
          <span className="hidden text-sm font-semibold uppercase tracking-wide sm:inline">
            Parallax
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-pt-muted transition hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#contact"
          className="rounded-full px-4 py-2 text-sm font-semibold text-white btn-gradient shadow-lg shadow-pt-blue/25 transition hover:opacity-95"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}
