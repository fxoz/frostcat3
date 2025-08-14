import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/helpers/posts";
import BlogPostViewer from "@/components/blog/BlogPostViewer";
import "@/styles/highlightjs/catppuccin.css";
import { generateMetadataForBlogPost } from "./seo";

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return generateMetadataForBlogPost({ params: { slug } });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return notFound();

  return (
    <main>
      <BlogPostViewer post={post} />
    </main>
  );
}
