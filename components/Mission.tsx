"use client";

import {
  Bolt,
  Shield,
  TrendingUp,
  UsersRound,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ptEase } from "@/lib/motion";

const features = [
  {
    title: "Innovation",
    desc: "Pushing boundaries with cutting-edge technology.",
    icon: Bolt,
  },
  {
    title: "Security",
    desc: "Enterprise-grade protection for your data.",
    icon: Shield,
  },
  {
    title: "Scalability",
    desc: "Built to grow with your business needs.",
    icon: TrendingUp,
  },
  {
    title: "Collaboration",
    desc: "Partnership-driven approach to success.",
    icon: UsersRound,
  },
];

export function Mission() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: ptEase }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-pt-mint/40 bg-pt-mint/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-pt-mint">
              <span className="h-1.5 w-1.5 rounded-full bg-pt-mint shadow-[0_0_8px_#79d8a5]" />
              About us
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Transforming ideas into{" "}
              <span className="text-gradient-brand">intelligent systems</span>
            </h2>
            <p className="mt-5 text-pt-muted leading-relaxed">
              Parallax Technologies pioneers next-generation digital solutions—from
              AI-powered analytics to cloud-native architectures—so your
              organization can move faster with confidence.
            </p>
            <p className="mt-4 text-pt-muted leading-relaxed">
              We partner closely with teams to ship reliable software, automate
              workflows, and design experiences that feel as good as they perform.
            </p>
            <Link
              href="#contact"
              className="mt-8 inline-flex rounded-full px-8 py-3 text-sm font-semibold text-white btn-gradient shadow-lg shadow-pt-blue/25 transition duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-pt-blue/35 active:scale-[0.98]"
            >
              Let&apos;s work together
            </Link>
          </motion.div>
          <div className="relative">
            <motion.div
              className="mb-8 flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: ptEase }}
            >
              <div className="relative">
                <div className="absolute -inset-6 rounded-3xl bg-pt-blue/20 blur-3xl motion-safe:animate-hero-glow" />
                <div className="relative flex h-36 w-36 rotate-12 items-center justify-center rounded-2xl border border-pt-blue/40 bg-gradient-to-br from-pt-blue to-pt-navy-2 shadow-2xl shadow-pt-blue/40 transition duration-500 hover:rotate-6 hover:shadow-[0_0_48px_-8px_rgba(49,100,211,0.55)]">
                  <span className="text-lg font-bold text-white">Cloud</span>
                </div>
                <div className="absolute -right-2 -top-2 h-3 w-3 rounded-full bg-pt-blue shadow-[0_0_12px_#3164d3]" />
                <div className="absolute -bottom-1 left-4 h-2 w-2 rounded-full bg-pt-mint/80" />
              </div>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.4, delay: i * 0.06, ease: ptEase }}
                  whileHover={{
                    y: -4,
                    transition: { duration: 0.2, ease: ptEase },
                  }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md transition-colors duration-300 hover:border-pt-blue/40 hover:bg-white/[0.07]"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-pt-blue to-cyan-400/80 transition duration-300 group-hover:scale-105">
                    <f.icon className="h-5 w-5 text-white" aria-hidden />
                  </div>
                  <h3 className="font-semibold text-white">{f.title}</h3>
                  <p className="mt-1 text-sm text-pt-muted">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
