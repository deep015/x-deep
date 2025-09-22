"use client"
import { motion } from "framer-motion";
import React from "react";

type HeadingProps = {
  as?: "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  
};

const SubHeading: React.FC<HeadingProps> = ({ as: Tag = "h2", children, }) => {
  return (
    <motion.div
    
     initial={{ opacity: 0, filter:"blur(10px)", y: 20 }}
          whileInView={{ opacity: 1,filter:"blur(0px)", y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease:"easeInOut"}}>
<Tag className ='text-secondary max-w-lg pt-4 text-sm md:text-sm'>
      {children}
    </Tag>
    </motion.div>
    
  );
};

export default SubHeading;
