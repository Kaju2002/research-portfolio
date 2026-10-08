import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Download,
  FlaskConical,
  Mail,
  Target,
  Trophy,
  Users,
  type LucideIcon,
} from "lucide-react";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import ResearchScope from "@/components/ResearchScope";
import SectionHeading from "@/components/SectionHeading";

const sections: { href: string; title: string; text: string; icon: LucideIcon }[] = [
  {
    href: "/research",
    title: "Research Objectives",
    text: "Novelty, main objective and sub-objectives of every component.",
    icon: Target,
  },
  {
    href: "/methodology",
    title: "Methodology",
    text: "System architecture and the approach behind each component.",
    icon: FlaskConical,
  },
  {
    href: "/timeline",
    title: "Milestones",
    text: "Every stage of the project, from initialization to final submission.",
    icon: Calendar,
  },
  {
    href: "/downloads",
    title: "Downloads",
    text: "Proposal, presentations, thesis and research paper.",
    icon: Download,
  },
  {
    href: "/about",
    title: "About Us",
    text: "Our supervisors and the researchers behind the project.",
    icon: Users,
  },
  {
    href: "/achievements",
    title: "Achievements",
    text: "Awards, publications and recognition for the research.",
    icon: Trophy,
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <ResearchScope />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Explore"
          title="Everything about the project"
          description="Dive into each part of the research portfolio."
          align="center"
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group rounded-3xl bg-white p-7 shadow-sm ring-1 ring-border transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 hover:ring-primary/20"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-light text-primary transition group-hover:bg-primary group-hover:text-white">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 flex items-center gap-2 font-display text-lg font-bold text-primary">
                {s.title}
                <ArrowRight className="h-4 w-4 -translate-x-1 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" />
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-primary px-8 py-14 text-center text-white sm:px-14">
          <div className="bg-grid pointer-events-none absolute inset-0" />
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Have a question about our research?</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              We would love to hear from you. Reach out for collaborations, feedback or more
              details about the project.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-lg transition hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" />
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
