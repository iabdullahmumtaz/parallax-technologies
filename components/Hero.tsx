import Link from "next/link";
import { Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-network-radial" />
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-70" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-pt-mint/30 bg-pt-mint/5 px-4 py-1.5 text-xs font-medium text-pt-mint">
          <Sparkles className="h-3.5 w-3.5" aria-hidden />
          Empowering innovation through technology
        </div>
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          Building{" "}
          <span className="text-gradient-brand">intelligent</span>
          <br />
          digital solutions
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-pt-muted sm:text-lg">
          We specialize in AI development, machine learning, cloud infrastructure,
          and cutting-edge web solutions that transform businesses and drive
          innovation.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#contact"
            className="inline-flex w-full items-center justify-center rounded-full px-8 py-3 text-sm font-semibold text-white btn-gradient shadow-xl shadow-pt-blue/30 transition hover:opacity-95 sm:w-auto"
          >
            Start your project →
          </Link>
          <Link
            href="#services"
            className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-white/25 hover:bg-white/10 sm:w-auto"
          >
            Explore services
          </Link>
        </div>
      </div>
    </section>
  );
}
