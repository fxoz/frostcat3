export enum SkillSetLevels {
  NOOB = "Anfänger",
  INTERMEDIATE = "Fortgeschritten",
  PRO = "Profi",
}

const colorVariants: Record<SkillSetLevels, string> = {
  [SkillSetLevels.NOOB]: "bg-c-gradient-bleed-red",
  [SkillSetLevels.INTERMEDIATE]: "bg-c-gradient-bleed-yellow",
  [SkillSetLevels.PRO]: "bg-c-gradient-bleed-green",
};

export default function SkillSet({
  level,
  children,
}: { level: SkillSetLevels; children: React.ReactNode }) {
  return (
    <div className={`p-6 w-full rounded-lg ${colorVariants[level]}`}>
      <p className="font-bold mb-4 text-xl">{level}</p>
      {children}
    </div>
  );
}
