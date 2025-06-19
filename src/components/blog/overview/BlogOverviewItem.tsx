"use client";

import Link from "next/link";
import { getAbsoluteTime } from "@/helpers/time";
import type { BlogPost } from "@/types/blog";

export default function BlogOverviewItem({ post }: { post: BlogPost }) {
  return (
    <Link key={post.slug} href={`/blog/${post.slug}`} className="no-underline">
      <li className="list-none bg-c-primary-ghost hover:bg-c-primary-shade hover:border-c-primary-ghost rounded-lg py-2 px-4 border-2 border-c-primary-soul">
        <p className="opacity-70">{getAbsoluteTime(post.metadata.date)}</p>
        <h2 className="mt-0 mb-2 text-xl">{post.metadata.title}</h2>
        <span className="inline-flex gap-4 my-2 flex-wrap opacity-80">
          {post.metadata.tags.map((tag: string) => (
            <span key={tag} className="rounded-full leading-none text-sm">
              {tag}
            </span>
          ))}
        </span>
      </li>
    </Link>
  );
}
