const stats = [
  { value: "50+", label: "Technologies" },
  { value: "100+", label: "Projects delivered" },
  { value: "99%", label: "Client satisfaction" },
  { value: "24/7", label: "Support available" },
];

export function StatsBar() {
  return (
    <section className="border-t border-white/10 bg-black py-14 sm:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-3xl font-bold text-sky-400 sm:text-4xl">{s.value}</p>
            <p className="mt-1 text-sm text-zinc-300">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
