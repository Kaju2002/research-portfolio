type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-primary text-white">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-indigo-400/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="animate-fade-up text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl animate-fade-up font-display text-4xl font-bold tracking-tight [animation-delay:80ms] sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl animate-fade-up text-lg leading-relaxed text-white/70 [animation-delay:160ms]">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
