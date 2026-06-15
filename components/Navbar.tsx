"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Logo } from "./Logo";
import { ptEase } from "@/lib/motion";

const links = [
  { href: "#services", label: "Services" },
  { href: "#technology", label: "Technology" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 10);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const id = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen, closeMenu]);

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: scrolled ? "rgba(5, 11, 24, 0.95)" : "rgba(5, 11, 24, 0.82)",
        boxShadow: scrolled
          ? "0 12px 40px -12px rgba(0,0,0,0.55), 0 0 0 1px rgba(49,100,211,0.12)"
          : "0 0 0 0 rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.35, ease: ptEase }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/5 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
          <Link
            href="/"
            className="flex shrink-0 items-center text-white"
            aria-label="Parallax Technologies home"
          >
            <Logo className="h-9 w-9" />
          </Link>
        </motion.div>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8" aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative inline-block pb-0.5 text-sm font-medium text-pt-muted transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-gradient-to-r after:from-pt-blue after:to-pt-mint after:transition-all after:duration-300 hover:text-white hover:after:w-full"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:border-pt-blue/40 hover:bg-white/10 lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="hidden sm:inline-block"
          >
            <Link
              href="#contact"
              className="inline-block rounded-full px-4 py-2 text-sm font-semibold text-white btn-gradient shadow-lg shadow-pt-blue/25 transition duration-300 hover:shadow-xl hover:shadow-pt-blue/40"
            >
              Get Started
            </Link>
          </motion.span>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              className="fixed inset-0 top-16 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />
            <motion.nav
              id="mobile-nav"
              aria-label="Mobile"
              className="absolute inset-x-0 top-16 z-50 border-b border-white/10 bg-pt-navy/98 px-4 py-4 shadow-2xl shadow-black/40 backdrop-blur-xl lg:hidden"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: ptEase }}
            >
              <ul className="flex flex-col gap-1">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={closeMenu}
                      className="block rounded-xl px-4 py-3 text-base font-medium text-pt-muted transition hover:bg-white/5 hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="#contact"
                onClick={closeMenu}
                className="mt-4 flex w-full items-center justify-center rounded-full py-3 text-sm font-semibold text-white btn-gradient shadow-lg shadow-pt-blue/25 sm:hidden"
              >
                Get Started
              </Link>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
