import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { achievements } from "@/data/research";

export default function Achievements() {
  return (
    <section id="achievements" className="scroll-mt-24 bg-primary-soft">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Achievements"
          title="Recognition"
          description="Awards, publications and competition results earned by the project and its members."
        />

        {achievements.length === 0 ? (
          <div className="mt-10 flex flex-col gap-2 rounded-2xl border border-dashed border-primary/20 bg-white px-7 py-8 sm:flex-row sm:items-center sm:gap-6">
            <span className="font-display text-sm font-bold uppercase tracking-[0.15em] text-accent">
              Coming soon
            </span>
            <span className="hidden h-px w-10 bg-border sm:block" />
            <p className="text-sm leading-relaxed text-muted">
              Achievements will be added here as the project progresses, including the research
              paper publication.
            </p>
          </div>
        ) : (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {achievements.map((a, i) => (
              <article
                key={a.title}
                className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-border"
              >
                {a.image && (
                  <Image
                    src={a.image}
                    alt={a.title}
                    width={800}
                    height={500}
                    className="aspect-16/10 w-full object-cover"
                  />
                )}
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-sm font-bold tabular-nums text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px flex-1 bg-border" />
                    <span className="text-xs font-semibold text-muted">{a.date}</span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-primary">{a.title}</h3>
                  <p className="mt-1 text-sm font-medium text-foreground/70">{a.event}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{a.description}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
