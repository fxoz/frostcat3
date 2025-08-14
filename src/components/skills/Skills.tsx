import SkillSet from "./SkillSet";
import SkillSetItem from "./SkillSetItem";
import { SkillSetLevels } from "./SkillSet";
import { SkillCategory } from "./SkillSetItem";

export default function Skills() {
  return (
    <section>
      <p className="mb-8">
        <br />💼 = in beruflichen Kontexten verwendet
        <br />📙 = im Studium verwendet
        <br />📗 = in der Schule kennengelernt
      </p>
      <div className="flex gap-6 flex-col lg:flex-row mb-8">
        <SkillSet level={SkillSetLevels.NOOB}>
          <SkillSetItem category={SkillCategory.CODE}>Go</SkillSetItem>
          <SkillSetItem category={SkillCategory.CODE}>Kotlin</SkillSetItem>
          <SkillSetItem category={SkillCategory.DATABASE}>SQL 📗</SkillSetItem>
          <SkillSetItem category={SkillCategory.FRAMEWORK}>
            Svelte & SvelteKit
          </SkillSetItem>
          <SkillSetItem category={SkillCategory.TECH}>
            Linux, Sysadmin
          </SkillSetItem>
          <SkillSetItem category={SkillCategory.CREATIVITY}>
            Adobe Premiere Pro (Videoschnitt)
          </SkillSetItem>
        </SkillSet>
        <SkillSet level={SkillSetLevels.INTERMEDIATE}>
          <SkillSetItem category={SkillCategory.CODE}>C++ 📙</SkillSetItem>
          <SkillSetItem category={SkillCategory.CODE}>Java 📗</SkillSetItem>
          <SkillSetItem category={SkillCategory.CODE}>
            JavaScript & TS 💼
          </SkillSetItem>
          <SkillSetItem category={SkillCategory.WEB}>React 💼</SkillSetItem>
          <SkillSetItem category={SkillCategory.FRAMEWORK}>Next.js 💼</SkillSetItem>
          <SkillSetItem category={SkillCategory.DATABASE}>MongoDB</SkillSetItem>
          <SkillSetItem category={SkillCategory.TECH}>
            Excel, PowerPoint
          </SkillSetItem>
          <SkillSetItem category={SkillCategory.TECH}>PC Hardware</SkillSetItem>
          <SkillSetItem category={SkillCategory.CREATIVITY}>
            Fotografie
          </SkillSetItem>
        </SkillSet>
        <SkillSet level={SkillSetLevels.PRO}>
          <SkillSetItem category={SkillCategory.CODE}>Python 💼</SkillSetItem>
          <SkillSetItem category={SkillCategory.WEB}>
            CSS & SASS 💼
          </SkillSetItem>
          <SkillSetItem category={SkillCategory.FRAMEWORK}>
            TailwindCSS 💼
          </SkillSetItem>
          <SkillSetItem category={SkillCategory.FRAMEWORK}>FastAPI 💼</SkillSetItem>
          <SkillSetItem category={SkillCategory.FRAMEWORK}>Flask 💼</SkillSetItem>
          <SkillSetItem category={SkillCategory.CREATIVITY}>
            GIMP (Bildbearbeitung)
          </SkillSetItem>
        </SkillSet>
      </div>

      <p>
        Des Weiteren habe ich vor, in naher Zukunft insbesondere folgende Skills
        auszubauen:
      </p>
      <ul>
        <li>Cyber Security</li>
        <li>CI/CD und Docker</li>
        <li>Rust</li>
        <li>Go (v.A. für APIs)</li>
        <li>Git CLI, fortgeschrittenes Versionsmanagement</li>
        <li>Kotlin (für App-Entwicklung)</li>
        <li>Adobe Creative Suite</li>
        <li>3D Druck & Modellierung</li>
        <li>Elektrotechnik & Mikrocontroller-Programmierung</li>
      </ul>
    </section>
  );
}
