"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Code2, Globe, Mail, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { ptEase, staggerContainer, staggerItem } from "@/lib/motion";

const CONTACT_EMAIL = "info.parallax.tech@gmail.com";

const serviceLinks = [
  "AI Development",
  "Machine Learning",
  "Web Development",
  "Cloud Infrastructure",
  "UI/UX Design",
];

const companyLinks: { label: string; href: string }[] = [
  { label: "Portfolio", href: "#projects" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const resourceLinks: { label: string; href: string }[] = [
  { label: "Privacy policy", href: "/privacy-policy" },
  { label: "Terms of service", href: "/terms-of-service" },
];

const linkClass =
  "inline-flex text-sm text-pt-muted transition duration-200 hover:translate-x-0.5 hover:text-white";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#0a0a0a] pt-16 pb-8">
      <div
        className="pointer-events-none absolute bottom-0 left-1/4 h-40 w-96 rounded-full bg-pt-blue/10 blur-[80px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid gap-12 md:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          <motion.div variants={staggerItem}>
            <motion.div
              className="flex max-w-[260px] items-center gap-3 sm:max-w-none"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2, ease: ptEase }}
            >
              <Logo className="h-12 w-12 shrink-0 sm:h-14 sm:w-14" decorative={false} />
              <div className="min-w-0 leading-tight">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-pt-blue">
                  Parallax
                </p>
                <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/90">
                  Technologies
                </p>
              </div>
            </motion.div>
            <p className="mt-4 text-sm leading-relaxed text-pt-muted">
              Parallax Technologies builds intelligent digital solutions that
              transform businesses through innovation, design, and reliable
              engineering.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                {
                  Icon: Mail,
                  label: "Email Parallax Technologies",
                  href: `mailto:${CONTACT_EMAIL}`,
                },
                { Icon: Globe, label: "Home", href: "/" },
                {
                  Icon: Code2,
                  label: "Portfolio section",
                  href: "#projects",
                },
                {
                  Icon: MessageCircle,
                  label: "Contact",
                  href: "#contact",
                },
              ].map(({ Icon, label, href }) => (
                <motion.span key={label} whileHover={{ scale: 1.08, y: -2 }} whileTap={{ scale: 0.96 }}>
                  <Link
                    href={href}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-pt-muted transition duration-200 hover:border-pt-blue/50 hover:bg-white/[0.06] hover:text-white hover:shadow-[0_0_20px_-4px_rgba(49,100,211,0.4)]"
                    aria-label={label}
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                </motion.span>
              ))}
            </div>
          </motion.div>
          <motion.div variants={staggerItem}>
            <h3 className="text-sm font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-2">
              {serviceLinks.map((t) => (
                <li key={t}>
                  <Link href="#services" className={linkClass}>
                    {t}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={staggerItem}>
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-2">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={staggerItem}>
            <h3 className="text-sm font-semibold text-white">Resources</h3>
            <ul className="mt-4 space-y-2">
              {resourceLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-zinc-500 sm:flex-row">
          <p>© 2026 Parallax Technologies. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/privacy-policy"
              className="transition hover:translate-y-[-1px] hover:text-zinc-300"
            >
              Privacy
            </Link>
            <Link
              href="/terms-of-service"
              className="transition hover:translate-y-[-1px] hover:text-zinc-300"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
