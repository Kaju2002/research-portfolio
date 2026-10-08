"use client";

import type { MilestoneStatus } from "@/data/research";
import { useMilestones } from "@/lib/useMilestones";

const statusStyles: Record<
  MilestoneStatus,
  { label: string; text: string; dot: string; segment: string; title: string }
> = {
  completed: {
    label: "Completed",
    text: "text-primary/50",
    dot: "h-3 w-3 bg-primary",
    segment: "bg-primary",
    title: "text-primary",
  },
  current: {
    label: "In progress",
    text: "text-accent",
    dot: "h-3.5 w-3.5 bg-accent ring-4 ring-accent/20",
    segment: "bg-accent animate-pulse",
    title: "text-primary",
  },
  upcoming: {
    label: "Upcoming",
    text: "text-muted",
    dot: "h-3 w-3 bg-white ring-2 ring-border",
    segment: "bg-primary-light",
    title: "text-primary/70",
  },
};

export default function Timeline() {
  const milestones = useMilestones();
  const completed = milestones.filter((m) => m.status === "completed").length;
  const progress = Math.round((completed / milestones.length) * 100);
  const current = milestones.find((m) => m.status === "current");

  return (
    <section className="mx-auto max-w-5xl px-5 py-20 sm:px-8 lg:py-28">
      <div className="grid items-center gap-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-border sm:p-7 md:grid-cols-[auto_1fr] lg:grid-cols-[auto_1fr_auto] lg:gap-10">
        <div>
          <p className="font-display text-4xl font-bold tabular-nums text-primary">{progress}%</p>
          <p className="mt-1 text-sm text-muted">
            {completed} of {milestones.length} completed
          </p>
        </div>

        <div>
          <div className="flex gap-1">
            {milestones.map((m) => (
              <span
                key={m.title}
                title={`${m.title} · ${m.date}`}
                className={`h-2 flex-1 rounded-full ${statusStyles[m.status].segment}`}
              />
            ))}
          </div>
          <div className="mt-2.5 flex justify-between text-xs text-muted">
            <span>{milestones[0].date}</span>
            <span>{milestones[milestones.length - 1].date}</span>
          </div>
        </div>

        {current && (
          <div className="border-t border-border pt-5 md:col-span-2 lg:col-span-1 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              In progress
            </p>
            <p className="mt-1 font-display font-semibold text-primary">{current.title}</p>
            <p className="mt-0.5 text-sm text-muted">Due {current.date}</p>
          </div>
        )}
      </div>

      <ol className="mt-14">
        {milestones.map((m, i) => {
          const s = statusStyles[m.status];
          const isCurrent = m.status === "current";
          const isLast = i === milestones.length - 1;
          return (
            <li key={m.title} className="md:grid md:grid-cols-[12rem_1fr]">
              <p
                className={`hidden pr-10 pt-0.5 text-right text-sm font-semibold tabular-nums md:block ${isCurrent ? "text-accent" : "text-foreground/60"}`}
              >
                {m.date}
              </p>

              <div className={`relative pl-8 md:pl-10 ${isLast ? "" : "pb-10"}`}>
                {!isLast && (
                  <span
                    aria-hidden
                    className={`absolute bottom-0 left-0 top-3 w-px ${m.status === "completed" ? "bg-primary" : "bg-border"}`}
                  />
                )}
                <span
                  aria-hidden
                  className={`absolute left-0 top-1.5 -translate-x-1/2 rounded-full ${s.dot}`}
                />

                <div
                  className={
                    isCurrent
                      ? "-mt-4 rounded-xl bg-primary-soft px-5 py-4 ring-1 ring-primary/10"
                      : ""
                  }
                >
                  <p className="flex flex-wrap items-center gap-x-2 text-xs font-semibold uppercase tracking-[0.12em]">
                    <span className="tabular-nums text-primary/30">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={s.text}>{s.label}</span>
                    <span
                      className={`normal-case tracking-normal md:hidden ${isCurrent ? "text-accent" : "text-foreground/60"}`}
                    >
                      · {m.date}
                    </span>
                  </p>
                  <h3 className={`mt-1.5 font-display text-lg font-bold ${s.title}`}>
                    {m.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{m.description}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
