import { ArrowDown, ArrowUpRight } from "lucide-react";
import { downloads, type DownloadFile, type DownloadItem } from "@/data/research";

function isExternal(file: string) {
  return /^https?:\/\//i.test(file);
}

function fileType(file: string) {
  return file.split(".").pop()?.toUpperCase() ?? "";
}

function linkKind(file: string) {
  if (!file) return "";
  if (!isExternal(file)) return fileType(file);
  const host = new URL(file).hostname;
  if (host.includes("github")) return "GitHub";
  if (host.includes("figma")) return "Figma";
  if (host.includes("sharepoint")) return "SharePoint";
  return "Link";
}

// PDFs and external pages open in a new tab. Other local formats download.
function linkProps(file: string) {
  return isExternal(file) || fileType(file) === "PDF"
    ? { href: file, target: "_blank", rel: "noopener noreferrer" }
    : { href: file, download: true };
}

function LinkIcon({ file }: { file: string }) {
  const Icon = isExternal(file) || fileType(file) === "PDF" ? ArrowUpRight : ArrowDown;
  return <Icon className="h-4 w-4 shrink-0" />;
}

function FileLink({ file }: { file: DownloadFile }) {
  if (!file.file) {
    return <p className="py-3 text-sm font-medium text-foreground/80">{file.label}</p>;
  }

  return (
    <a
      {...linkProps(file.file)}
      className="group flex items-center justify-between gap-3 py-3 text-sm font-medium text-foreground/80 transition hover:text-primary"
    >
      <span>{file.label}</span>
      <span className="flex shrink-0 items-center gap-2 text-xs font-semibold text-muted group-hover:text-primary">
        {linkKind(file.file)}
        <LinkIcon file={file.file} />
      </span>
    </a>
  );
}

export default function Downloads({
  category,
  intro,
  columns = 4,
}: {
  category: DownloadItem["category"];
  intro?: React.ReactNode;
  columns?: 3 | 4;
}) {
  const items = downloads.filter((d) => d.category === category);
  const available = items.filter((d) => d.available).length;

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      {intro && <div className="mb-14">{intro}</div>}
      <div className="flex items-center gap-4">
        <p className="text-sm font-medium text-muted">
          <span className="font-semibold text-primary">{available}</span> of {items.length}{" "}
          available · the rest will be added as they are completed
        </p>
        <span className="h-px flex-1 bg-border" />
      </div>

      <div className={`mt-6 grid gap-5 sm:grid-cols-2 ${columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
        {items.map((d, i) => {
          const links = [
            ...(d.files ?? []),
            ...(d.groups?.flatMap((g) => g.files ?? []) ?? []),
          ];
          const listed = links.length ? links : [d];
          const types = [...new Set(listed.map((f) => linkKind(f.file)).filter(Boolean))];
          return (
            <article
              key={d.title}
              className={`flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-border transition duration-300 hover:shadow-lg hover:shadow-primary/5 ${d.groups ? (columns === 3 ? "sm:col-span-2 lg:col-span-3" : "sm:col-span-2 lg:col-span-4") : d.files && columns === 4 ? "sm:col-span-2" : ""}`}
            >
              <div className="flex items-center gap-3">
                <span className="font-display text-sm font-bold tabular-nums text-accent">
                  {String(i + 1).padStart(2, "0")}
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
                ) : d.groups ? (
                  <div className="border-t border-border pt-5">
                    {d.files && (
                      <ul className="mb-6 divide-y divide-border">
                        {d.files.map((f) => (
                          <li key={f.file}>
                            <FileLink file={f} />
                          </li>
                        ))}
                      </ul>
                    )}
                  <div className="grid gap-6 sm:grid-cols-3">
                    {d.groups.map((g) => (
                      <div key={g.title}>
                        <p className="text-sm font-semibold text-primary">{g.title}</p>
                        {g.note && (
                          <p className={`text-sm ${g.files?.length ? "mt-1 text-muted" : "mt-2 font-medium text-foreground/40"}`}>
                            {g.note}
                          </p>
                        )}
                        {g.files?.length ? (
                          <ul className="mt-1 divide-y divide-border">
                            {g.files.map((f) => (
                              <li key={f.label}>
                                <FileLink file={f} />
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    ))}
                  </div>
                  </div>
                ) : d.files ? (
                  <ul className="divide-y divide-border border-t border-border">
                    {d.files.map((f) => (
                      <li key={f.file}>
                        <FileLink file={f} />
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
    </section>
  );
}
