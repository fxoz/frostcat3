import Link from "next/link";
import { IconWorldWww, IconBrandGithub } from "@tabler/icons-react";
import type { IconProps } from "@tabler/icons-react";

export default function Tool({
  title, text, icon: Icon, github, website
}: {
  title: string;
  text: string;
  icon: React.ComponentType<IconProps>;
  github: string;
  website: string;
}) {
  return (
    <div className="bg-c-primary-ghost p-4 rounded-lg w-full flex flex-col">
      <h3 className="text-xl my-1">
        <Icon size={28} className="inline mr-2 stroke-c-primary align-top" />
        {title}
      </h3>
      <div className="mt-4 *:p-2 *:rounded-full *:max-w-fit *:no-underline space-y-2">
        <Link href={website} target="_blank" className="mr-2 bg-c-gradient-button">
          <IconWorldWww className="inline mr-2 align-top" />
          Webseite
        </Link>
        <Link href={github} target="_blank" className="bg-c-primary-shade">
          <IconBrandGithub className="inline mr-2 align-top" />
          Quellcode
        </Link>
      </div>
      <div className="my-4 opacity-80">{text}</div>
    </div>
  );
}