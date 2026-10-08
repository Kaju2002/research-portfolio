import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center px-5 py-32 text-center">
      <span className="grid h-16 w-16 place-items-center rounded-2xl bg-primary-light text-primary">
        <Compass className="h-8 w-8" />
      </span>
      <p className="mt-6 font-display text-6xl font-extrabold text-primary">404</p>
      <h1 className="mt-2 font-display text-2xl font-bold text-primary">Page not found</h1>
      <p className="mt-3 text-muted">The page you are looking for does not exist or has moved.</p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to home
      </Link>
    </section>
  );
}
