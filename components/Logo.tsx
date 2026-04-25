import Image from "next/image";

const BRAND = {
  mark: "/brand/logo-mark.png",
  verticalDark: "/brand/logo-vertical-dark.png",
  onLight: "/brand/logo-on-light.png",
} as const;

type LogoVariant = "mark" | "vertical-dark" | "on-light";

type LogoProps = {
  className?: string;
  variant?: LogoVariant;
  /** When false, include full company name for screen readers (mark-only). */
  decorative?: boolean;
};

export function Logo({
  className = "",
  variant = "mark",
  decorative = true,
}: LogoProps) {
  const src =
    variant === "vertical-dark"
      ? BRAND.verticalDark
      : variant === "on-light"
        ? BRAND.onLight
        : BRAND.mark;

  const alt = decorative ? "" : "Parallax Technologies";

  if (variant === "mark") {
    return (
      <Image
        src={src}
        alt={alt}
        width={160}
        height={160}
        priority
        aria-hidden={decorative || undefined}
        className={`object-contain ${className}`}
        sizes="40px"
      />
    );
  }

  if (variant === "vertical-dark") {
    return (
      <Image
        src={src}
        alt={alt || "Parallax Technologies"}
        width={560}
        height={200}
        className={`h-auto w-full max-w-[min(100%,280px)] object-contain object-left ${className}`}
        sizes="(max-width: 640px) 220px, 280px"
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt || "Parallax Technologies"}
      width={480}
      height={160}
      className={`h-auto w-full max-w-[min(100%,240px)] object-contain object-center ${className}`}
      sizes="(max-width: 640px) 200px, 240px"
    />
  );
}

/** Full lockup for dark backgrounds (icon + PARALLAX / TECHNOLOGIES). */
export function LogoWordmark({ className = "" }: { className?: string }) {
  return (
    <Logo variant="vertical-dark" decorative={false} className={className} />
  );
}

/** Official mark for light sections (e.g. white cards). */
export function LogoOnLight({ className = "" }: { className?: string }) {
  return (
    <Logo
      variant="on-light"
      decorative={false}
      className={`max-h-20 sm:max-h-24 ${className}`}
    />
  );
}
