export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M6 28L14 8h8l-4 10h6l-8 20H6l4-10H6z" fill="#76d4a5" />
      <path d="M22 8l12 6-4 4-8-4V8z" fill="#2b67d9" />
      <path d="M34 26l-8 10-4-2 6-8h6z" fill="#2b67d9" />
      <path d="M10 32l4-8h6l-2 8h-8z" fill="#2b67d9" opacity="0.85" />
    </svg>
  );
}

export function LogoWordmark({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <Logo className="h-9 w-9 shrink-0" />
      <div className="flex flex-col leading-none">
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-pt-muted">
          Parallax
        </span>
        <span className="text-sm font-bold uppercase tracking-wide text-pt-blue">
          Technologies
        </span>
      </div>
    </div>
  );
}
