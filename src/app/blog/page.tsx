import { getAllPosts } from "../../helpers/posts";
import BlogOverview from "@/components/blog/overview/BlogOverview";

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <main>
      <h1>Blog</h1>
      <BlogOverview posts={posts} />
    </main>
  );
}
