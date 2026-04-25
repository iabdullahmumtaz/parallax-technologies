"use client";

import { ArrowUp } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  const onScroll = useCallback(() => {
    setVisible(window.scrollY > 400);
  }, []);

  useEffect(() => {
    const id = requestAnimationFrame(() => onScroll());
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-pt-navy-2/95 text-white shadow-lg shadow-black/40 backdrop-blur transition duration-300 hover:scale-110 hover:border-pt-blue/50 hover:text-pt-mint hover:shadow-pt-blue/30"
      aria-label="Back to top"
    >
      <ArrowUp className="h-5 w-5" aria-hidden />
    </button>
  );
}
