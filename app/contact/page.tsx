import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { contact, site } from "@/data/research";

export const metadata: Metadata = {
  title: "Contact Us",
};

const mapQuery = encodeURIComponent(contact.mapQuery);

export default function ContactPage() {
  const details: { label: string; value: string; href?: string }[] = [
    { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
    { label: "Institution", value: `${site.faculty}, ${site.university}` },
    { label: "Address", value: contact.address },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Contact us"
        title="Let's talk"
        description="Questions, feedback or collaboration ideas? Send us a message and we will get back to you."
      />

      <section className="mx-auto grid max-w-7xl items-start gap-8 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1.4fr] lg:py-28">
        <div className="space-y-6">
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-border">
            <iframe
              title={`Map of ${contact.mapQuery}`}
              src={`https://maps.google.com/maps?q=${mapQuery}&z=15&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block aspect-4/3 w-full border-0"
            />
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border-t border-border px-6 py-4 text-sm font-medium text-primary transition hover:bg-primary-soft sm:px-7"
            >
              Open in Google Maps
              <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <dl className="divide-y divide-border rounded-2xl bg-white px-6 shadow-sm ring-1 ring-border sm:px-7">
            {details.map((d) => (
              <div key={d.label} className="py-5">
                <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">
                  {d.label}
                </dt>
                <dd className="mt-1.5 break-words font-medium text-primary">
                  {d.href ? (
                    <a href={d.href} className="underline-offset-4 hover:underline">
                      {d.value}
                    </a>
                  ) : (
                    d.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <ContactForm email={contact.email} />
      </section>
    </>
  );
}
