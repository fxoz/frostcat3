import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import sanitize from "sanitize-filename";
import type { BlogPost } from "@/types/blog";

const postsDirectory = path.join(process.cwd(), "src/app/blog/posts");

function isValidSlug(slug: string): boolean {
  const sanitized = sanitize(slug);
  if (sanitized !== slug) return false;
  if (path.isAbsolute(slug)) return false;
  if (slug.includes("..") || slug.includes("/") || slug.includes("\\")) return false;
  return true;
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const files = fs.readdirSync(postsDirectory);

  const posts = files.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContents);

    return {
      slug: filename.replace(".mdx", ""),
      metadata: {
        title: data.title || "Untitled",
        description: data.description || "",
        date: data.date || "1970-01-01",
        tags: data.tags || [],
      },
      content,
    };
  });

  posts.sort(
    (a, b) =>
      new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime(),
  );

  return posts;
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!isValidSlug(slug)) {
    return null;
  }

  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  if (!filePath.startsWith(postsDirectory)) {
    return null;
  }

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    metadata: {
      title: data.title || "Untitled",
      description: data.description || "",
      date: data.date || "1970-01-01",
      tags: data.tags || [],
    },
    content,
  };
}
