const SERVICES = [
  "UI/UX Design",
  "Web Development",
  "AI & Automation",
  "Cloud & Infrastructure",
  "DevOps Solutions",
  "Design & Branding",
];

function Pill({ label, filled }: { label?: string; filled: boolean }) {
  if (filled && label) {
    return (
      <div className="pill-glow inline-flex min-w-[200px] max-w-full items-center justify-center rounded-full border border-pt-blue bg-pt-navy-2/80 px-8 py-4 text-center text-sm font-bold uppercase tracking-wide text-white sm:min-w-[260px] sm:px-10 sm:text-base">
        {label}
      </div>
    );
  }
  return (
    <div
      className="inline-flex min-h-[52px] min-w-[200px] max-w-full items-center justify-center rounded-full border border-pt-blue/25 bg-transparent sm:min-w-[260px]"
      aria-hidden
    />
  );
}

export function ServicesPills() {
  return (
    <section
      id="services"
      className="scroll-mt-24 border-t border-white/5 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
          Our services
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-pt-muted">
          End-to-end capabilities across design, engineering, and infrastructure.
        </p>
        <div className="mt-14 flex flex-col gap-6">
          {SERVICES.map((label, i) => {
            const leftFirst = i % 2 === 0;
            return (
              <div
                key={label}
                className="flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap sm:justify-between sm:gap-8"
              >
                {leftFirst ? (
                  <>
                    <Pill filled label={label} />
                    <Pill filled={false} />
                  </>
                ) : (
                  <>
                    <Pill filled={false} />
                    <Pill filled label={label} />
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
