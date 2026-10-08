import Image from "next/image";
import { ImageIcon } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { components, project } from "@/data/research";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">{children}</p>
  );
}

export default function Methodology() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <SectionHeading
        eyebrow="System overview"
        title="Overall system architecture"
        description="A high-level view of how the four components work together as one system."
      />

      <div className="mt-10 overflow-hidden rounded-2xl bg-white p-4 shadow-sm ring-1 ring-border sm:p-6">
        {project.architectureDiagram ? (
          <Image
            src={project.architectureDiagram}
            alt="Overall system architecture diagram"
            width={983}
            height={1024}
            sizes="(min-width: 768px) 720px, 100vw"
            className="mx-auto h-auto w-full max-w-180"
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
            id={c.id}
            className="grid scroll-mt-24 gap-10 rounded-2xl bg-white p-7 shadow-sm ring-1 ring-border transition duration-300 hover:shadow-lg hover:shadow-primary/5 sm:p-9 lg:grid-cols-[1.1fr_1fr] lg:gap-14"
          >
            <div>
              <div className="flex items-center gap-4">
                <span className="font-display text-sm font-bold tabular-nums text-accent">
                  0{i + 1}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">
                  Methodology
                </span>
                <span className="h-px flex-1 bg-border" />
              </div>

              <h3 className="mt-5 font-display text-xl font-bold leading-snug text-primary sm:text-2xl">
                {c.title}
              </h3>
              <p className="mt-1.5 text-sm text-muted">
                {c.owner} · {c.ownerId}
              </p>

              <p className="mt-6 leading-relaxed text-foreground/80">{c.methodology.summary}</p>

              <div className="mt-8 border-t border-border pt-6">
                <Label>Technologies</Label>
                <dl className="mt-4 space-y-3">
                  {c.methodology.technologies.map((g) => (
                    <div key={g.layer} className="grid gap-1.5 sm:grid-cols-[9.5rem_1fr] sm:gap-4">
                      <dt className="pt-1 text-xs font-medium text-muted">{g.layer}</dt>
                      <dd className="flex flex-wrap gap-1.5">
                        {g.items.map((t) => (
                          <span
                            key={t}
                            className="rounded-md border border-border px-2 py-0.5 text-[13px] font-medium text-foreground/80"
                          >
                            {t}
                          </span>
                        ))}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="lg:border-l lg:border-border lg:pl-14">
              <Label>Process</Label>
              <ol className="mt-4 divide-y divide-border">
                {c.methodology.steps.map((step, s) => (
                  <li key={step} className="flex gap-4 py-3.5 first:pt-0 last:pb-0">
                    <span className="w-6 shrink-0 font-display text-sm font-bold tabular-nums text-primary/40">
                      0{s + 1}
                    </span>
                    <span className="text-[15px] leading-relaxed text-foreground/85">{step}</span>
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
