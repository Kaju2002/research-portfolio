import type { Metadata } from "next";
import { Landmark, Mail, MapPin, type LucideIcon } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { contact, site } from "@/data/research";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function ContactPage() {
  const details: { icon: LucideIcon; label: string; value: string; href?: string }[] = [
    { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { icon: Landmark, label: "Institution", value: `${site.faculty}, ${site.university}` },
    { icon: MapPin, label: "Address", value: contact.address },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Contact us"
        title="Let's talk"
        description="Questions, feedback or collaboration ideas? Send us a message and we will get back to you."
      />

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1.6fr] lg:py-28">
        <div className="space-y-4">
          {details.map((d) => {
            const content = (
              <>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary-light text-primary transition group-hover:bg-primary group-hover:text-white">
                  <d.icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-muted">
                    {d.label}
                  </span>
                  <span className="mt-1 block break-words font-medium text-primary">
                    {d.value}
                  </span>
                </span>
              </>
            );
            const cls =
              "group flex items-center gap-4 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-border transition duration-300 hover:shadow-lg hover:shadow-primary/10";
            return d.href ? (
              <a key={d.label} href={d.href} className={cls}>
                {content}
              </a>
            ) : (
              <div key={d.label} className={cls}>
                {content}
              </div>
            );
          })}
        </div>

        <ContactForm email={contact.email} />
      </section>
    </>
  );
}
