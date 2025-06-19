"use client";

import React, { useState } from "react";
import BlogOverviewFilters from "./BlogOverviewFilters";
import BlogOverviewItem from "./BlogOverviewItem";
import type { BlogPost } from "../../../types/blog";

export default function BlogOverview({ posts }: { posts: BlogPost[] }) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const tags = Array.from(new Set(posts.flatMap((post) => post.metadata.tags)));

  const filteredPosts = selectedTag
    ? posts.filter((post) => post.metadata.tags.includes(selectedTag))
    : posts;

  return (
    <div>
      <BlogOverviewFilters
        tags={tags}
        selectedTag={selectedTag}
        onSelectTag={setSelectedTag}
      />

      <ul className="p-0 py-4 flex flex-col gap-4">
        {filteredPosts.map((post: BlogPost) => (
          <BlogOverviewItem key={post.slug} post={post} />
        ))}
      </ul>
    </div>
  );
}
