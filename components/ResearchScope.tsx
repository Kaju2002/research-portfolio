import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { scope } from "@/data/research";

type ScopeCard = {
  label: string;
  text: string;
  points: string[];
};

const cards: ScopeCard[] = [
  {
    label: "Research Gap",
    text: scope.researchGap.summary,
    points: scope.researchGap.points,
  },
  {
    label: "Research Problem",
    text: scope.problem.statement,
    points: scope.problem.points,
  },
  {
    label: "Proposed Solution",
    text: scope.solution.summary,
    points: scope.solution.points,
  },
];

function Point({ text, highlight }: { text: string; highlight: boolean }) {
  const [label, ...rest] = text.split(": ");
  if (rest.length === 0) return <>{text}</>;
  return (
    <>
      <strong className={`font-semibold ${highlight ? "text-white" : "text-primary"}`}>
        {label}:
      </strong>{" "}
      {rest.join(": ")}
    </>
  );
}

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

        <div className={`grid gap-6 lg:grid-cols-3 lg:gap-8 ${showHeading ? "mt-14" : ""}`}>
          {cards.map((card, i) => {
            const last = i === cards.length - 1;
            return (
              <article
                key={card.label}
                className={`relative flex flex-col rounded-2xl p-8 transition duration-300 ${
                  last
                    ? "bg-primary text-white shadow-xl shadow-primary/20"
                    : "bg-white shadow-sm ring-1 ring-border hover:shadow-lg hover:shadow-primary/5"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`font-display text-sm font-bold tabular-nums ${
                      last ? "text-white/60" : "text-accent"
                    }`}
                  >
                    0{i + 1}
                  </span>
                  <span className={`h-px flex-1 ${last ? "bg-white/20" : "bg-border"}`} />
                </div>

                <h3
                  className={`mt-5 font-display text-2xl font-bold ${
                    last ? "text-white" : "text-primary"
                  }`}
                >
                  {card.label}
                </h3>
                <p
                  className={`mt-3 leading-relaxed ${last ? "text-white/80" : "text-foreground/75"}`}
                >
                  {card.text}
                </p>

                <ul
                  className={`mt-6 divide-y text-sm leading-relaxed ${
                    last ? "divide-white/15 text-white/75" : "divide-border text-foreground/70"
                  }`}
                >
                  {card.points.map((p) => (
                    <li key={p} className="py-3 first:pt-0 last:pb-0">
                      <Point text={p} highlight={last} />
                    </li>
                  ))}
                </ul>

                {!last && (
                  <span className="absolute -right-[34px] top-7 z-10 hidden h-9 w-9 place-items-center rounded-full bg-white text-primary shadow-md ring-1 ring-border lg:grid">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
