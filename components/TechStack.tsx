const items = [
  { name: "React", category: "Frontend", initial: "R" },
  { name: "Node.js", category: "Backend", initial: "N" },
  { name: "Python", category: "AI/ML", initial: "P" },
  { name: "TensorFlow", category: "AI/ML", initial: "T" },
  { name: "AWS", category: "Cloud", initial: "A" },
  { name: "Docker", category: "DevOps", initial: "D" },
  { name: "MongoDB", category: "Database", initial: "M" },
  { name: "TypeScript", category: "Language", initial: "T" },
];

export function TechStack() {
  return (
    <section
      id="technology"
      className="scroll-mt-24 border-t border-white/5 bg-pt-navy py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-block rounded-full border border-pt-mint/50 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-pt-mint">
            Technology stack
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Powered by modern technologies
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-pt-muted">
            We leverage industry-leading tools and frameworks to deliver
            cutting-edge solutions.
          </p>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((t) => (
            <div
              key={`${t.name}-${t.category}`}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-pt-blue/35"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-pt-blue to-cyan-400 text-sm font-bold text-white">
                {t.initial}
              </div>
              <p className="font-semibold text-white">{t.name}</p>
              <p className="text-sm text-pt-muted">{t.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
