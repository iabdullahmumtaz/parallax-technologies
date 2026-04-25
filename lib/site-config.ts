/** Public env vars (set in `.env.local` for development). */
export const CONTACT_EMAIL = "info.parallax.tech@gmail.com";

/** EmailJS — use the same variable names in your EmailJS template. */
export type EmailJsConfig = {
  publicKey: string;
  serviceId: string;
  templateId: string;
};

export function getEmailJsConfig(): EmailJsConfig | null {
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY?.trim() ?? "";
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID?.trim() ?? "";
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID?.trim() ?? "";
  if (!publicKey || !serviceId || !templateId) return null;
  return { publicKey, serviceId, templateId };
}

export function getSchedulingUrl(): string {
  return process.env.NEXT_PUBLIC_SCHEDULING_URL?.trim() ?? "";
}

export function getGoogleMeetUrl(): string {
  return process.env.NEXT_PUBLIC_GOOGLE_MEET_URL?.trim() ?? "";
}

export function mailtoDemoRequest(): string {
  const subject = encodeURIComponent("Demo request — Parallax Technologies");
  const body = encodeURIComponent(
    "Hi Parallax team,\n\nI'd like to schedule a product demo or discovery call. Here are my goals and availability:\n\n",
  );
  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}

export function mailtoMeetRequest(): string {
  const subject = encodeURIComponent("Google Meet — Parallax Technologies");
  const body = encodeURIComponent(
    "Hi Parallax team,\n\nPlease share a Google Meet link for our call.\n\nThanks,\n",
  );
  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}
