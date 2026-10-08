import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import { members, supervisors, type Person } from "@/data/research";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
}

function Photo({ person, sizes }: { person: Person; sizes: string }) {
  return (
    <div className="relative aspect-square overflow-hidden rounded-xl bg-primary-soft">
      {person.image ? (
        <Image src={person.image} alt={person.name} fill sizes={sizes} className="object-cover" />
      ) : (
        <span className="grid h-full place-items-center font-display text-4xl font-bold text-primary/30">
          {initials(person.name)}
        </span>
      )}
    </div>
  );
}

function Contact({ person }: { person: Person }) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
      <a
        href={`mailto:${person.email}`}
        className="font-medium text-primary underline-offset-4 hover:underline"
      >
        {person.email}
      </a>
      {person.linkedin && (
        <a
          href={person.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-muted underline-offset-4 hover:text-primary hover:underline"
        >
          LinkedIn
        </a>
      )}
    </div>
  );
}

function RoleLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">{children}</p>
  );
}

function SupervisorCard({ person }: { person: Person }) {
  return (
    <article className="grid gap-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-border sm:grid-cols-[9rem_1fr] sm:p-7">
      <div className="w-36 sm:w-auto">
        <Photo person={person} sizes="144px" />
      </div>
      <div className="flex flex-col">
        <RoleLabel>{person.role}</RoleLabel>
        <h3 className="mt-2 font-display text-xl font-bold text-primary">{person.name}</h3>
        <p className="mt-1 text-sm font-medium text-foreground/80">{person.title}</p>
        {person.department && <p className="text-sm text-muted">{person.department}</p>}

        {person.interests && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {person.interests.map((i) => (
              <span
                key={i}
                className="rounded-md border border-border px-2 py-0.5 text-xs font-medium text-foreground/70"
              >
                {i}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto pt-5">
          <Contact person={person} />
        </div>
      </div>
    </article>
  );
}

function MemberCard({ person }: { person: Person }) {
  return (
    <article className="flex flex-col rounded-2xl bg-white p-5 shadow-sm ring-1 ring-border">
      <Photo person={person} sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 100vw" />
      <div className="mt-5 flex flex-1 flex-col">
        <RoleLabel>{person.role}</RoleLabel>
        <h3 className="mt-2 font-display text-lg font-bold text-primary">{person.name}</h3>
        <p className="mt-0.5 text-xs text-muted">{person.title}</p>
        {person.component && (
          <p className="mt-3 border-t border-border pt-3 text-sm leading-snug text-foreground/80">
            {person.component}
          </p>
        )}
        <div className="mt-auto pt-4">
          <Contact person={person} />
        </div>
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
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {supervisors.map((p) => (
            <SupervisorCard key={p.name} person={p} />
          ))}
        </div>
      </div>

      <div>
        <SectionHeading
          eyebrow="The team"
          title="Meet the researchers"
          description="Each member leads one component of the system."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((p) => (
            <MemberCard key={p.name} person={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
