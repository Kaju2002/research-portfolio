"use client";

import Image from "next/image";
import { useEffect, useState, type AnimationEvent, type CSSProperties } from "react";
import { site } from "@/data/research";

const titleLines = ["AI Ecosystem for", "Fake Job Scam Detection and", "Fraud-Aware Job Recommendation"];

function delay(seconds: number) {
  return { "--d": `${seconds}s` } as CSSProperties;
}

export default function IntroSplash() {
  const [skipped, setSkipped] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSkipped(true);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function handleAnimationEnd(e: AnimationEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget && e.animationName === "intro-curtain") setDone(true);
  }

  if (done) return null;

  return (
    <div
      className="intro fixed inset-0 z-100 grid cursor-pointer place-items-center bg-primary-deep px-6"
      data-skip={skipped ? "" : undefined}
      onClick={() => setSkipped(true)}
      onAnimationEnd={handleAnimationEnd}
    >
      <div aria-hidden className="bg-grid absolute inset-0" />

      <button
        type="button"
        className="absolute right-5 top-5 text-xs font-semibold uppercase tracking-[0.15em] text-white/50 transition hover:text-white sm:right-8 sm:top-7"
      >
        Skip intro
      </button>

      <div aria-hidden className="relative w-full max-w-4xl text-center">
        <div className="intro-in inline-block rounded-lg bg-white px-3 py-2" style={delay(0.1)}>
          <Image
            src="/images/sliit-logo.jpg"
            alt=""
            width={474}
            height={127}
            loading="eager"
            className="h-8 w-auto"
          />
        </div>

        <p
          className="intro-in mt-8 text-xs font-semibold uppercase tracking-[0.3em] text-white/50"
          style={delay(0.35)}
        >
          {site.groupId} · Research Project {site.year}
        </p>

        <p className="mt-5 font-display text-2xl font-bold leading-tight text-white sm:text-4xl">
          {titleLines.map((line, i) => (
            <span key={line} className="block overflow-hidden pb-1">
              <span className="intro-line block" style={delay(0.55 + i * 0.15)}>
                {line}
              </span>
            </span>
          ))}
        </p>

        <div className="mx-auto mt-8 h-px w-48 bg-white/15">
          <div className="intro-bar h-full bg-white" style={delay(0.4)} />
        </div>

        <p className="intro-in mt-5 text-sm text-white/50" style={delay(1.1)}>
          {site.faculty} · {site.university}
        </p>
      </div>
    </div>
  );
}
