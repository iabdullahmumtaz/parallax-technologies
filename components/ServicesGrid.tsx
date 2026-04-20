import { Brain, LineChart, Code2 } from "lucide-react";

const cards = [
  {
    title: "AI Development",
    body: "Custom AI solutions powered by advanced machine learning algorithms and neural networks.",
    icon: Brain,
  },
  {
    title: "Machine Learning Solutions",
    body: "Predictive analytics and intelligent automation to optimize your business processes.",
    icon: LineChart,
  },
  {
    title: "Web Development",
    body: "Modern, scalable web applications built with cutting-edge technologies and best practices.",
    icon: Code2,
  },
];

export function ServicesGrid() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Our services
          </span>
          <h2 className="mt-4 text-3xl font-bold text-blue-700 sm:text-4xl">
            Comprehensive technology solutions
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            From concept to deployment, we provide end-to-end solutions that drive
            innovation and growth.
          </p>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {cards.map((c) => (
            <article
              key={c.title}
              className="rounded-3xl bg-white p-8 shadow-lg shadow-slate-200/80 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-emerald-400">
                <c.icon className="h-6 w-6 text-white" aria-hidden />
              </div>
              <h3 className="text-lg font-bold text-blue-700">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
