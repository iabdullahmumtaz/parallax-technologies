"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useReducedMotion } from "framer-motion";
import { setGlobalPointer } from "./global-pointer-store";

const SiteBackgroundCanvas = dynamic(
  () =>
    import("./SiteBackgroundCanvas").then((m) => m.SiteBackgroundCanvas),
  { ssr: false },
);

export function SiteBackground() {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    const onMove = (e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setGlobalPointer(x, y);
    };

    const onLeave = () => setGlobalPointer(0, 0);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, [reduceMotion]);

  if (reduceMotion) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 opacity-80"
      aria-hidden
    >
      <SiteBackgroundCanvas />
    </div>
  );
}
