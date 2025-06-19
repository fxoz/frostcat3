import Image from "next/image";
import ImageWithCaption from "@/components/common/ImageWithCaption";

export const mdxComponents = {
  Image,
  ImageWithCaption,
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isExternal =
      props.href &&
      (props.href.startsWith("http://") ||
        props.href.startsWith("https://") ||
        props.href.startsWith("//"));

    return isExternal ? (
      <a {...props} target="_blank" rel="noopener noreferrer">
        {props.children}
      </a>
    ) : (
      <a {...props}>{props.children}</a>
    );
  },
};
