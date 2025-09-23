"use client"
import { motion } from "framer-motion";
import React from "react";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
};

const Heading: React.FC<HeadingProps> = ({ as: Tag = "h1", children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter:"blur(6px)", y: 20 }}
          whileInView={{ opacity: 1,filter:"blur(0px)", y: 0 ,}}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease:"easeInOut"}}
          
    >
    <Tag className="text-2xl px-4 drop-shadow-sm font-bold md:text-4xl tracking-tighter
     text-primary">
      {children}
    </Tag>
    </motion.div>
  );
};

export default Heading;
