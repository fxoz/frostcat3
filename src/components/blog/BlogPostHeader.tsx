import { titleFont } from "@/helpers/fonts";
import type { BlogPost } from "@/types/blog";
import { getRelativeTime } from "@/helpers/time";

export default function BlogPostHeader({ post }: { post: BlogPost }) {
  return (
    <div className="bg-c-primary-ghost p-4 px-6 rounded-lg">
      <h1 className={`my-2 text-5xl ${titleFont.className}`}>
        {post.metadata.title}
      </h1>
      <p className="mt-2 text-lg opacity-90">{post.metadata.description}</p>
      <p className="opacity-60 py-0">
        {getRelativeTime(post.metadata.date)} - Felix Orosz
      </p>
    </div>
  );
}
