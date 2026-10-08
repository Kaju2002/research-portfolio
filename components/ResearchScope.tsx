import { Lightbulb, SearchX, TriangleAlert, type LucideIcon } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { scope } from "@/data/research";

type ScopeCard = {
  label: string;
  icon: LucideIcon;
  text: string;
  points: string[];
  tone: string;
};

const cards: ScopeCard[] = [
  {
    label: "Research Gap",
    icon: SearchX,
    text: scope.researchGap.summary,
    points: scope.researchGap.points,
    tone: "bg-amber-50 text-amber-600 ring-amber-100",
  },
  {
    label: "Research Problem",
    icon: TriangleAlert,
    text: scope.problem.statement,
    points: scope.problem.points,
    tone: "bg-rose-50 text-rose-600 ring-rose-100",
  },
  {
    label: "Proposed Solution",
    icon: Lightbulb,
    text: scope.solution.summary,
    points: scope.solution.points,
    tone: "bg-emerald-50 text-emerald-600 ring-emerald-100",
  },
];

export default function ResearchScope({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section className="bg-primary-soft">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        {showHeading && (
          <SectionHeading
            eyebrow="Project scope"
            title="From research gap to solution"
            description="How the project moves from what is missing in existing work, to the problem we address, to the system we propose."
            align="center"
          />
        )}

        <div className={`grid gap-6 lg:grid-cols-3 ${showHeading ? "mt-14" : ""}`}>
          {cards.map((card, i) => (
            <article
              key={card.label}
              className="group relative flex flex-col rounded-3xl bg-white p-8 shadow-sm ring-1 ring-border transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="flex items-center justify-between">
                <span className={`grid h-12 w-12 place-items-center rounded-2xl ring-1 ${card.tone}`}>
                  <card.icon className="h-6 w-6" />
                </span>
                <span className="font-display text-5xl font-extrabold text-primary/5 transition group-hover:text-primary/10">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-primary">{card.label}</h3>
              <p className="mt-3 leading-relaxed text-foreground/75">{card.text}</p>
              <ul className="mt-6 space-y-3 border-t border-border pt-6">
                {card.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-foreground/75">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
