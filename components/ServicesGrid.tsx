"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Cloud,
  Code2,
  LineChart,
  Network,
  Palette,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { ptEase, staggerContainer, staggerItem } from "@/lib/motion";

const cards = [
  {
    title: "AI Development",
    body: "Custom AI solutions powered by advanced machine learning algorithms and neural networks.",
    icon: Brain,
  },
  {
    title: "Machine Learning Solutions",
    body: "Predictive analytics and intelligent automation to optimize your business processes.",
    icon: LineChart,
  },
  {
    title: "Web Development",
    body: "Modern, scalable web applications built with cutting-edge technologies and best practices.",
    icon: Code2,
  },
  {
    title: "Cloud Infrastructure",
    body: "Robust cloud architecture solutions for seamless deployment, scaling, and management.",
    icon: Cloud,
  },
  {
    title: "UI/UX Design",
    body: "Beautiful, intuitive interfaces that deliver exceptional user experiences and engagement.",
    icon: Palette,
  },
  {
    title: "System Architecture",
    body: "Enterprise-grade system design and architecture for complex, high-performance applications.",
    icon: Network,
  },
];

export function ServicesGrid() {
  return (
    <section
      id="services"
      className="relative scroll-mt-24 overflow-hidden bg-slate-50 py-20 sm:py-24 section-glow-light"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.45] [background-image:radial-gradient(circle_at_1px_1px,rgb(148_163_184_/_0.22)_1px,transparent_0)] [background-size:28px_28px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700 shadow-sm shadow-blue-900/5 transition hover:shadow-md">
            Our services
          </span>
          <h2 className="mt-4 text-3xl font-bold text-blue-700 sm:text-4xl">
            Comprehensive technology solutions
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            From concept to deployment, we provide end-to-end solutions that drive
            innovation and growth.
          </p>
        </Reveal>
        <motion.div
          className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-48px" }}
        >
          {cards.map((c) => (
            <motion.article
              key={c.title}
              variants={staggerItem}
              whileHover={{ y: -10, transition: { duration: 0.28, ease: ptEase } }}
              className="saas-card-hover group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg shadow-slate-200/80 ring-1 ring-slate-200/70 transition-shadow duration-300 hover:shadow-2xl hover:shadow-blue-200/60 hover:ring-blue-200/90"
            >
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-blue-400/25 to-emerald-400/15 blur-2xl transition duration-500 group-hover:scale-150 group-hover:opacity-100"
                aria-hidden
              />
              <div className="relative z-[1]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-emerald-400 shadow-md shadow-blue-500/30 transition duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-400/45">
                  <c.icon className="h-6 w-6 text-white" aria-hidden />
                </div>
                <h3 className="text-lg font-bold text-blue-700 transition group-hover:text-blue-600">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.body}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
