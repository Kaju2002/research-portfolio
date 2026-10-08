"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

export default function ContactForm({ email }: { email: string }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(String(data.get("subject") ?? ""));
    const body = encodeURIComponent(
      `${data.get("message") ?? ""}\n\nFrom: ${data.get("name") ?? ""} <${data.get("email") ?? ""}>`,
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setSent(true);
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

      <button
        type="submit"
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-dark sm:w-auto"
      >
        <Send className="h-4 w-4" />
        Send message
      </button>

      {sent && (
        <p className="mt-4 text-sm text-success">
          Your email app should open with the message ready to send.
        </p>
      )}
    </form>
  );
}
