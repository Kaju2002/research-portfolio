import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MilestoneFact, MilestoneNext } from "@/components/MilestoneSummary";
import SectionHeading from "@/components/SectionHeading";
import { achievements, components, downloads, members, supervisors } from "@/data/research";

const subObjectiveCount = components.reduce((n, c) => n + c.subObjectives.length, 0);
const technologyCount = new Set(components.flatMap((c) => c.methodology.technologies.flatMap((g) => g.items))).size;
const availableDownloads = downloads.filter((d) => d.available).length;

const entries: { href: string; title: string; fact: React.ReactNode; detail: React.ReactNode }[] = [
  {
    href: "/research",
    title: "Research Objectives",
    fact: `${components.length} components · ${subObjectiveCount} sub-objectives`,
    detail: "Research gap, problem, solution and the novelty of every component.",
  },
  {
    href: "/methodology",
    title: "Methodology",
    fact: `${components.length} methodologies · ${technologyCount} technologies`,
    detail: "System architecture and the approach behind each component.",
  },
  {
    href: "/timeline",
    title: "Milestones",
    fact: <MilestoneFact />,
    detail: <MilestoneNext />,
  },
  {
    href: "/downloads",
    title: "Downloads",
    fact: `${availableDownloads} of ${downloads.length} available`,
    detail: "Proposal, presentations, thesis report and research paper.",
  },
  {
    href: "/about",
    title: "About Us",
    fact: `${supervisors.length} supervisors · ${members.length} researchers`,
    detail: "The supervisors and team behind the project.",
  },
  {
    href: "/achievements",
    title: "Achievements",
    fact: achievements.length > 0 ? `${achievements.length} achievements` : "Coming soon",
    detail: "Awards, publications and recognition for the research.",
  },
];

export default function Explore() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <SectionHeading
        eyebrow="Explore"
        title="Inside the portfolio"
        description="A quick look at every part of the project. Select a section to read more."
        align="center"
      />

      <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {entries.map((e, i) => (
          <li key={e.href}>
            <Link
              href={e.href}
              className="group flex h-full flex-col rounded-2xl bg-white p-7 shadow-sm ring-1 ring-border transition duration-300 hover:shadow-lg hover:shadow-primary/5 hover:ring-primary/30"
            >
              <div className="flex items-center gap-4">
                <span className="font-display text-sm font-bold tabular-nums text-accent">
                  0{i + 1}
                </span>
                <span className="h-px flex-1 bg-border transition-colors group-hover:bg-primary/30" />
                <ArrowUpRight className="h-4 w-4 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-primary">{e.title}</h3>
              <p className="mt-2 text-sm font-semibold text-foreground">{e.fact}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{e.detail}</p>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}
