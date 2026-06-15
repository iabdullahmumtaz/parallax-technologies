"use client";

import { Brain, Cloud, Code2, Shield } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Logo } from "./Logo";
import { ptEase } from "@/lib/motion";

const orbitNodes = [
  { Icon: Cloud, label: "Cloud", angle: 0 },
  { Icon: Brain, label: "AI", angle: 90 },
  { Icon: Code2, label: "Web", angle: 180 },
  { Icon: Shield, label: "Security", angle: 270 },
];

const ORBIT_R = 88;

function nodePosition(angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: Math.cos(rad) * ORBIT_R,
    y: Math.sin(rad) * ORBIT_R,
  };
}

export function AboutOrbitVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="relative mx-auto flex h-56 w-56 items-center justify-center sm:h-64 sm:w-64"
      aria-hidden
    >
      <div className="absolute inset-0 rounded-full bg-pt-blue/15 blur-3xl" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 256 256"
        fill="none"
      >
        <circle
          cx="128"
          cy="128"
          r={ORBIT_R}
          stroke="rgba(49,100,211,0.25)"
          strokeWidth="1"
          strokeDasharray="6 8"
        />
        <circle
          cx="128"
          cy="128"
          r={ORBIT_R * 0.55}
          stroke="rgba(121,216,165,0.12)"
          strokeWidth="1"
        />
      </svg>

      <motion.div
        className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.06] shadow-[0_0_40px_-8px_rgba(49,100,211,0.55)] backdrop-blur-md sm:h-24 sm:w-24"
        animate={reduceMotion ? undefined : { scale: [1, 1.04, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pt-blue/20 to-pt-mint/10" />
        <Logo className="relative h-12 w-12 sm:h-14 sm:w-14" />
      </motion.div>

      <motion.div
        className="absolute inset-0"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {orbitNodes.map(({ Icon, label, angle }) => {
          const { x, y } = nodePosition(angle);
          return (
            <motion.div
              key={label}
              className="absolute left-1/2 top-1/2"
              style={{ x: x - 28, y: y - 28 }}
              animate={reduceMotion ? undefined : { rotate: -360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            >
              <div className="flex h-14 w-14 flex-col items-center justify-center gap-0.5 rounded-xl border border-white/10 bg-pt-navy-2/90 shadow-lg shadow-pt-blue/20 backdrop-blur-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-pt-blue to-cyan-400/90">
                  <Icon className="h-4 w-4 text-white" />
                </div>
                <span className="text-[9px] font-semibold uppercase tracking-wide text-pt-muted">
                  {label}
                </span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {!reduceMotion &&
        orbitNodes.map(({ angle }, i) => {
          const { x, y } = nodePosition(angle);
          return (
            <motion.span
              key={`pulse-${angle}`}
              className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pt-mint shadow-[0_0_12px_#79d8a5]"
              style={{ x, y }}
              animate={{ opacity: [0.3, 0.9, 0.3], scale: [0.8, 1.2, 0.8] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
          );
        })}
    </div>
  );
}
