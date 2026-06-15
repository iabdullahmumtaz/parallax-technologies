"use client";

import { motion } from "framer-motion";
import { ptEase, staggerContainer, staggerItem } from "@/lib/motion";

const stats = [
  { value: "50+", label: "Technologies" },
  { value: "100+", label: "Projects delivered" },
  { value: "99%", label: "Client satisfaction" },
  { value: "24/7", label: "Support available" },
];

export function StatsBar() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-black/88 py-14 sm:py-16">
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,transparent_40%,rgba(49,100,211,0.06)_50%,transparent_60%)]"
        aria-hidden
      />
      <motion.div
        className="relative mx-auto grid max-w-7xl grid-cols-2 gap-10 px-4 sm:px-6 lg:grid-cols-4 lg:px-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-32px" }}
      >
        {stats.map((s) => (
          <motion.div
            key={s.label}
            variants={staggerItem}
            whileHover={{ scale: 1.03, transition: { duration: 0.2, ease: ptEase } }}
            className="group cursor-default text-center"
          >
            <p className="text-3xl font-bold text-sky-400 transition duration-300 group-hover:text-sky-300 group-hover:[text-shadow:0_0_28px_rgba(56,189,248,0.35)] sm:text-4xl">
              {s.value}
            </p>
            <p className="mt-1 text-sm text-zinc-400 transition group-hover:text-zinc-200">
              {s.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
