import SectionHeading from "@/components/SectionHeading";
import { components, scope } from "@/data/research";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">{children}</p>
  );
}

export default function Objectives() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <SectionHeading
        eyebrow="Research objectives"
        title="Objectives by component"
        description="Each team member owns one component of the system. Every component has its own novelty, main objective and sub-objectives."
      />

      <div className="mt-10 rounded-2xl bg-primary px-7 py-8 text-white sm:px-10 sm:py-10">
        <div className="flex items-center gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Overall main objective
          </span>
          <span className="h-px flex-1 bg-white/20" />
        </div>
        <p className="mt-5 max-w-4xl font-display text-xl font-medium leading-relaxed sm:text-2xl">
          {scope.mainObjective}
        </p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {components.map((c, i) => (
          <article
            key={c.id}
            id={c.id}
            className="flex scroll-mt-24 flex-col rounded-2xl bg-white p-7 shadow-sm ring-1 ring-border transition duration-300 hover:shadow-lg hover:shadow-primary/5 sm:p-8"
          >
            <div className="flex items-center gap-4">
              <span className="font-display text-sm font-bold tabular-nums text-accent">
                0{i + 1}
              </span>
              <span className="h-px flex-1 bg-border" />
            </div>

            <h3 className="mt-5 font-display text-xl font-bold leading-snug text-primary">
              {c.title}
            </h3>
            <p className="mt-1.5 text-sm text-muted">
              {c.owner} · {c.ownerId}
            </p>

            <div className="mt-6 border-l-2 border-accent pl-4">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                Novelty
              </p>
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">{c.novelty}</p>
            </div>

            <div className="mt-6">
              <Label>Main objective</Label>
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">{c.mainObjective}</p>
            </div>

            <div className="mt-6 border-t border-border pt-6">
              <Label>Sub-objectives</Label>
              <ol className="mt-3 space-y-2.5">
                {c.subObjectives.map((s, n) => (
                  <li key={s} className="flex gap-3 text-sm leading-relaxed text-foreground/75">
                    <span className="w-5 shrink-0 font-semibold tabular-nums text-primary/40">
                      {n + 1}.
                    </span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
