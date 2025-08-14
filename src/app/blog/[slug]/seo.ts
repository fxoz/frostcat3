import type { Metadata } from "next";
import { getPostBySlug } from "@/helpers/posts";

export async function generateMetadataForBlogPost({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.metadata.title,
    description: post.metadata.description,
  };
}
