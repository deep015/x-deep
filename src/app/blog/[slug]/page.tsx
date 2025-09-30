// app/blog/[slug]/page.tsx
import React from "react";
import Container from "../../components/container";
import { redirect } from "next/navigation";
import {
  fetchBlogsFrontMatterBySlug,
  getSingleBlog,
  getAllBlogSlugs,
} from "../../utils/mdx";
import Image from "next/image";
import type { Metadata } from "next";

// -----------------------------
// 1️⃣ Generate static params for SSG
// -----------------------------
export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  // Ensure it returns { slug: string }[]
  return slugs.map((slug: string) => ({ slug }));
}

// -----------------------------
// 2️⃣ Define props type
// -----------------------------
interface BlogPageProps {
  params: {
    slug: string;
  };
}

// -----------------------------
// 3️⃣ Metadata generator
// -----------------------------
export async function generateMetadata(
  { params }: BlogPageProps
): Promise<Metadata> {
  const slug = params.slug;
  const frontmatter = await fetchBlogsFrontMatterBySlug(slug);

  if (!frontmatter?.title) {
    return {
      title: "Blog not found",
      description: "The requested blog does not exist.",
    };
  }

  return {
    title: `${frontmatter.title} - Deep`,
    description: frontmatter.description || "",
  };
}

// -----------------------------
// 4️⃣ Page component
// -----------------------------
export default async function SingleBlogPage({ params }: BlogPageProps) {
  const blog = await getSingleBlog(params.slug);

  if (!blog) {
    redirect("/blog"); // Redirect if blog not found
  }

  const { frontmatter, content } = blog;

  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-screen p-10 md:pt-26 md:pb-14">
        <Image
          className="my-20 object-cover max-h-96 w-full border border-neutral-200 
          max-w-2xl mx-auto rounded-2xl shadow-xl"
          src={frontmatter.image}
          alt={frontmatter.title}
          width={1200}   
          height={630}   
        />
        <div className="prose mx-auto">{content}</div>
      </Container>
    </div>
  );
}
