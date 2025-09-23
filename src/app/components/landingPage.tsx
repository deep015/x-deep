import React from "react";
import Link from "next/link";
import { getBlogs, Blog } from "../utils/mdx";
import SectionHeading from "./sectionheading";
import MotionDiv from "./motion-div";

const truncate = (str: string, length: number) =>
  str.length > length ? str.substring(0, length) + "..." : str;

const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export default async function LandingBlog() {
  const allBlogs: Blog[] = await getBlogs();

  return (
    <div className="flex flex-col gap-8 mt-1">
      <SectionHeading className="pb-2" delay={0.2}>
        I Love writing things down.
      </SectionHeading>
      {allBlogs.slice(0, 3).map((blog,idx) => (
        <MotionDiv 
        key={blog.slug}
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{
          duration:0.3,
          delay:idx*0.1
        }}
        >
        <Link
          href={`/blog/${blog.slug}`}
          key={blog.slug}
          className="text-primary"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-primary text-base font-bold tracking-tight">
              {blog.title}
            </h2>
            {blog.date && (
              <p className="text-secondary text-sm md:text-sm">
                {formatDate(blog.date)}
              </p>
            )}
          </div>
          <p className="text-secondary max-w-lg pt-2 text-sm md:text-sm">
            {truncate(blog.description, 110)}
          </p>
        </Link>
        </MotionDiv>
      ))}
    </div>
  );
}
