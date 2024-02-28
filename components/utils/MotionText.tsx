"use client";
import { useMediaQuery } from "@/hooks/useMediaQuerry";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type MotionTextProps = {
  children?: React.ReactNode;
  delay?: number;
  y?: number;
  content: string;
  className?: string;
};

export const MotionText = ({
  children,
  delay = 0.04,
  content,
  className,
}: MotionTextProps) => {
  const title = content;
  const titleSplit = title.split("");
  const titleArray = titleSplit.map((letter) => {
    if (letter === " ") {
      return "\u00A0";
    } else {
      return letter;
    }
  });

  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <motion.div className={cn("overflow-hidden", className)}>
      {titleArray.map((letter, index) => (
        <motion.span
          layout
          key={index}
          initial={{
            // opacity: 0,
            y: isMobile ? 0 : -5,
            // rotate: isMobile ? 0 : 45,
          }}
          animate={{
            // opacity: 1,
            y: -5,
            // rotate: 0,
          }}
          exit={{
            // opacity: 0,
            y: 0,
            // rotate: 45,
          }}
          transition={{
            delay: index * delay,
            duration: 0.5,
            // type: "spring",
            // mass: 2,
            repeat: Infinity,
            // repeatType: "reverse",
          }}
          className="inline-flex"
        >
          {letter}
        </motion.span>
      ))}
      {children}
    </motion.div>
  );
};
