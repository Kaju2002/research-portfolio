import Link from "next/link";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { components, downloads, members, milestones, project, site } from "@/data/research";

const stats = [
  { value: components.length, label: "Research components" },
  { value: milestones.length, label: "Project milestones" },
  { value: downloads.length, label: "Deliverables" },
  { value: members.length, label: "Team members" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary text-white">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 animate-float rounded-full bg-accent/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-[28rem] w-[28rem] animate-float rounded-full bg-indigo-400/25 blur-3xl [animation-delay:-4s]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-[1.25fr_1fr] lg:pb-28 lg:pt-24">
        <div>
          <span className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-amber-300" />
            {site.groupId} · {project.domain} · {site.year}
          </span>

          <h1 className="text-gradient mt-6 animate-fade-up font-display text-3xl font-extrabold leading-[1.15] tracking-tight [animation-delay:80ms] sm:text-4xl lg:text-5xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-white/70 [animation-delay:160ms]">
            {project.tagline}
          </p>

          <div className="mt-9 flex animate-fade-up flex-wrap gap-3 [animation-delay:240ms]">
            <Link
              href="/research"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Explore the research
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/downloads"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <Download className="h-4 w-4" />
              Downloads
            </Link>
          </div>

          <ul className="mt-10 flex animate-fade-up flex-wrap gap-2 [animation-delay:320ms]">
            {project.keywords.map((k) => (
              <li
                key={k}
                className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/70"
              >
                #{k}
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-fade-up [animation-delay:200ms]">
          <div className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              Research at a glance
            </p>
            <ol className="mt-6 space-y-3">
              {components.map((c, i) => (
                <li
                  key={c.id}
                  className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 transition hover:bg-white/10"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white font-display text-sm font-bold text-primary">
                    0{i + 1}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold leading-snug text-white">
                      {c.title}
                    </span>
                    <span className="mt-0.5 block text-xs text-white/55">
                      {c.owner} · {c.ownerId}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-primary-dark/60 backdrop-blur">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 sm:px-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col py-7 text-center">
              <dt className="order-2 mt-1 text-xs font-medium uppercase tracking-wider text-white/50">
                {s.label}
              </dt>
              <dd className="font-display text-3xl font-bold text-white">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
