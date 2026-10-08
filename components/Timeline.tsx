import { CircleCheck, Clock, Hourglass } from "lucide-react";
import { milestones, type MilestoneStatus } from "@/data/research";

const statusStyles: Record<
  MilestoneStatus,
  { label: string; badge: string; dot: string; icon: typeof CircleCheck }
> = {
  completed: {
    label: "Completed",
    badge: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    dot: "bg-success text-white",
    icon: CircleCheck,
  },
  current: {
    label: "In progress",
    badge: "bg-blue-50 text-blue-700 ring-blue-100",
    dot: "bg-accent text-white ring-8 ring-accent/20",
    icon: Clock,
  },
  upcoming: {
    label: "Upcoming",
    badge: "bg-gray-100 text-gray-600 ring-gray-200",
    dot: "bg-white text-muted ring-2 ring-border",
    icon: Hourglass,
  },
};

export default function Timeline() {
  const completed = milestones.filter((m) => m.status === "completed").length;
  const progress = Math.round((completed / milestones.length) * 100);

  return (
    <section className="mx-auto max-w-5xl px-5 py-20 sm:px-8 lg:py-28">
      <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-border sm:p-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Overall progress
            </p>
            <p className="mt-1 font-display text-3xl font-bold text-primary">{progress}%</p>
          </div>
          <p className="text-sm text-muted">
            {completed} of {milestones.length} milestones completed
          </p>
        </div>
        <div className="mt-5 h-2.5 overflow-hidden rounded-full bg-primary-light">
          <div
            className="h-full rounded-full bg-linear-to-r from-primary to-accent"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <ol className="relative mt-14">
        <span className="absolute bottom-0 left-5 top-0 w-px bg-border md:left-1/2" />
        {milestones.map((m, i) => {
          const s = statusStyles[m.status];
          const right = i % 2 === 1;
          return (
            <li key={m.title} className="relative mb-10 last:mb-0 md:grid md:grid-cols-2 md:gap-14">
              <span
                className={`absolute left-5 top-5 z-10 grid h-10 w-10 -translate-x-1/2 place-items-center rounded-full md:left-1/2 ${s.dot}`}
              >
                <s.icon className="h-5 w-5" />
              </span>
              <div
                className={`ml-14 md:ml-0 ${right ? "md:col-start-2" : "md:col-start-1 md:text-right"}`}
              >
                <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-border transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/10">
                  <div
                    className={`flex flex-wrap items-center gap-2 ${right ? "" : "md:justify-end"}`}
                  >
                    <span className="text-sm font-semibold text-accent">{m.date}</span>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ring-1 ${s.badge}`}
                    >
                      {s.label}
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-lg font-bold text-primary">{m.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{m.description}</p>
                </article>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
