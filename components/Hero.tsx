import Link from "next/link";
import { ArrowRight, ArrowUpRight, Play, ShieldCheck, Sparkles } from "lucide-react";
import { components, demo, downloads, members, milestones, project, site } from "@/data/research";

const stages: Record<string, { stage: string; question: string }> = {
  "fake-job-post-detection": { stage: "Job post", question: "Is the posting fake?" },
  "employer-legitimacy-verification": { stage: "Employer", question: "Is the company real?" },
  "scam-communication-detection": { stage: "Conversation", question: "Is the recruiter manipulating?" },
  "fraud-aware-job-recommendation": { stage: "Recommendation", question: "Which safe jobs fit best?" },
};

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
              href="/domain"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Explore the research
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={demo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <Play className="h-4 w-4 fill-current" />
              Watch the demo
              <ArrowUpRight className="h-4 w-4 text-white/60 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
            </a>
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
          <div className="rounded-2xl border border-white/15 bg-white/[0.07] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8">
            <div className="flex items-end justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
                  Research at a glance
                </p>
                <p className="mt-2 font-display text-lg font-semibold text-white">
                  How every job gets screened
                </p>
              </div>
              <span className="shrink-0 text-xs text-white/45">
                {components.length} components
              </span>
            </div>

            <div className="relative mt-5">
              <div aria-hidden className="absolute bottom-4 left-4 top-4 w-px bg-white/15">
                <span className="absolute left-1/2 h-12 w-px -translate-x-1/2 animate-flow bg-linear-to-b from-transparent via-sky-300 to-transparent" />
              </div>

              <p className="relative flex items-center gap-4 pb-2 text-xs text-white/55">
                <span className="grid h-8 w-8 shrink-0 place-items-center">
                  <span className="h-2 w-2 rounded-full bg-white/50 ring-4 ring-primary" />
                </span>
                A job seeker finds a job post
              </p>

              <ol>
                {components.map((c, i) => (
                  <li key={c.id}>
                    <Link
                      href={`/domain#${c.id}`}
                      className="group relative flex items-start gap-4 rounded-xl py-3 pr-3 transition hover:bg-white/5"
                    >
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md border border-white/25 bg-primary font-display text-xs font-bold text-white transition group-hover:border-white group-hover:bg-white group-hover:text-primary">
                        0{i + 1}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-300/90">
                          {stages[c.id]?.stage}
                        </span>
                        <span className="mt-1 block text-sm font-semibold leading-snug text-white">
                          {c.title}
                        </span>
                        <span className="mt-1 block text-xs text-white/55">
                          {stages[c.id]?.question} · {c.owner}
                        </span>
                      </span>
                      <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-white/40 opacity-0 transition group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ol>

              <div className="relative flex items-start gap-4 pt-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md border border-sky-300/70 bg-primary text-sky-300 shadow-[0_0_0_4px_rgb(125_211_252/0.12)]">
                  <ShieldCheck className="h-4 w-4" strokeWidth={2.25} />
                </span>
                <span>
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-300/90">
                    Result
                  </span>
                  <span className="mt-1 block text-sm font-semibold text-white">
                    Only safe, verified jobs are recommended
                  </span>
                </span>
              </div>
            </div>
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
