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
        "text-secondary w-fit font-normal max-w-lg  relative mt-4 text-sm md:text-sm",
        className
      )}
    >
      <Background />
 
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

const Background =() =>{
  return (
     <motion.div 
     initial ={{
      opacity:0,
     }}
   
     whileInView={{
            opacity:1,
     }}

     transition={{
      duration:0.3,
      ease:'easeInOut'
     }}
     className="absolute h-full  w-full inset-0 scale-[1.04] bg-neutral-100">
      <div className="h-1 w-1 animate-pulse rounded-full absolute -top-px  -left-px bg-neutral-200">
      </div>
      <div className="h-1 w-1 animate-pulse rounded-full absolute -top-px -right-px bg-neutral-200">
      </div>
      <div className="h-1 w-1 animate-pulse rounded-full absolute -bottom-px -left-px bg-neutral-200">
      </div>
      <div className="h-1 w-1 animate-pulse rounded-full absolute -bottom-px -right-px bg-neutral-200">
      </div>
    </motion.div>
  )
}