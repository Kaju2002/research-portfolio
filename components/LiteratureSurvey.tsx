"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { components, literature } from "@/data/research";

export default function LiteratureSurvey() {
  const [active, setActive] = useState(0);
  const component = components[active];
  const review = literature.find((l) => l.componentId === component.id);

  return (
    <section id="literature" className="mx-auto max-w-7xl scroll-mt-32 px-5 py-20 sm:px-8 lg:py-28">
      <SectionHeading
        eyebrow="Literature survey"
        title="What existing research has done"
        description="Key previous studies reviewed for each component, what they contributed, and what they leave unsolved."
      />

      <div role="tablist" aria-label="Research components" className="mt-10 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {components.map((c, i) => {
          const selected = i === active;
          return (
            <button
              key={c.id}
              type="button"
              role="tab"
              id={`literature-tab-${i}`}
              aria-selected={selected}
              aria-controls="literature-panel"
              onClick={() => setActive(i)}
              className={`flex items-start gap-3 rounded-xl border px-4 py-3.5 text-left transition ${
                selected
                  ? "border-primary bg-primary text-white"
                  : "border-border bg-white text-foreground/80 hover:border-primary/30 hover:text-primary"
              }`}
            >
              <span
                className={`font-display text-sm font-bold tabular-nums ${selected ? "text-white/60" : "text-accent"}`}
              >
                0{i + 1}
              </span>
              <span className="text-sm font-semibold leading-snug">{c.title}</span>
            </button>
          );
        })}
      </div>

      {review && (
        <div
          role="tabpanel"
          id="literature-panel"
          aria-labelledby={`literature-tab-${active}`}
          className="mt-6 rounded-2xl bg-white p-7 shadow-sm ring-1 ring-border sm:p-9"
        >
          <p className="text-sm text-muted">
            {component.owner} · {component.ownerId}
          </p>
          <p className="mt-3 max-w-4xl leading-relaxed text-foreground/80">{review.overview}</p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[40rem] text-left text-sm">
              <thead className="border-b-2 border-primary/15 text-xs uppercase tracking-[0.12em] text-primary/70">
                <tr>
                  <th className="w-[22%] py-3 pr-6 font-semibold">Study</th>
                  <th className="py-3 pr-6 font-semibold">Contribution</th>
                  <th className="py-3 font-semibold">Limitation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {review.studies.map((s) => (
                  <tr key={s.authors} className="align-top">
                    <td className="py-4 pr-6 font-semibold text-primary">{s.authors}</td>
                    <td className="py-4 pr-6 leading-relaxed text-foreground/80">{s.contribution}</td>
                    <td className="py-4 leading-relaxed text-foreground/65">{s.limitation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 border-l-2 border-accent bg-primary-soft py-4 pl-5 pr-5">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              What is missing
            </p>
            <p className="mt-2 text-sm leading-relaxed text-foreground/80">{review.gap}</p>
          </div>
        </div>
      )}
    </section>
  );
}
