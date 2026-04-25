"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { ptEase } from "@/lib/motion";

const faqs = [
  {
    q: "How do I book a demo or discovery call?",
    a: "Use the “Book a session” panel in the contact section: pick a time when our scheduling link is configured, request a Google Meet link, or email us directly. We’ll confirm details and send prep materials if needed.",
  },
  {
    q: "What kinds of work does Parallax Technologies take on?",
    a: "We design and build marketing sites, product landings, dashboards and internal tools, cloud-ready web apps, and integrations—often with AI-assisted workflows, analytics, or automation where it adds real value.",
  },
  {
    q: "How does a typical project start?",
    a: "We begin with a short discovery call to align on goals, constraints, and timeline. From there we propose a phased plan: design or technical spikes, build, QA, launch, and optional iteration.",
  },
  {
    q: "Do you work with our existing codebase or team?",
    a: "Yes. We regularly embed with in-house engineers, extend legacy systems, or greenfield new surfaces alongside your stakeholders.",
  },
  {
    q: "What technologies do you prefer?",
    a: "We ship production sites with modern stacks—React and Next.js, Vite where it fits, Nuxt for Vue-first teams, and solid API and data layers (including serverless and managed services) chosen per project.",
  },
  {
    q: "What happens after launch?",
    a: "We can hand off fully documented code, or stay on for maintenance, performance tuning, security updates, and feature work—whatever your product needs.",
  },
  {
    q: "Where are you located and how do you collaborate?",
    a: "Parallax Technologies works with clients remotely across time zones, with clear async communication and scheduled checkpoints so delivery stays predictable.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="scroll-mt-24 border-t border-white/5 bg-pt-navy py-20 sm:py-24"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, ease: ptEase }}
        >
          <span className="inline-block rounded-full border border-pt-mint/40 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-pt-mint">
            FAQ
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Questions, answered
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-pt-muted">
            Straightforward answers about how Parallax Technologies partners with
            teams to ship software.
          </p>
        </motion.div>
        <ul className="mt-12 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.li
                key={item.q}
                layout
                initial={false}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-colors duration-300 hover:border-white/20"
                whileHover={{ scale: 1.005 }}
                transition={{ duration: 0.2 }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-white transition hover:bg-white/[0.04] sm:text-base"
                  aria-expanded={isOpen}
                >
                  {item.q}
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-pt-muted transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: ptEase }}
                      className="overflow-hidden border-t border-white/5"
                    >
                      <p className="px-5 pb-4 pt-3 text-sm leading-relaxed text-pt-muted">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
