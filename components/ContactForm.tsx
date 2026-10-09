"use client";

import { useState, type FormEvent } from "react";
import { Loader2, Send } from "lucide-react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm({ email }: { email: string }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "");
    data.append("from_name", "Research Portfolio · R26-SE-002");
    data.set("subject", `[R26-SE-002] ${data.get("subject") ?? ""}`);

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.message);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const field =
    "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition placeholder:text-muted/70 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-border sm:p-9"
    >
      <h2 className="font-display text-2xl font-bold text-primary">Send us a message</h2>
      <p className="mt-2 text-sm text-muted">We usually reply within two working days.</p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-foreground/80">Full name</span>
          <input name="name" required placeholder="John Doe" className={field} />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-foreground/80">Email</span>
          <input
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className={field}
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-2 block text-sm font-medium text-foreground/80">Subject</span>
          <input name="subject" required placeholder="How can we help?" className={field} />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-2 block text-sm font-medium text-foreground/80">Message</span>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Write your message..."
            className={`${field} resize-none`}
          />
        </label>
      </div>

      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-dark disabled:cursor-wait disabled:opacity-70 sm:w-auto"
      >
        {status === "sending" ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Send className="h-4 w-4" />
        )}
        {status === "sending" ? "Sending..." : "Send message"}
      </button>

      <p aria-live="polite" className="mt-4 text-sm">
        {status === "sent" && (
          <span className="text-success">Thank you! Your message has been sent.</span>
        )}
        {status === "error" && (
          <span className="text-error">
            Something went wrong. Please email us directly at{" "}
            <a href={`mailto:${email}`} className="font-medium underline">
              {email}
            </a>
            .
          </span>
        )}
      </p>
    </form>
  );
}
