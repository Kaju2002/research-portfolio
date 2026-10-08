import { Download, FileText, Lock, Presentation } from "lucide-react";
import { downloads, type DownloadItem } from "@/data/research";

const groups: { title: string; category: DownloadItem["category"] }[] = [
  { title: "Documents", category: "Document" },
  { title: "Presentations", category: "Presentation" },
];

export default function Downloads() {
  return (
    <section className="mx-auto max-w-7xl space-y-16 px-5 py-20 sm:px-8 lg:py-28">
      {groups.map((group) => (
        <div key={group.category}>
          <h2 className="font-display text-2xl font-bold text-primary">{group.title}</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {downloads
              .filter((d) => d.category === group.category)
              .map((d) => {
                const Icon = d.category === "Document" ? FileText : Presentation;
                return (
                  <article
                    key={d.title}
                    className="group flex flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-border transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-light text-primary transition group-hover:bg-primary group-hover:text-white">
                        <Icon className="h-6 w-6" />
                      </span>
                      <span className="rounded-full bg-primary-soft px-2.5 py-1 text-[11px] font-semibold text-primary/70">
                        PDF
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold text-primary">{d.title}</h3>
                    <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted">
                      {d.description}
                    </p>
                    {d.available ? (
                      <a
                        href={d.file}
                        download
                        className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-dark"
                      >
                        <Download className="h-4 w-4" />
                        Download
                      </a>
                    ) : (
                      <span className="mt-6 inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-full bg-gray-100 px-4 py-2.5 text-sm font-semibold text-gray-500">
                        <Lock className="h-4 w-4" />
                        Coming soon
                      </span>
                    )}
                  </article>
                );
              })}
          </div>
        </div>
      ))}
    </section>
  );
}
