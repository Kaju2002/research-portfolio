import Link from "next/link";
import { Mail } from "lucide-react";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import ResearchScope from "@/components/ResearchScope";
import Explore from "@/components/Explore";

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <ResearchScope />
      <Explore />

      <section className="px-5 pb-24 sm:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-primary px-8 py-14 text-center text-white sm:px-14">
          <div className="bg-grid pointer-events-none absolute inset-0" />
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl font-display text-3xl font-bold sm:text-4xl">
              Want to know more about protecting job seekers from recruitment scams?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              We&apos;d love to hear from you, whether it&apos;s feedback, collaboration ideas,
              or interest from job platforms in integrating our system.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-lg transition hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" />
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
