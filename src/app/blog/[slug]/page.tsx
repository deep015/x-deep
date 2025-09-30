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
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug: string) => ({ slug }));
}

// -----------------------------
// 2️⃣ Props type
// -----------------------------
interface BlogPageProps {
  params: Promise<{ slug: string }>; // 👈 must be Promise now
}

// -----------------------------
// 3️⃣ Metadata generator
// -----------------------------
export async function generateMetadata(
  { params }: BlogPageProps
): Promise<Metadata> {
  const { slug } = await params; // 👈 await before using
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
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description || "",
      images: frontmatter.image
        ? [
            {
              url: frontmatter.image,
              width: 1200,
              height: 630,
              alt: frontmatter.title,
            },
          ]
        : [], // fallback if no image
    },
  };
}

// -----------------------------
// 4️⃣ Page component
// -----------------------------
export default async function SingleBlogPage({ params }: BlogPageProps) {
  const { slug } = await params; // 👈 await before use
  const blog = await getSingleBlog(slug);

  if (!blog) {
    redirect("/blog");
  }

  const { frontmatter, content } = blog;

  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-screen p-10 md:pt-26 md:pb-14">
        {frontmatter.image ? (
          <Image
            className="my-20 object-cover max-h-96 w-full border border-neutral-200 
            max-w-2xl mx-auto rounded-2xl shadow-xl"
            src={frontmatter.image}
            alt={frontmatter.title}
            width={1200}
            height={630}
            priority
          />
        ) : (
          // ✅ fallback image to fix "null" error
          <Image
            className="my-20 object-cover max-h-96 w-full border border-neutral-200 
            max-w-2xl mx-auto rounded-2xl shadow-xl"
            src="/default.svg"
            alt="Default blog image"
            width={1200}
            height={630}
            priority
          />
        )}
        <div className="prose mx-auto">{content}</div>
      </Container>
    </div>
  );
}
