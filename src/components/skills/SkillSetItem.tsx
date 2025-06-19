import {
  IconCode,
  IconWorldWww,
  IconTool,
  IconBulb,
  IconQuestionMark,
  IconDatabase,
  IconStack
} from "@tabler/icons-react";
import type { Icon } from "@tabler/icons-react";

export enum SkillCategory {
  CODE = "Programmierung",
  WEB = "Web-Entwicklung",
  TECH = "Technik",
  CREATIVITY = "Kreativität",
  DATABASE = "Datenbank-System",
  OTHER = "Anderes",
  FRAMEWORK = "Framework",
}

const skillCategoryIcons: Record<SkillCategory, Icon> = {
  [SkillCategory.CODE]: IconCode,
  [SkillCategory.WEB]: IconWorldWww,
  [SkillCategory.TECH]: IconTool,
  [SkillCategory.CREATIVITY]: IconBulb,
  [SkillCategory.OTHER]: IconQuestionMark,
  [SkillCategory.DATABASE]: IconDatabase,
  [SkillCategory.FRAMEWORK]: IconStack,
};
export default function SkillSetItem({
  category,
  children,
}: { category: SkillCategory; children: React.ReactNode }) {
  const Icon = skillCategoryIcons[category];

  return (
    <p className="py-1">
      <Icon className="inline mr-2 opacity-50" title={category} />
      {children}
    </p>
  );
}
