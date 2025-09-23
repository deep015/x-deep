"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

const SectionHeading = ({
  children,
  delay = 0,
  className,
}: {
  children: string;
  delay?: number;
  className?: string;
}) => {
  return (
    <h2
      className={cn(
        "text-secondary font-normal max-w-lg  pt-4 text-sm md:text-sm",
        className
      )}
    >
      {children.split(" ").map((word, wordIdx) => (
        <motion.span
          key={word + wordIdx}
          initial={{ opacity: 0, y: 5, filter: "blur(2px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            delay: delay + wordIdx * 0.2,
            duration: 0.3,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className="inline-block mr-1"
        >
          {word}
        </motion.span>
      ))}
    </h2>
  );
};

export default SectionHeading;
