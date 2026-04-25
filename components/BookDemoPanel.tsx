"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, ExternalLink, Mail, Video, X } from "lucide-react";
import {
  CONTACT_EMAIL,
  getGoogleMeetUrl,
  getSchedulingUrl,
  mailtoDemoRequest,
  mailtoMeetRequest,
} from "@/lib/site-config";
import { ptEase } from "@/lib/motion";

function calendlyEmbedUrl(bookingUrl: string): string | null {
  try {
    const u = new URL(bookingUrl);
    if (!u.hostname.endsWith("calendly.com")) return null;
    u.searchParams.set("embed_type", "Inline");
    u.searchParams.set("hide_landing_page_details", "1");
    u.searchParams.set("hide_gdpr_banner", "1");
    return u.toString();
  } catch {
    return null;
  }
}

export function BookDemoPanel() {
  const schedulingUrl = getSchedulingUrl();
  const meetUrl = getGoogleMeetUrl();
  const embedSrc = schedulingUrl ? calendlyEmbedUrl(schedulingUrl) : null;
  const [modalOpen, setModalOpen] = useState(false);

  const openScheduler = useCallback(() => {
    if (!schedulingUrl) {
      window.location.href = mailtoDemoRequest();
      return;
    }
    if (embedSrc) setModalOpen(true);
    else window.open(schedulingUrl, "_blank", "noopener,noreferrer");
  }, [schedulingUrl, embedSrc]);

  const openMeet = useCallback(() => {
    if (meetUrl) window.open(meetUrl, "_blank", "noopener,noreferrer");
    else window.location.href = mailtoMeetRequest();
  }, [meetUrl]);

  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalOpen]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: ptEase }}
        className="mb-10 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] sm:p-8"
      >
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-pt-mint">
              Book a session
            </p>
            <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">
              Schedule a demo or live walkthrough
            </h3>
            <p className="mt-2 max-w-2xl text-sm text-pt-muted">
              Pick a time on our calendar when configured, join via Google Meet, or
              send a message—we respond quickly and align on next steps.
            </p>
          </div>
        </div>

        <ol className="mt-8 grid gap-4 sm:grid-cols-3">
          <motion.li
            whileHover={{ y: -3, transition: { duration: 0.2, ease: ptEase } }}
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-pt-navy-2/50 p-4 transition hover:border-pt-blue/40 hover:shadow-[0_0_28px_-4px_rgba(49,100,211,0.5)]"
          >
            <span className="text-[10px] font-bold uppercase tracking-wider text-pt-muted">
              Step 1
            </span>
            <div className="mt-2 flex items-center gap-2 text-white">
              <Calendar className="h-5 w-5 text-pt-mint" aria-hidden />
              <span className="font-semibold">Pick a time</span>
            </div>
            <p className="mt-1 text-xs text-pt-muted">
              {schedulingUrl
                ? "Open our booking page or embedded scheduler."
                : "Email us to propose times—we’ll confirm."}
            </p>
            <motion.button
              type="button"
              onClick={openScheduler}
              whileTap={{ scale: 0.98 }}
              className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-white/10 py-2.5 text-xs font-semibold text-white transition group-hover:bg-pt-blue/80 sm:text-sm"
            >
              {schedulingUrl ? "Schedule" : "Request times"}
              <ExternalLink className="h-3.5 w-3.5 opacity-80" aria-hidden />
            </motion.button>
          </motion.li>

          <motion.li
            whileHover={{ y: -3, transition: { duration: 0.2, ease: ptEase } }}
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-pt-navy-2/50 p-4 transition hover:border-pt-blue/40 hover:shadow-[0_0_28px_-4px_rgba(49,100,211,0.5)]"
          >
            <span className="text-[10px] font-bold uppercase tracking-wider text-pt-muted">
              Step 2
            </span>
            <div className="mt-2 flex items-center gap-2 text-white">
              <Video className="h-5 w-5 text-pt-mint" aria-hidden />
              <span className="font-semibold">Google Meet</span>
            </div>
            <p className="mt-1 text-xs text-pt-muted">
              {meetUrl
                ? "Join the call from your browser."
                : "We’ll send a Meet link—or request one by email."}
            </p>
            <motion.button
              type="button"
              onClick={openMeet}
              whileTap={{ scale: 0.98 }}
              className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-white/10 py-2.5 text-xs font-semibold text-white transition group-hover:bg-pt-blue/80 sm:text-sm"
            >
              {meetUrl ? "Open Meet" : "Request Meet link"}
              <ExternalLink className="h-3.5 w-3.5 opacity-80" aria-hidden />
            </motion.button>
          </motion.li>

          <motion.li
            whileHover={{ y: -3, transition: { duration: 0.2, ease: ptEase } }}
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-pt-navy-2/50 p-4 transition hover:border-pt-blue/40 hover:shadow-[0_0_28px_-4px_rgba(49,100,211,0.5)]"
          >
            <span className="text-[10px] font-bold uppercase tracking-wider text-pt-muted">
              Step 3
            </span>
            <div className="mt-2 flex items-center gap-2 text-white">
              <Mail className="h-5 w-5 text-pt-mint" aria-hidden />
              <span className="font-semibold">Message us</span>
            </div>
            <p className="mt-1 text-xs text-pt-muted">
              Share context, scope, and links in one thread.
            </p>
            <motion.a
              href={`mailto:${CONTACT_EMAIL}`}
              whileTap={{ scale: 0.98 }}
              className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-white/10 py-2.5 text-xs font-semibold text-white transition group-hover:bg-pt-blue/80 sm:text-sm"
            >
              Email
              <ExternalLink className="h-3.5 w-3.5 opacity-80" aria-hidden />
            </motion.a>
          </motion.li>
        </ol>
      </motion.div>

      <AnimatePresence>
        {modalOpen && embedSrc && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="schedule-dialog-title"
            className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              aria-label="Close scheduling dialog"
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setModalOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.25, ease: ptEase }}
              className="relative z-10 flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-pt-navy shadow-2xl shadow-pt-blue/20"
            >
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <h4 id="schedule-dialog-title" className="text-sm font-semibold text-white">
                  Schedule a time
                </h4>
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="rounded-lg p-2 text-pt-muted transition hover:bg-white/10 hover:text-white"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="min-h-[520px] flex-1 bg-pt-navy-2">
                <iframe
                  title="Booking scheduler"
                  src={embedSrc}
                  className="h-full min-h-[520px] w-full border-0"
                  loading="lazy"
                />
              </div>
              <div className="border-t border-white/10 px-4 py-2 text-center">
                <a
                  href={schedulingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-pt-mint hover:underline"
                >
                  Open scheduler in a new tab
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
