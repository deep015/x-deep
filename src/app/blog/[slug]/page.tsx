// app/blog/[slug]/page.tsx
import React from "react";
import Container from "../../components/container";
import { redirect } from "next/navigation";
import { fetchBlogsFrontMatterBySlug, getSingleBlog, getAllBlogSlugs, FrontMatter } from "../../utils/mdx";

// -----------------------------
// 1️⃣ Generate static params for SSG
// -----------------------------
export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

// -----------------------------
// 2️⃣ Metadata generator
// -----------------------------
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const slug = params.slug; // use a local constant
  const frontmatter = await fetchBlogsFrontMatterBySlug(slug);
  if (!frontmatter.title) {
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
// 3️⃣ Page component
// -----------------------------
export default async function SingleBlogPage({ params }: { params: { slug: string } }) {
  const blog = await getSingleBlog(params.slug);

  if (!blog) {
    redirect("/blog"); // Redirect if blog not found
  }

  const { frontmatter, content } = blog!;

  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-screen p-10 md:pt-26 md:pb-14">
        <img
        className=" my-20 object-cover max-h-96 w-full border border-neutral-200 
        max-w-2xl mx-auto   rounded-2xl shadow-xl"
        src={frontmatter.image} alt={frontmatter.title} />
        <div className="prose mx-auto">{content}</div>
      </Container>
    </div>
  );
}
