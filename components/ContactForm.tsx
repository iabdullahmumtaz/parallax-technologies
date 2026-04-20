"use client";

import { Send } from "lucide-react";
import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    window.setTimeout(() => setSent(false), 4000);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/10 bg-pt-navy-2/60 p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block sm:col-span-1">
          <span className="text-xs font-medium text-pt-muted">Your name</span>
          <input
            name="name"
            required
            placeholder="John Doe"
            className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none ring-pt-blue/40 placeholder:text-zinc-600 focus:border-pt-blue/50 focus:ring-2"
          />
        </label>
        <label className="block sm:col-span-1">
          <span className="text-xs font-medium text-pt-muted">Email address</span>
          <input
            name="email"
            type="email"
            required
            placeholder="john@example.com"
            className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none ring-pt-blue/40 placeholder:text-zinc-600 focus:border-pt-blue/50 focus:ring-2"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-xs font-medium text-pt-muted">Message</span>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Tell us about your project..."
            className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none ring-pt-blue/40 placeholder:text-zinc-600 focus:border-pt-blue/50 focus:ring-2"
          />
        </label>
      </div>
      <button
        type="submit"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold text-white btn-gradient transition hover:opacity-95"
      >
        Send message
        <Send className="h-4 w-4" aria-hidden />
      </button>
      {sent && (
        <p className="mt-3 text-center text-sm text-pt-mint" role="status">
          Thanks — we&apos;ll get back to you shortly.
        </p>
      )}
    </form>
  );
}
