import Link from "next/link";
import { IconShare, IconBrandGithub, IconBrandBluesky, IconBrandLinkedin, IconMail } from "@tabler/icons-react";

export default function ContactPage() {
  return (
    <main>
      <h1>Kontakt</h1>
      <h2>
        <IconMail className="inline mr-2 align-top stroke-c-primary" size={36} />
        E-Mail</h2>
      <div className="space-y-4">
        <p>
          <b>Seriöse Anfragen </b>
          <Link href="mailto:mail@felixorosz.de">mail@felixorosz.de</Link>
        </p>
        <p>
          <b>Allgemein </b>
          <Link href="mailto:hi@frost.cat">hi@frost.cat</Link>
        </p>
        <p>
          <b>Rechtliches </b>
          <Link href="/impressum">siehe Impressum</Link>
        </p>
      </div>
      <h2>
        <IconShare className="inline mr-2 align-top stroke-c-primary" size={36} />
        Soziale Netzwerke</h2>
      <div className="space-y-4">
        <p>
          <IconBrandLinkedin className="inline mr-2 align-top stroke-c-primary-light" size={24} />
          <b>LinkedIn</b>{" "}
          <Link href="https://www.linkedin.com/in/felix-orosz-88b075356" target="_blank">
            Felix Orosz
          </Link>
        </p>
        <p>
          <IconBrandBluesky className="inline mr-2 align-top stroke-c-primary-light" size={24} />
          <b>Bluesky</b>{" "}
          <Link href="https://bsky.app/profile/frost.cat" target="_blank">
            @frost.cat
          </Link>
        </p>
        <p>
          <IconBrandGithub className="inline mr-2 align-top stroke-c-primary-light" size={24} />
          <b>GitHub</b>{" "}
          <Link href="https://github.com/fxoz" target="_blank">
            @fxoz
          </Link>
        </p>
      </div>
    </main>
  );
}
