"use client";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type MotionTextProps = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

export const MotionDiv = ({
  children,
  className,
  delay = 0,
  y = 100,
}: MotionTextProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: y }}
      transition={{ duration: 0.4, delay: delay }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(className)}
      layout
    >
      {children}
    </motion.div>
  );
};

export const MotionP = ({
  children,
  className,
  delay = 0,
  y = 100,
}: MotionTextProps) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: y }}
      transition={{ duration: 0.8, delay: delay }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(className)}
    >
      {children}
    </motion.p>
  );
};
