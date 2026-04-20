export function AboutIntro() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-white/5 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="flex gap-6">
          <div
            className="w-1 shrink-0 rounded-full bg-gradient-to-b from-pt-mint to-pt-blue"
            aria-hidden
          />
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-white">
              About us
            </h2>
            <div className="mt-6 space-y-4 text-pt-muted leading-relaxed">
              <p>
                Parallax Technologies is a forward-thinking digital solutions
                company dedicated to helping businesses build, grow, and scale in
                the modern digital landscape. We combine creativity with technology
                to deliver impactful design, high-performance web solutions,
                intelligent systems, and streamlined DevOps practices.
              </p>
              <p>
                Our approach is rooted in precision, innovation, and user-focused
                execution. From crafting strong brand identities to developing
                scalable web applications and deploying reliable infrastructure,
                we ensure every solution is tailored to meet real business needs.
              </p>
              <p className="text-white/90">
                At Parallax Technologies, we don&apos;t just create digital
                products—we build efficient, scalable, and future-ready systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
