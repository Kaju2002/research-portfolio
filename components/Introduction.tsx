import { ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { project, scope } from "@/data/research";

export default function Introduction() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow="Introduction" title="About the research" />
          <div className="mt-6 space-y-5 text-base leading-relaxed text-foreground/80 sm:text-[17px]">
            {project.introduction.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <aside className="self-start rounded-3xl bg-white p-8 shadow-xl shadow-primary/5 ring-1 ring-border lg:sticky lg:top-24">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/30">
            <ShieldCheck className="h-6 w-6" />
          </span>
          <h3 className="mt-6 font-display text-xl font-bold text-primary">Main objective</h3>
          <p className="mt-3 leading-relaxed text-foreground/75">{scope.mainObjective}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.keywords.map((k) => (
              <span
                key={k}
                className="rounded-full bg-primary-light px-3 py-1 text-xs font-medium text-primary"
              >
                {k}
              </span>
            ))}
          </div>
        </aside>
      </div>

      <div className="mt-16">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          From our preliminary survey
        </p>
        <dl className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {project.surveyHighlights.map((s) => (
            <div
              key={s.label}
              className="flex flex-col rounded-3xl bg-white p-6 text-center shadow-sm ring-1 ring-border transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
            >
              <dt className="order-2 mt-2 text-sm leading-snug text-muted">{s.label}</dt>
              <dd className="font-display text-4xl font-extrabold text-primary">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
