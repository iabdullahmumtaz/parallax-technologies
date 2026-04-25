"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { viewTransition } from "@/lib/motion";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 26,
  ...rest
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-72px" }}
      transition={{ ...viewTransition, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
