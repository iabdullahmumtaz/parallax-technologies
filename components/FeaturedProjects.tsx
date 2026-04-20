import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    badge: "Artificial Intelligence",
    title: "AI-Powered Analytics Platform",
    desc: "Real-time data insights powered by machine learning algorithms",
    gradient: "from-blue-900 via-blue-700 to-indigo-900",
    showArrow: false,
  },
  {
    badge: "Cloud Computing",
    title: "Cloud Infrastructure Solution",
    desc: "Scalable microservices architecture on AWS",
    gradient: "from-slate-200 via-sky-100 to-blue-100",
    showArrow: true,
  },
  {
    badge: "Web Development",
    title: "Enterprise Dashboard",
    desc: "Modern SaaS platform with advanced analytics",
    gradient: "from-slate-900 via-violet-950 to-slate-900",
    showArrow: false,
  },
];

export function FeaturedProjects() {
  return (
    <section id="projects" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Our work
          </span>
          <h2 className="mt-4 text-3xl font-bold text-blue-800 sm:text-4xl">
            Featured projects
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Explore our portfolio of innovative solutions that drive real business
            results.
          </p>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="overflow-hidden rounded-2xl bg-white shadow-lg shadow-slate-200/90 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className={`relative h-48 bg-gradient-to-br ${p.gradient}`}>
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-blue-600">
                  {p.badge}
                </span>
                {p.showArrow && (
                  <button
                    type="button"
                    className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-md"
                    aria-label="Open project"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </button>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-blue-800">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
