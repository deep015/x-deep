// utils/mdx.ts
import { promises as fs } from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

// -----------------------------
// Types
// -----------------------------
export interface FrontMatter {
  title: string;
  description: string;
  date: string;
  image: string;
}

export type Blog = FrontMatter & { slug: string };

export interface SingleBlog {
  frontmatter: FrontMatter;
  content: React.ReactNode | string;
}

// -----------------------------
// 1️⃣ Fetch frontmatter only
// -----------------------------
export const fetchBlogsFrontMatterBySlug = async (
  slug: string
): Promise<FrontMatter> => {
  try {
    const fileContent = await fs.readFile(
      path.join(process.cwd(), "src/app/data/", `${slug}.mdx`),
      "utf-8"
    );

    const { frontmatter: rawFrontmatter } = await compileMDX<{
        title: string;
        description: string;
        date: string;
        image: string; frontmatter: Partial<FrontMatter> 
}>({
      source: fileContent,
      options: { parseFrontmatter: true },
    });

    // ✅ Construct a complete FrontMatter object
    const frontmatter: FrontMatter = {
      title: rawFrontmatter?.title || "Untitled",
      description: rawFrontmatter?.description || "No description",
      date: rawFrontmatter?.date || new Date().toISOString(),
      image: rawFrontmatter?.image || "/default-image.png",
    };

    return frontmatter;
  } catch (error) {
    console.error(`Error fetching frontmatter for slug "${slug}":`, error);
    return {
      title: "Untitled",
      description: "No description",
      date: new Date().toISOString(),
      image: "/default-image.png",
    };
  }
};


// -----------------------------
// 2️⃣ Get single blog (frontmatter + content)
// -----------------------------
export const getSingleBlog = async (slug: string): Promise<SingleBlog | null> => {
  try {
    const fileContent = await fs.readFile(
      path.join(process.cwd(), "src/app/data/", `${slug}.mdx`),
      "utf-8"
    );

    if (!fileContent) return null;

    const { frontmatter, content } = await compileMDX<{
        title: string;
        description: string;
        date: string;
        image: string; frontmatter: Partial<FrontMatter> 
}>({
      source: fileContent,
      options: { parseFrontmatter: true },
    });

    // ✅ Fill missing properties with defaults
    const safeFrontmatter: FrontMatter = {
      title: frontmatter?.title || "Untitled",
      description: frontmatter?.description || "No description",
      date: frontmatter?.date || new Date().toISOString(),
      image: frontmatter?.image || "/default-image.png",
    };

    return { frontmatter: safeFrontmatter, content };
  } catch (error) {
    console.error(`Error reading blog file for slug "${slug}":`, error);
    return null;
  }
};

// -----------------------------
// 3️⃣ Get all blogs with frontmatter
// -----------------------------
export const getBlogs = async (): Promise<Blog[]> => {
  try {
    const files = await fs.readdir(path.join(process.cwd(), "src/app/data/"));

    const allBlogs = await Promise.all(
      files.map(async (file) => {
        const slug = file.replace(/\.mdx$/, "");
        const frontmatter = await fetchBlogsFrontMatterBySlug(slug);
        return { slug, ...frontmatter };
      })
    );

    // ✅ Sort blogs by date (descending, most recent first)
    const sortedBlogs = allBlogs.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return sortedBlogs;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
};

// -----------------------------
// 4️⃣ Get all slugs for SSG
// -----------------------------
export const getAllBlogSlugs = async (): Promise<string[]> => {
  try {
    const files = await fs.readdir(path.join(process.cwd(), "src/app/data/"));
    return files.map((file) => file.replace(/\.mdx$/, ""));
  } catch (error) {
    console.error("Error reading blog slugs:", error);
    return [];
  }
};
