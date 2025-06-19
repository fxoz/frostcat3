export type BlogPostMetadata = {
  title: string;
  description: string;
  date: string; // Format: YYYY-MM-DD
  tags: string[];
};

export type BlogPost = {
  slug: string;
  metadata: BlogPostMetadata;
  content: string;
};
