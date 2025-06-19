import { notFound } from "next/navigation";
import { getPostBySlug } from "@/helpers/posts";
import { generateMetadataForBlogPost } from "./seo";
import BlogPostViewer from "@/components/blog/BlogPostViewer";

import "@/styles/highlightjs/catppuccin.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  await generateMetadataForBlogPost({ params });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  return (
    <main>
      <BlogPostViewer post={post} />
    </main>
  );
}
