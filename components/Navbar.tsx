"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { Logo } from "./Logo";
import { ptEase } from "@/lib/motion";

const links = [
  { href: "#services", label: "Services" },
  { href: "#technology", label: "Technology" },
  { href: "#projects", label: "Projects" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    const id = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: scrolled ? "rgba(5, 11, 24, 0.92)" : "rgba(5, 11, 24, 0.78)",
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
        <nav className="hidden items-center gap-8 md:flex">
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
        <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
          <Link
            href="#contact"
            className="inline-block rounded-full px-4 py-2 text-sm font-semibold text-white btn-gradient shadow-lg shadow-pt-blue/25 transition duration-300 hover:shadow-xl hover:shadow-pt-blue/40"
          >
            Get Started
          </Link>
        </motion.span>
      </div>
    </motion.header>
  );
}
