"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { ptEase } from "@/lib/motion";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[88vh] overflow-hidden pt-28 pb-24 sm:pt-32 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-network-radial motion-safe:animate-hero-glow" />
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-50" />

      {!reduceMotion && (
        <>
          <motion.div
            className="pointer-events-none absolute -left-20 top-24 h-72 w-72 rounded-full bg-pt-blue/20 blur-[90px]"
            aria-hidden
            animate={{ x: [0, 22, 0], y: [0, 14, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="pointer-events-none absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-pt-mint/12 blur-[80px]"
            aria-hidden
            animate={{ x: [0, -18, 0], y: [0, -12, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </>
      )}

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6">
        <motion.div
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-pt-muted backdrop-blur-sm"
          {...fadeUp}
          transition={{ duration: 0.5, ease: ptEase }}
        >
          <Sparkles className="h-3.5 w-3.5 text-pt-mint" aria-hidden />
          Empowering Innovation Through Technology
        </motion.div>

        <motion.h1
          className="text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[3.5rem]"
          {...fadeUp}
          transition={{ duration: 0.55, ease: ptEase, delay: 0.05 }}
        >
          Building{" "}
          <span className="text-gradient-brand-animated">Intelligent</span>
          <br />
          Digital{" "}
          <span className="text-gradient-brand-animated">Solutions</span>
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-base text-pt-muted sm:text-lg"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.14, ease: ptEase }}
        >
          We specialize in AI development, machine learning, cloud infrastructure,
          and cutting-edge web solutions that transform businesses and drive
          innovation.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.24, ease: ptEase }}
        >
          <motion.span whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold text-white btn-gradient shadow-xl shadow-pt-blue/30 transition duration-300 hover:shadow-2xl hover:shadow-pt-blue/50 sm:w-auto"
            >
              Start Your Project →
            </Link>
          </motion.span>
          <motion.span whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="#services"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur transition duration-300 hover:border-pt-mint/40 hover:bg-white/10 hover:shadow-[0_0_32px_-8px_rgba(121,216,165,0.35)] sm:w-auto"
            >
              Explore Services
            </Link>
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
