import { CircleCheck, Sparkles, Target, UserRound } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { components, scope } from "@/data/research";

export default function Objectives() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <SectionHeading
        eyebrow="Research objectives"
        title="Objectives by component"
        description="Each team member owns one component of the system. Every component has its own novelty, main objective and sub-objectives."
      />

      <div className="relative mt-10 overflow-hidden rounded-3xl bg-primary p-8 text-white sm:p-10">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/30 blur-3xl" />
        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/15">
            <Target className="h-7 w-7" />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              Overall main objective
            </p>
            <p className="mt-2 font-display text-xl font-semibold leading-snug sm:text-2xl">
              {scope.mainObjective}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {components.map((c, i) => (
          <article
            key={c.id}
            id={c.id}
            className="flex scroll-mt-24 flex-col rounded-3xl bg-white p-7 shadow-sm ring-1 ring-border transition duration-300 hover:shadow-xl hover:shadow-primary/10 sm:p-8"
          >
            <header className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary font-display text-lg font-bold text-white">
                0{i + 1}
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-xl font-bold text-primary">{c.title}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
                  <UserRound className="h-4 w-4" />
                  {c.owner}
                </p>
              </div>
            </header>

            <div className="mt-6 rounded-2xl bg-amber-50 p-5 ring-1 ring-amber-100">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-700">
                <Sparkles className="h-4 w-4" />
                Novelty
              </p>
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">{c.novelty}</p>
            </div>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                Main objective
              </p>
              <p className="mt-2 leading-relaxed text-foreground/80">{c.mainObjective}</p>
            </div>

            <div className="mt-6 border-t border-border pt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                Sub-objectives
              </p>
              <ul className="mt-3 space-y-2.5">
                {c.subObjectives.map((s) => (
                  <li key={s} className="flex gap-3 text-sm text-foreground/80">
                    <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
