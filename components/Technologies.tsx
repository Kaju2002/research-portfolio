import SectionHeading from "@/components/SectionHeading";
import { components } from "@/data/research";

const layers = [...new Set(components.flatMap((c) => c.methodology.technologies.map((g) => g.layer)))];

const rows = layers.map((layer) => ({
  layer,
  items: [
    ...new Set(
      components.flatMap(
        (c) => c.methodology.technologies.find((g) => g.layer === layer)?.items ?? [],
      ),
    ),
  ],
}));

export default function Technologies() {
  return (
    <section id="technologies" className="scroll-mt-32 bg-primary-soft">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Technologies used"
          title="Technology stack"
          description="The tools and frameworks used to build the system."
        />

        <dl className="mt-10 divide-y divide-border rounded-2xl bg-white px-6 shadow-sm ring-1 ring-border sm:px-8">
          {rows.map((row) => (
            <div key={row.layer} className="grid gap-3 py-6 md:grid-cols-[11rem_1fr] md:gap-8">
              <dt className="pt-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                {row.layer}
              </dt>
              <dd className="flex flex-wrap gap-2">
                {row.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-border bg-white px-3 py-1.5 text-sm font-medium text-foreground/85"
                  >
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
