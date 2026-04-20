import {
  Bolt,
  Shield,
  TrendingUp,
  UsersRound,
} from "lucide-react";
import Link from "next/link";

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
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-pt-mint/40 bg-pt-mint/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-pt-mint">
              <span className="h-1.5 w-1.5 rounded-full bg-pt-mint shadow-[0_0_8px_#76d4a5]" />
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
              className="mt-8 inline-flex rounded-full px-8 py-3 text-sm font-semibold text-white btn-gradient shadow-lg shadow-pt-blue/25"
            >
              Let&apos;s work together
            </Link>
          </div>
          <div className="relative">
            <div className="mb-8 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-6 rounded-3xl bg-pt-blue/20 blur-3xl" />
                <div className="relative flex h-36 w-36 rotate-12 items-center justify-center rounded-2xl border border-pt-blue/40 bg-gradient-to-br from-pt-blue to-pt-navy-2 shadow-2xl shadow-pt-blue/40">
                  <span className="text-lg font-bold text-white">Cloud</span>
                </div>
                <div className="absolute -right-2 -top-2 h-3 w-3 rounded-full bg-pt-blue shadow-[0_0_12px_#2b67d9]" />
                <div className="absolute -bottom-1 left-4 h-2 w-2 rounded-full bg-pt-mint/80" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md transition hover:border-pt-blue/30"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-pt-blue to-cyan-400/80">
                    <f.icon className="h-5 w-5 text-white" aria-hidden />
                  </div>
                  <h3 className="font-semibold text-white">{f.title}</h3>
                  <p className="mt-1 text-sm text-pt-muted">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
