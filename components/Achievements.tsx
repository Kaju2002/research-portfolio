import Image from "next/image";
import { Calendar, Trophy } from "lucide-react";
import { achievements } from "@/data/research";

export default function Achievements() {
  if (achievements.length === 0) {
    return (
      <section className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8">
        <div className="rounded-3xl bg-white p-12 shadow-sm ring-1 ring-border">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-amber-50 text-amber-500 ring-1 ring-amber-100">
            <Trophy className="h-8 w-8" />
          </span>
          <h2 className="mt-6 font-display text-2xl font-bold text-primary">
            Achievements coming soon
          </h2>
          <p className="mt-3 text-muted">
            Awards, publications and competition results will be added here as the project
            progresses.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto grid max-w-7xl gap-6 px-5 py-20 sm:px-8 md:grid-cols-2 lg:grid-cols-3 lg:py-28">
      {achievements.map((a) => (
        <article
          key={a.title}
          className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-border transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
        >
          {a.image ? (
            <Image
              src={a.image}
              alt={a.title}
              width={800}
              height={500}
              className="aspect-[16/10] w-full object-cover"
            />
          ) : (
            <div className="grid aspect-[16/10] place-items-center bg-linear-to-br from-primary to-accent">
              <Trophy className="h-12 w-12 text-white/80" />
            </div>
          )}
          <div className="p-6">
            <p className="flex items-center gap-1.5 text-xs font-semibold text-accent">
              <Calendar className="h-3.5 w-3.5" />
              {a.date}
            </p>
            <h3 className="mt-2 font-display text-lg font-bold text-primary">{a.title}</h3>
            <p className="mt-1 text-sm font-medium text-foreground/70">{a.event}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{a.description}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
