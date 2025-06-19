import { getPostBySlug } from "@/helpers/posts";

export async function generateMetadataForBlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return { title: "Not Found" };

  return {
    title: post.metadata.title,
    description: post.metadata.description,
  };
}
