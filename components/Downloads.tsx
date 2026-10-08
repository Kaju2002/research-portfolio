import { ArrowDown, ArrowUpRight } from "lucide-react";
import { downloads, type DownloadItem } from "@/data/research";

const groups: { title: string; category: DownloadItem["category"] }[] = [
  { title: "Documents", category: "Document" },
  { title: "Presentations", category: "Presentation" },
];

const ordered = groups.flatMap((g) => downloads.filter((d) => d.category === g.category));

function fileType(file: string) {
  return file.split(".").pop()?.toUpperCase() ?? "";
}

// PDFs open in the browser's viewer; other formats can't be previewed, so they download.
function linkProps(file: string) {
  return fileType(file) === "PDF"
    ? { href: file, target: "_blank", rel: "noopener noreferrer" }
    : { href: file, download: true };
}

function LinkIcon({ file }: { file: string }) {
  const Icon = fileType(file) === "PDF" ? ArrowUpRight : ArrowDown;
  return <Icon className="h-4 w-4 shrink-0" />;
}

export default function Downloads() {
  return (
    <section className="mx-auto max-w-7xl space-y-16 px-5 py-20 sm:px-8 lg:py-28">
      {groups.map((group) => (
        <div key={group.category}>
          <div className="flex items-center gap-4">
            <h2 className="font-display text-2xl font-bold text-primary">{group.title}</h2>
            <span className="h-px flex-1 bg-border" />
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ordered
              .filter((d) => d.category === group.category)
              .map((d) => {
                const index = ordered.indexOf(d) + 1;
                const types = [...new Set((d.files ?? [d]).map((f) => fileType(f.file)))];
                return (
                  <article
                    key={d.title}
                    className={`flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-border transition duration-300 hover:shadow-lg hover:shadow-primary/5 ${d.files ? "sm:col-span-2" : ""}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-display text-sm font-bold tabular-nums text-accent">
                        {String(index).padStart(2, "0")}
                      </span>
                      <span className="h-px flex-1 bg-border" />
                      {d.available && (
                        <span className="text-[11px] font-semibold tracking-wider text-muted">
                          {types.join(" · ")}
                        </span>
                      )}
                    </div>

                    <h3 className="mt-5 font-display text-lg font-bold text-primary">{d.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{d.description}</p>

                    <div className="mt-auto pt-6">
                      {!d.available ? (
                        <p className="border-t border-border pt-4 text-sm font-medium text-foreground/40">
                          Coming soon
                        </p>
                      ) : d.files ? (
                        <ul className="divide-y divide-border border-t border-border">
                          {d.files.map((f) => (
                            <li key={f.file}>
                              <a
                                {...linkProps(f.file)}
                                className="group flex items-center justify-between gap-3 py-3 text-sm font-medium text-foreground/80 transition hover:text-primary"
                              >
                                <span>{f.label}</span>
                                <span className="flex items-center gap-2 text-xs font-semibold text-muted group-hover:text-primary">
                                  {fileType(f.file)}
                                  <LinkIcon file={f.file} />
                                </span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <a
                          {...linkProps(d.file)}
                          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-dark"
                        >
                          {fileType(d.file) === "PDF" ? "Open" : "Download"}
                          <LinkIcon file={d.file} />
                        </a>
                      )}
                    </div>
                  </article>
                );
              })}
          </div>
        </div>
      ))}
    </section>
  );
}
