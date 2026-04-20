import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { SiteFooter } from "./SiteFooter";

const cards = [
  {
    title: "Email",
    detail: "contact@parallax.tech",
    icon: Mail,
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
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block rounded-full border border-pt-mint/40 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-pt-mint">
              Get in touch
            </span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Let&apos;s start a conversation
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pt-muted">
              Ready to transform your business with innovative technology? Reach
              out and let&apos;s discuss your project.
            </p>
          </div>
          <div className="mt-14 grid gap-10 lg:grid-cols-3">
            <div className="flex flex-col gap-4">
              {cards.map((c) => (
                <div
                  key={c.title}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-pt-blue to-cyan-400/90">
                    <c.icon className="h-5 w-5 text-white" aria-hidden />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{c.title}</p>
                    <p className="text-sm text-pt-muted">{c.detail}</p>
                  </div>
                </div>
              ))}
            </div>
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
