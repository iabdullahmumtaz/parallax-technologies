"use client";

import { Layers } from "lucide-react";
import { motion } from "framer-motion";
import { ptEase } from "@/lib/motion";

const projects = [
  {
    badge: "Marketing & experience",
    title: "Evoxers",
    desc: "Brand-forward showcase with motion, rich UI, and interactive storytelling—built for a high-impact digital presence.",
    gradient: "from-slate-900 via-violet-950 to-slate-900",
  },
  {
    badge: "IT services platform",
    title: "IT Dukes",
    desc: "Multi-page production site covering services, founder story, and trust-building content for an IT-focused brand.",
    gradient: "from-blue-950 via-slate-900 to-blue-900",
  },
  {
    badge: "Forms & operations",
    title: "Evoxers intake & dashboard",
    desc: "Structured questionnaires, submissions pipeline, and admin surfaces for capturing and acting on client input.",
    gradient: "from-emerald-950 via-slate-900 to-teal-950",
  },
  {
    badge: "Business web",
    title: "CPI Business",
    desc: "Nuxt-based business web experience tailored for clarity, performance, and maintainable content delivery.",
    gradient: "from-slate-800 via-zinc-900 to-neutral-950",
  },
  {
    badge: "Product landing",
    title: "Lottae",
    desc: "Polished landing experience with lead flows, demos, and integrated touchpoints aligned to product launch goals.",
    gradient: "from-indigo-950 via-blue-950 to-slate-950",
  },
  {
    badge: "Capabilities",
    title: "Parallax delivery playbook",
    desc: "How we ship: discovery, UX and UI, full-stack implementation, cloud deployment, and measured iteration.",
    gradient: "from-blue-900 via-blue-700 to-cyan-900",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: ptEase } },
};

export function FeaturedProjects() {
  return (
    <section id="projects" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: ptEase }}
        >
          <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Portfolio
          </span>
          <h2 className="mt-4 text-3xl font-bold text-blue-800 sm:text-4xl">
            Selected work by Parallax Technologies
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Representative engagements and product surfaces we have architected,
            built, and shipped—aligned to your goals from day one.
          </p>
        </motion.div>
        <motion.div
          className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
        >
          {projects.map((p) => (
            <motion.article
              key={p.title}
              variants={item}
              whileHover={{ y: -8, transition: { duration: 0.28, ease: ptEase } }}
              className="saas-card-hover group overflow-hidden rounded-2xl bg-white shadow-lg shadow-slate-200/90 ring-1 ring-slate-200/60 transition-shadow duration-300 hover:shadow-2xl hover:shadow-blue-200/55 hover:ring-blue-200/80"
            >
              <div
                className={`relative h-44 bg-gradient-to-br ${p.gradient} transition duration-500 group-hover:brightness-110`}
              >
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-blue-600 shadow-sm">
                  {p.badge}
                </span>
                <div
                  className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition duration-300 group-hover:scale-110 group-hover:bg-white/25"
                  aria-hidden
                >
                  <Layers className="h-5 w-5 opacity-90" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-blue-800 transition group-hover:text-blue-600">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
