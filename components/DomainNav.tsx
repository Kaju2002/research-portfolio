"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "literature", label: "Literature survey" },
  { id: "scope", label: "Research gap & problem" },
  { id: "objectives", label: "Research objectives" },
  { id: "methodology", label: "Methodology" },
  { id: "technologies", label: "Technologies used" },
];

export default function DomainNav() {
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) setActive(visible[0].target.id);
      },
      { rootMargin: "-140px 0px -60% 0px" },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="On this page"
      className="sticky top-16 z-40 border-b border-border/70 bg-white/90 backdrop-blur-xl"
    >
      <ol className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-5 sm:px-8">
        {sections.map((s, i) => {
          const current = s.id === active;
          return (
            <li key={s.id} className="shrink-0">
              <a
                href={`#${s.id}`}
                aria-current={current ? "location" : undefined}
                className={`flex items-center gap-2 border-b-2 px-3 py-3.5 text-sm transition-colors ${
                  current
                    ? "border-primary font-semibold text-primary"
                    : "border-transparent font-medium text-foreground/60 hover:text-primary"
                }`}
              >
                <span className="text-xs font-bold tabular-nums text-accent">0{i + 1}</span>
                {s.label}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
