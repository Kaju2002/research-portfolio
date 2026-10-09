import Link from "next/link";
import { GraduationCap, Mail, MapPin, Phone } from "lucide-react";
import { contact, navLinks, project, site } from "@/data/research";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary-deep text-white/80">
      <div className="pointer-events-none absolute -top-32 right-0 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-white text-primary">
              <GraduationCap className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-bold text-white">
              {site.shortName}
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
            {project.title}
          </p>
          <p className="mt-2 text-sm text-white/60">
            {site.faculty}, {site.university}
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Explore
          </h3>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/60 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Get in touch
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2 text-white/60 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 shrink-0" />
                {contact.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-white/60 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 shrink-0" />
                {contact.phone}
              </a>
            </li>
            <li className="flex items-start gap-2 text-white/60">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              {contact.address}
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <p className="mx-auto max-w-7xl px-5 py-6 text-xs text-white/50 sm:px-8">
          © {site.year} {site.groupId} · {site.university}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
