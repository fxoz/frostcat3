import Link from "next/link";
import Skills from "@/components/skills/Skills";
import HeroButton from "@/components/layout/HeroButton";
import { IconNews, IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";
import PortraitAndName from "./PortraitAndName";

export default function Home() {
  return (
    <main>
      <header className="py-2 px-8 text-center rounded-2xl bg-c-gradient-hero pb-24">
        <div className="my-4 flex md:gap-8 md:text-center flex-col md:flex-row">
          <PortraitAndName />
          <div>
            <p className="text-left p-4 leading-relaxed">
              Hallo! Mein Name ist Felix Orosz. Seit ich 13 Jahre alt bin,
              begeistere ich mich für das Programmieren
              und habe eine große Leidenschaft für Technik. Seit 2022
              sammle ich praktische Erfahrungen als Full-Stack-Webentwickler. Ende 2024
              habe ich mein Informatikstudium an der{" "}
              <Link
                href="https://www.hs-niederrhein.de/startseite/"
                target="_blank"
              >
                Hochschule Niederrhein
              </Link>{" "}
              in Krefeld (NRW) begonnen.
            </p>
            <div className="flex gap-2 px-2 my-2 flex-wrap  md:flex-row">
              <Link href="/blog">
                <HeroButton>
                  <IconNews className="mr-2" />
                  Blog
                </HeroButton>
              </Link>
              <Link href="https://www.linkedin.com/in/fxoz" target="_blank">
                <HeroButton>
                  <IconBrandLinkedin className="mr-2" />
                  LinkedIn
                </HeroButton>
              </Link>
              <Link href="https://github.com/fxoz" target="_blank">
                <HeroButton>
                  <IconBrandGithub className="mr-2" />
                  GitHub
                </HeroButton>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <h2 className="text-center mt-0">Fähigkeiten</h2>
      <Skills />
    </main >
  );
}
