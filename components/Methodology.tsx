import Image from "next/image";
import { ImageIcon, UserRound } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { components, project } from "@/data/research";

export default function Methodology() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <SectionHeading
        eyebrow="System overview"
        title="Overall system architecture"
        description="A high-level view of how the four components work together as one system."
      />

      <div className="mt-10 overflow-hidden rounded-3xl bg-white p-4 shadow-sm ring-1 ring-border sm:p-6">
        {project.architectureDiagram ? (
          <Image
            src={project.architectureDiagram}
            alt="Overall system architecture diagram"
            width={1600}
            height={900}
            className="h-auto w-full rounded-2xl"
          />
        ) : (
          <div className="grid aspect-[16/7] place-items-center rounded-2xl border-2 border-dashed border-primary/20 bg-primary-soft text-center">
            <div className="px-6">
              <ImageIcon className="mx-auto h-10 w-10 text-primary/40" />
              <p className="mt-3 font-medium text-primary">System architecture diagram</p>
              <p className="mt-1 text-sm text-muted">Coming soon</p>
            </div>
          </div>
        )}
      </div>

      <div className="mt-20">
        <SectionHeading
          eyebrow="Methodologies"
          title="How each component is built"
          description="The approach, process and technologies used for each of the four components."
        />
      </div>

      <div className="mt-10 space-y-6">
        {components.map((c, i) => (
          <article
            key={c.id}
            className="grid gap-8 rounded-3xl bg-white p-7 shadow-sm ring-1 ring-border transition duration-300 hover:shadow-xl hover:shadow-primary/10 sm:p-9 lg:grid-cols-[1fr_1.5fr]"
          >
            <div>
              <span className="inline-flex rounded-full bg-primary-light px-3 py-1 text-xs font-semibold text-primary">
                Methodology 0{i + 1}
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold text-primary">{c.title}</h3>
              <p className="mt-2 flex items-center gap-1.5 text-sm text-muted">
                <UserRound className="h-4 w-4" />
                {c.owner}
              </p>
              <p className="mt-5 leading-relaxed text-foreground/80">{c.methodology.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {c.methodology.technologies.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg bg-primary-soft px-3 py-1.5 text-xs font-medium text-primary ring-1 ring-primary/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <ol className="relative space-y-4 lg:border-l lg:border-border lg:pl-8">
              {c.methodology.steps.map((step, s) => (
                <li
                  key={step}
                  className="flex items-center gap-4 rounded-2xl bg-primary-soft/70 p-4 ring-1 ring-primary/5"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary text-sm font-bold text-white">
                    {s + 1}
                  </span>
                  <span className="font-medium text-foreground/85">{step}</span>
                </li>
              ))}
            </ol>
          </article>
        ))}
      </div>
    </section>
  );
}
