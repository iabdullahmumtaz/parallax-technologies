"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ptEase } from "@/lib/motion";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-network-radial motion-safe:animate-hero-glow" />
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-70" />

      {!reduceMotion && (
        <>
          <motion.div
            className="pointer-events-none absolute -left-20 top-24 h-72 w-72 rounded-full bg-pt-blue/25 blur-[90px]"
            aria-hidden
            animate={{ x: [0, 22, 0], y: [0, 14, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="pointer-events-none absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-pt-mint/15 blur-[80px]"
            aria-hidden
            animate={{ x: [0, -18, 0], y: [0, -12, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div
            className="pointer-events-none absolute left-1/2 top-1/3 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[60px]"
            aria-hidden
            animate={{ opacity: [0.35, 0.6, 0.35], scale: [1, 1.08, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <motion.h1
          className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
          {...fadeUp}
          transition={{ duration: 0.55, ease: ptEase }}
        >
          Building{" "}
          <span className="text-gradient-brand">intelligent</span>
          <br />
          digital solutions
        </motion.h1>
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-base text-pt-muted sm:text-lg"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12, ease: ptEase }}
        >
          We specialize in AI development, machine learning, cloud infrastructure,
          and cutting-edge web solutions that transform businesses and drive
          innovation.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.22, ease: ptEase }}
        >
          <motion.span whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-full px-8 py-3 text-sm font-semibold text-white btn-gradient shadow-xl shadow-pt-blue/30 transition duration-300 hover:shadow-pt-blue/50 sm:w-auto"
            >
              Start your project →
            </Link>
          </motion.span>
          <motion.span whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="#services"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3 text-sm font-semibold text-white backdrop-blur transition duration-300 hover:border-pt-mint/40 hover:bg-white/10 sm:w-auto"
            >
              Explore services
            </Link>
          </motion.span>
        </motion.div>
        <motion.p
          className="mt-8 text-sm text-pt-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.4 }}
        >
          <Link
            href="#contact"
            className="font-medium text-pt-mint/90 underline-offset-4 transition hover:text-pt-mint hover:underline"
          >
            Book a demo or calendar session
          </Link>{" "}
          — same-day replies when we&apos;re online.
        </motion.p>
      </div>
    </section>
  );
}
