import { ArrowUpRight, Play } from "lucide-react";
import { demo } from "@/data/research";

export default function SystemDemo() {
  return (
    <div
      id="demo"
      className="relative scroll-mt-24 overflow-hidden rounded-2xl bg-primary px-7 py-9 text-white sm:px-10 sm:py-11"
    >
      <div aria-hidden className="bg-grid absolute inset-0" />
      <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
        <div>
          <div className="flex items-center gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              System demo
            </span>
            <span className="h-px flex-1 bg-white/20" />
          </div>
          <h2 className="mt-5 font-display text-2xl font-bold sm:text-3xl">
            See the system in action
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-white/75">{demo.description}</p>
          <a
            href={demo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:-translate-y-0.5"
          >
            <Play className="h-4 w-4 fill-current" />
            Watch the demo
            <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <ol className="divide-y divide-white/15 border-y border-white/15">
          {demo.contents.map((item, i) => (
            <li key={item} className="flex items-center gap-4 py-3.5 text-sm text-white/85">
              <span className="font-display text-xs font-bold tabular-nums text-white/50">
                0{i + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
