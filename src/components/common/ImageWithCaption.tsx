"use client";

import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function ImageWithCaption({
  file,
  caption,
  attribution,
}: {
  file: string;
  caption: string;
  attribution?: string;
}) {
  return (
    <div className="w-full my-4 flex justify-center">
      <div className="w-fit p-4 bg-c-primary-shade rounded-lg transition-transform duration-300 hover:scale-105">
        <Zoom>
          <Image
            draggable={false}
            src={`/assets/blog/${file}`}
            className="rounded-lg max-h-[500px] object-scale-down w-fit"
            alt={caption}
            height={500}
            width={1000}
          />
        </Zoom>
        {attribution && <p className="opacity-50 text-sm">{attribution}</p>}
        <p className="leading-tight p-0">{caption}</p>
      </div>
    </div>
  );
}
