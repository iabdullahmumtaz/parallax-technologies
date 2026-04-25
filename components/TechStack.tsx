"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { ptEase, staggerContainer, staggerItem } from "@/lib/motion";

const items = [
  { name: "React", category: "Frontend", initial: "R" },
  { name: "Node.js", category: "Backend", initial: "N" },
  { name: "Python", category: "AI/ML", initial: "P" },
  { name: "TensorFlow", category: "AI/ML", initial: "T" },
  { name: "AWS", category: "Cloud", initial: "A" },
  { name: "Docker", category: "DevOps", initial: "D" },
  { name: "MongoDB", category: "Database", initial: "M" },
  { name: "TypeScript", category: "Language", initial: "T" },
];

export function TechStack() {
  return (
    <section
      id="technology"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/5 bg-pt-navy py-20 sm:py-24"
    >
      <div
        className="pointer-events-none absolute right-0 top-1/2 h-[420px] w-[420px] -translate-y-1/2 translate-x-1/3 rounded-full bg-pt-blue/15 blur-[100px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <span className="inline-block rounded-full border border-pt-mint/50 bg-pt-mint/5 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-pt-mint shadow-[0_0_24px_-4px_rgba(121,216,165,0.35)] transition hover:border-pt-mint/70">
            Technology stack
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Powered by modern technologies
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-pt-muted">
            We leverage industry-leading tools and frameworks to deliver
            cutting-edge solutions.
          </p>
        </Reveal>
        <motion.div
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {items.map((t) => (
            <motion.div
              key={`${t.name}-${t.category}`}
              variants={staggerItem}
              whileHover={{
                y: -6,
                transition: { duration: 0.22, ease: ptEase },
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-colors duration-300 hover:border-pt-blue/50 hover:bg-white/[0.08] hover:shadow-[0_20px_50px_-24px_rgba(49,100,211,0.45)]"
            >
              <div
                className="pointer-events-none absolute -left-6 -top-6 h-24 w-24 rounded-full bg-pt-blue/20 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100"
                aria-hidden
              />
              <div className="relative">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-pt-blue to-cyan-400 text-sm font-bold text-white shadow-md shadow-pt-blue/25 transition duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-pt-blue/45">
                  {t.initial}
                </div>
                <p className="font-semibold text-white">{t.name}</p>
                <p className="text-sm text-pt-muted">{t.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
