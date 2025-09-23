"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

type ContentItem = {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
};

type Data = {
  title: string; // Date or period
  content: ContentItem[];
};

const Timeline: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const data: Data[] = [
    {
      title: "Aug 2025",
      content: [
        {
          title: "Muskurahat Foundation Crowdfunding Intern",
          description:
            "Worked on crowdfunding initiatives for social impact projects.",
        },
      ],
    },
    {
      title: "July 2025 - Aug 2025",
      content: [
        {
          title: "SDE Intern",
          description:
            "Worked as a Software Development Intern, building and maintaining web applications.",
        },
      ],
    },
    {
      title: "June 2025",
      content: [
        {
          title: "Graduation Completed",
          description: "Successfully completed B.Sc/BCA graduation.",
        },
      ],
    },
    {
      title: "Feb 2025 - May 2025",
      content: [
        {
          title: "MERN Stack Training Program",
          description:
            "Completed intensive MERN stack training covering MongoDB, Express.js, React.js, and Node.js.",
        },
      ],
    },
    {
      title: "Sep 2022",
      content: [
        {
          title: "Started Development Journey",
          description:
            "Began learning and practicing web development, focusing on frontend and full-stack basics.",
        },
      ],
    },
  ];

  return (
    <div ref={ref} className="shadow-section-inset px-4 py-4 my-6 space-y-2">
      {data.map((year, yearIdx) => (
        <motion.div
          key={year.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 * yearIdx }}
          className="flex flex-col gap-4 mb-2"
        >
          {/* Year / Date */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
            transition={{ duration: 0.5, delay: 0.1 * yearIdx }}
            className="font-bold px-2 w-fit py-0.5  mb-1 text-black text-sm rounded-md shadow-aceternity"
          >
            {year.title}
          </motion.h2>

          {/* Content under each year */}
          <div className="pl-6 flex flex-col gap-4">
            {year.content.map((item, contentIdx) => (
              <motion.div
                key={contentIdx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
                transition={{ duration: 0.4, delay: 0.05 * contentIdx }}
                className="flex flex-col gap-1"
              >
                {/* Step with Title */}
                <Step isInView={isInView} idx={contentIdx}>
                  <h3 className="font-semibold text-neutral-600">{item.title}</h3>
                </Step>

                {/* Animated Description */}
                {item.description && (
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{
                      opacity: isInView ? 1 : 0,
                      y: isInView ? 0 : 5,
                    }}
                    transition={{ duration: 0.4, delay: 0.05 * contentIdx + 0.1 }}
                    className="text-neutral-400 text-sm pl-6 pb-2"
                  >
                    {item.description}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;

const Step = ({
  className,
  children,
  isInView,
  idx,
}: {
  className?: string;
  children: React.ReactNode;
  isInView: boolean;
  idx: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -5 }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : -5,
      }}
      transition={{
        duration: 0.3,
        delay: 0.05 * idx,
      }}
      className={cn("flex items-start gap-2", className)}
    >
      <IconCircleCheckFilled className="h-4 w-4 mt-0.5 text-neutral-500" />
      {children}
    </motion.div>
  );
};
