"use client";

import emailjs from "@emailjs/browser";
import {
  Building2,
  Loader2,
  Mail,
  MessageSquare,
  Send,
  ShieldCheck,
  Sparkles,
  User,
} from "lucide-react";
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
  "mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 pl-11 text-sm text-white outline-none ring-pt-blue/40 transition placeholder:text-zinc-600 focus:border-pt-blue/50 focus:ring-2 focus:ring-offset-0 disabled:opacity-50";

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
    const company = String(fd.get("company") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();

    if (!name || !email || !message) return;

    const config = getEmailJsConfig();

    if (!config) {
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nCompany: ${company || "—"}\n\n${message}`,
      );
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
          company: company || "—",
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
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-pt-navy-2/90 via-pt-navy-2/70 to-black/40 p-px shadow-[0_24px_80px_-24px_rgba(49,100,211,0.35)]">
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-pt-blue/25 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-16 h-48 w-48 rounded-full bg-pt-mint/10 blur-3xl"
        aria-hidden
      />

      <form
        onSubmit={handleSubmit}
        className="relative rounded-[15px] bg-pt-navy-2/85 p-6 backdrop-blur-md sm:p-8"
      >
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-pt-blue to-cyan-400/90 shadow-lg shadow-pt-blue/30">
              <Mail className="h-7 w-7 text-white" aria-hidden />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white sm:text-xl">
                Message the team
              </h3>
              <p className="mt-1 max-w-md text-sm text-pt-muted">
                Tell us about your goals, timeline, and stack—we&apos;ll follow up
                with next steps.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 sm:justify-end">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium text-pt-muted">
              <ShieldCheck className="h-3.5 w-3.5 text-pt-mint" aria-hidden />
              Secure send
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium text-pt-muted">
              <Sparkles className="h-3.5 w-3.5 text-amber-200/80" aria-hidden />
              Fast reply
            </span>
          </div>
        </div>

        {!emailJsReady && (
          <p className="mb-6 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-xs text-amber-100/90">
            EmailJS env vars missing—submit will open your mail app. Copy keys into{" "}
            <code className="rounded bg-black/30 px-1 text-[11px]">.env.local</code>{" "}
            (see <code className="text-[11px]">.env.example</code>).
          </p>
        )}

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block sm:col-span-1">
            <span className="text-xs font-medium text-pt-muted">Your name</span>
            <span className="relative mt-2 block">
              <User
                className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500"
                aria-hidden
              />
              <input
                name="name"
                required
                autoComplete="name"
                placeholder="John Doe"
                disabled={status === "sending"}
                className={fieldClass}
              />
            </span>
          </label>

          <label className="block sm:col-span-1">
            <span className="text-xs font-medium text-pt-muted">Email address</span>
            <span className="relative mt-2 block">
              <Mail
                className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500"
                aria-hidden
              />
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="john@example.com"
                disabled={status === "sending"}
                className={fieldClass}
              />
            </span>
          </label>

          <label className="block sm:col-span-2">
            <span className="text-xs font-medium text-pt-muted">
              Company <span className="font-normal text-zinc-500">(optional)</span>
            </span>
            <span className="relative mt-2 block">
              <Building2
                className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500"
                aria-hidden
              />
              <input
                name="company"
                autoComplete="organization"
                placeholder="Your organization"
                disabled={status === "sending"}
                className={fieldClass}
              />
            </span>
          </label>

          <label className="block sm:col-span-2">
            <span className="text-xs font-medium text-pt-muted">Message</span>
            <span className="relative mt-2 block">
              <MessageSquare
                className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-zinc-500"
                aria-hidden
              />
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Goals, budget range, timeline, links…"
                disabled={status === "sending"}
                className={`${fieldClass} min-h-[140px] resize-y py-3 pl-11`}
              />
            </span>
          </label>
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold text-white btn-gradient shadow-lg shadow-pt-blue/25 transition duration-300 hover:scale-[1.01] hover:shadow-xl hover:shadow-pt-blue/35 active:scale-[0.99] disabled:pointer-events-none disabled:opacity-60"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
              Sending…
            </>
          ) : (
            <>
              Send message
              <Send className="h-4 w-4" aria-hidden />
            </>
          )}
        </button>

        {status === "success" && (
          <div
            className="mt-4 rounded-xl border border-pt-mint/30 bg-pt-mint/10 px-4 py-3 text-center text-sm text-pt-mint"
            role="status"
          >
            {emailJsReady
              ? "Thanks — your message was sent. We’ll get back to you shortly."
              : "Thanks — if your email app opened, send the message from there. Otherwise email us directly."}
          </div>
        )}
        {status === "error" && errorMessage && (
          <div
            className="mt-4 rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-center text-sm text-red-200"
            role="alert"
          >
            {errorMessage}
          </div>
        )}
      </form>
    </div>
  );
}
