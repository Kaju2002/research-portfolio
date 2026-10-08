import { Target } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { project, scope } from "@/data/research";

export default function Introduction() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow="Introduction" title="About the research" />
          <div className="mt-6 space-y-5 text-base leading-relaxed text-foreground/80 sm:text-lg">
            {project.introduction.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <aside className="self-start rounded-3xl bg-white p-8 shadow-xl shadow-primary/5 ring-1 ring-border">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/30">
            <Target className="h-6 w-6" />
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
    </section>
  );
}
