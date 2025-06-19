import Link from "next/link";
import FooterBadges from "./FooterBadges";
import FooterCredits from "./FooterCredits";

export default function Footer() {
  return (
    <footer className="text-sm py-8 text-center bottom-4 ">
      <div className="flex gap-4 justify-center text-center">
        <Link href="/impressum">Impressum</Link>
        <Link href="/datenschutz">Datenschutz</Link>
        <Link href="/contact">Kontakt</Link>
      </div>
      <FooterCredits />
      <FooterBadges />
    </footer>
  );
}
