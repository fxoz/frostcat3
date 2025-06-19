import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import remarkBreaks from "remark-breaks";
import { mdxComponents } from "./BlogPostCustomComponents";
import type { BlogPost } from "@/types/blog";

import remarkGfm from "remark-gfm";
import BlogPostToolbar from "./BlogPostToolbar";
import BlogPostHeader from "./BlogPostHeader";

export default function BlogPostViewer({ post }: { post: BlogPost }) {
  return (
    <article>
      <BlogPostHeader post={post} />
      <div>
        <MDXRemote
          source={post.content}
          components={mdxComponents}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkBreaks, remarkGfm],
              rehypePlugins: [rehypeHighlight],
            },
          }}
        />
      </div>
      <BlogPostToolbar post={post} />
    </article>
  );
}
