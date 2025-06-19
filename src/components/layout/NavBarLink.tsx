import Link from "next/link";

export default function NavBarLink({
  to,
  children,
}: { to: string; children: React.ReactNode }) {
  return (
    <Link className="no-underline select-none" href={to} tabIndex={-1}>
      {children}
    </Link>
  );
}
