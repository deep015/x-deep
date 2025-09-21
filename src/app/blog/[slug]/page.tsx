// app/blog/[slug]/page.tsx
import React from "react";
import Container from "../../components/container";
import { redirect } from "next/navigation";
import { fetchBlogsFrontMatterBySlug, getSingleBlog, getBlogs } from "../../utils/mdx";



// -----------------------------
// 2️⃣ Metadata generator
// -----------------------------
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const frontmatter = await fetchBlogsFrontMatterBySlug(params.slug);
  
  if (!frontmatter || !("title" in frontmatter)) {
    return {
      title: "Blog not found",
      description: "The requested blog does not exist.",
    };
  }

  return {
    title: frontmatter.title + "-Deep",
    description: frontmatter.description,
  };
}

export default async function SingleBlogPage({ params }: { params: { slug: string } }) {
  const blog = await getSingleBlog(params.slug);

  if (!blog) redirect("/blog");

  const { frontmatter, content } = blog;

  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-[200vh] p-10 md:pt-26 md:pb-14">
        <div className="prose mx-auto">{content}</div>
      </Container>
    </div>
  );
}
