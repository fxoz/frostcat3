export const runtime = 'nodejs';

import Link from "next/link";
import type { BlogPost } from "@/types/blog";
import type { IconProps } from "@tabler/icons-react";
import {
  IconBrandBluesky,
  IconBrandReddit,
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
} from "@tabler/icons-react";

function ShareIconLink({ href, icon: Icon, title }: {
  href: string;
  icon: React.ComponentType<IconProps>;
  title: string;
}) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <Icon
        className="inline-block w-6 h-6 text-c-text hover:text-c-primary align-top"
        title={title}
      />
    </Link>
  );
}

export default function BlogPostToolbar({ post }: { post: BlogPost }) {
  const url = `https://felixorosz.de/blog/${post.slug}`;

  const blueskyTextEncoded = encodeURIComponent(
    `"${post.metadata.title}" ${url}`,
  );

  const twitterTextEncoded = encodeURIComponent(
    `"${post.metadata.title}" ${url}`,
  );

  return (
    <div className="bg-c-primary-ghost opacity-80 p-4 rounded-lg mt-6">
      <span className="pr-4 mb-2 block md:inline">
        Diesen Beitrag teilen auf:
      </span>
      <div className="inline-flex gap-4 flex-wrap">
        <ShareIconLink
          href={`https://www.linkedin.com/shareArticle?url=${url}`}
          icon={IconBrandLinkedin}
          title="LinkedIn"
        />
        <ShareIconLink
          href={`https://bsky.app/intent/compose?text=${blueskyTextEncoded}`}
          icon={IconBrandBluesky}
          title="Bluesky"
        />
        <ShareIconLink
          href={`https://www.reddit.com/submit?url=${url}`}
          icon={IconBrandReddit}
          title="Reddit"
        />
        <ShareIconLink
          href={`https://twitter.com/intent/tweet?text=${twitterTextEncoded}`}
          icon={IconBrandX}
          title="X (Twitter)"
        />
        <ShareIconLink
          href={`mailto:?subject=${post.metadata.title}&body=${url}`}
          icon={IconMail}
          title="E-Mail"
        />
      </div>
    </div>
  );
}
