import Link from "next/link";
import { ReactNode } from "react";


export default function LicenseItem({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex no-underline text-xs"
    >
      {children}
    </Link>
  );
};

