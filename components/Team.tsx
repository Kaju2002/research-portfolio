import Image from "next/image";
import { Mail } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { members, supervisors, type Person } from "@/data/research";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
}

function Avatar({ person, size }: { person: Person; size: "lg" | "md" }) {
  const dims = size === "lg" ? "h-28 w-28 text-3xl" : "h-24 w-24 text-2xl";
  if (person.image) {
    return (
      <Image
        src={person.image}
        alt={person.name}
        width={224}
        height={224}
        className={`${dims} rounded-full object-cover ring-4 ring-white shadow-lg`}
      />
    );
  }
  return (
    <span
      className={`${dims} grid place-items-center rounded-full bg-linear-to-br from-primary to-accent font-display font-bold text-white ring-4 ring-white shadow-lg`}
    >
      {initials(person.name)}
    </span>
  );
}

function PersonCard({ person, size }: { person: Person; size: "lg" | "md" }) {
  return (
    <article className="group flex flex-col items-center rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-border transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
      <Avatar person={person} size={size} />
      <span className="mt-5 rounded-full bg-primary-light px-3 py-1 text-xs font-semibold text-primary">
        {person.role}
      </span>
      <h3 className="mt-3 font-display text-lg font-bold text-primary">{person.name}</h3>
      <p className="mt-1 text-sm text-muted">{person.title}</p>
      {person.component && (
        <p className="mt-3 text-xs font-medium text-accent">{person.component}</p>
      )}
      <div className="mt-5 flex gap-2">
        <a
          href={`mailto:${person.email}`}
          aria-label={`Email ${person.name}`}
          className="grid h-10 w-10 place-items-center rounded-full bg-primary-soft text-primary transition hover:bg-primary hover:text-white"
        >
          <Mail className="h-4 w-4" />
        </a>
        {person.linkedin && (
          <a
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${person.name} on LinkedIn`}
            className="grid h-10 w-10 place-items-center rounded-full bg-primary-soft text-primary transition hover:bg-[#0a66c2] hover:text-white"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
        )}
      </div>
    </article>
  );
}

export default function Team() {
  return (
    <section className="mx-auto max-w-7xl space-y-20 px-5 py-20 sm:px-8 lg:py-28">
      <div>
        <SectionHeading
          eyebrow="Supervision"
          title="Our supervisors"
          description="The academic staff guiding this research."
          align="center"
        />
        <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
          {supervisors.map((p) => (
            <PersonCard key={p.name} person={p} size="lg" />
          ))}
        </div>
      </div>

      <div>
        <SectionHeading
          eyebrow="The team"
          title="Meet the researchers"
          description="Each member leads one component of the system."
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((p) => (
            <PersonCard key={p.name} person={p} size="md" />
          ))}
        </div>
      </div>
    </section>
  );
}
