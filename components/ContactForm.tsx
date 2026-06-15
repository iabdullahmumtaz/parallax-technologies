"use client";

import emailjs from "@emailjs/browser";
import { Loader2, Send } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { CONTACT_EMAIL, getEmailJsConfig } from "@/lib/site-config";

type SubmitStatus = "idle" | "sending" | "success" | "error";

function emailJsErrorMessage(err: unknown): string {
  if (
    typeof err === "object" &&
    err !== null &&
    "text" in err &&
    typeof (err as { text: unknown }).text === "string"
  ) {
    return (err as { text: string }).text;
  }
  if (err instanceof Error) return err.message;
  return "Could not send your message. Please try again or email us directly.";
}

const fieldClass =
  "mt-2 w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-pt-blue/50 focus:ring-2 focus:ring-pt-blue/25 focus:ring-offset-0 disabled:opacity-50";

export function ContactForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const emailJsReady = Boolean(getEmailJsConfig());

  useEffect(() => {
    if (status !== "success") return;
    const t = window.setTimeout(() => setStatus("idle"), 6500);
    return () => window.clearTimeout(t);
  }, [status]);

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();

    if (!name || !email || !message) return;

    const config = getEmailJsConfig();

    if (!config) {
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Website inquiry — Parallax Technologies")}&body=${body}`;
      setStatus("success");
      window.setTimeout(() => setStatus("idle"), 5000);
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
        config.serviceId,
        config.templateId,
        {
          from_name: name,
          from_email: email,
          company: "—",
          message,
          reply_to: email,
        },
        { publicKey: config.publicKey },
      );
      form.reset();
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(emailJsErrorMessage(err));
    }
  }, []);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm sm:p-8">
      <div
        className="pointer-events-none absolute -right-16 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-pt-blue/20 blur-3xl"
        aria-hidden
      />

      <form onSubmit={handleSubmit} className="relative space-y-5">
        <label className="block">
          <span className="text-sm font-medium text-white">Your Name</span>
          <input
            name="name"
            required
            autoComplete="name"
            placeholder="John Doe"
            disabled={status === "sending"}
            className={fieldClass}
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-white">Email Address</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="john@example.com"
            disabled={status === "sending"}
            className={fieldClass}
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-white">Message</span>
          <textarea
            name="message"
            required
            rows={6}
            placeholder="Tell us about your project..."
            disabled={status === "sending"}
            className={`${fieldClass} min-h-[160px] resize-y`}
          />
        </label>

        <button
          type="submit"
          disabled={status === "sending"}
          className="flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold text-white btn-gradient shadow-lg shadow-pt-blue/25 transition duration-300 hover:scale-[1.01] hover:shadow-xl hover:shadow-pt-blue/40 active:scale-[0.99] disabled:pointer-events-none disabled:opacity-60"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
              Sending…
            </>
          ) : (
            <>
              Send Message
              <Send className="h-4 w-4" aria-hidden />
            </>
          )}
        </button>

        {status === "success" && (
          <div
            className="rounded-xl border border-pt-mint/30 bg-pt-mint/10 px-4 py-3 text-center text-sm text-pt-mint"
            role="status"
          >
            {emailJsReady
              ? "Thanks — your message was sent. We’ll get back to you shortly."
              : "Thanks — if your email app opened, send the message from there."}
          </div>
        )}
        {status === "error" && errorMessage && (
          <div
            className="rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-center text-sm text-red-200"
            role="alert"
          >
            {errorMessage}
          </div>
        )}
      </form>
    </div>
  );
}
