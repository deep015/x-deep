import { promises as fs } from 'fs';
import { compileMDX } from 'next-mdx-remote/rsc';
import path from 'path';

 type FrontMatter = {
    title: string;
    description: string;
    date: string;
    image: string;
}
export type Blog = {
  slug: string;
} & FrontMatter;

// Get a single blog's content and frontmatter
export const getSingleBlog = async (slug: string) => {
    try {
        const singleBlog = await fs.readFile(
            path.join(process.cwd(), 'src/app/data/', `${slug}.mdx`),
            'utf-8'
        );

        if (!singleBlog) return null;

        const { content, frontmatter } = await compileMDX<{
            description: any;
            title: string; frontmatter: FrontMatter 
}>({
            source: singleBlog || '',
            options: { parseFrontmatter: true },
        });

        return { content, frontmatter };
    } catch (error) {
        console.error(`Error reading blog file for slug "${slug}":`, error);
        return null;
    }
}

// Get all blogs with frontmatter
export const getBlogs = async () => {
    try {
        const files = await fs.readdir(path.join(process.cwd(), 'src/app/data/'));

        const allBlogs = await Promise.all(
            files.map(async (file) => {
                const slug = file.replace('.mdx', '');
                const frontmatter = await fetchBlogsFrontMatterBySlug (slug);
                return { slug, ...frontmatter };
            })
        );

        return allBlogs;
    } catch (error) {
        console.error('Error fetching blogs:', error);
        return [];
    }
}

// Extract frontmatter only
export  const fetchBlogsFrontMatterBySlug  = async (slug: string): Promise<FrontMatter | {}> => {
    try {
        const fileContent = await fs.readFile(
            path.join(process.cwd(), 'src/app/data/', `${slug}.mdx`),
            'utf-8'
        );

        const { frontmatter } = await compileMDX<{ frontmatter: FrontMatter }>({
            source: fileContent,
            options: { parseFrontmatter: true },
        });

     return frontmatter || { title: '', description: '' };
    } catch (error) {
        console.error(`Error fetching frontmatter for slug "${slug}":`, error);
        return {};
    }
}

