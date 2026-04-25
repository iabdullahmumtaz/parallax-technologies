"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { BookDemoPanel } from "./BookDemoPanel";
import { ContactForm } from "./ContactForm";
import { Reveal } from "./Reveal";
import { SiteFooter } from "./SiteFooter";
import { ptEase, staggerContainer, staggerItem } from "@/lib/motion";

const cards = [
  {
    title: "Email",
    detail: "info.parallax.tech@gmail.com",
    icon: Mail,
    href: "mailto:info.parallax.tech@gmail.com",
  },
  {
    title: "Phone",
    detail: "+1 (555) 123-4567",
    icon: Phone,
  },
  {
    title: "Office",
    detail: "San Francisco, CA",
    icon: MapPin,
  },
];

export function ContactSection() {
  return (
    <div id="contact" className="scroll-mt-24 border-t border-white/5 bg-pt-navy">
      <section className="relative overflow-hidden py-20 sm:py-24">
        <div
          className="pointer-events-none absolute left-0 top-0 h-[min(60%,420px)] w-[min(100%,520px)] -translate-x-1/4 rounded-full bg-pt-blue/12 blur-[100px]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BookDemoPanel />
          <Reveal className="text-center" y={20}>
            <span className="inline-block rounded-full border border-pt-mint/40 bg-pt-mint/5 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-pt-mint shadow-[0_0_28px_-6px_rgba(121,216,165,0.35)]">
              Get in touch
            </span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Let&apos;s start a conversation
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pt-muted">
              Ready to transform your business with innovative technology? Reach
              out and let&apos;s discuss your project.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-10 lg:grid-cols-3">
            <motion.div
              className="flex flex-col gap-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-24px" }}
            >
              {cards.map((c) => (
                <motion.div
                  key={c.title}
                  variants={staggerItem}
                  whileHover={{
                    y: -4,
                    transition: { duration: 0.22, ease: ptEase },
                  }}
                  className="group flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:border-pt-blue/40 hover:bg-white/[0.07] hover:shadow-[0_16px_48px_-20px_rgba(49,100,211,0.4)]"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-pt-blue to-cyan-400/90 shadow-lg shadow-pt-blue/25 transition duration-300 group-hover:scale-110 group-hover:shadow-pt-blue/45">
                    <c.icon className="h-5 w-5 text-white" aria-hidden />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{c.title}</p>
                    {"href" in c && c.href ? (
                      <a
                        href={c.href}
                        className="text-sm text-pt-muted transition hover:text-pt-mint"
                      >
                        {c.detail}
                      </a>
                    ) : (
                      <p className="text-sm text-pt-muted">{c.detail}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
