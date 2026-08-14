type SkillTagProps = {
  skill: string;
};

export default function SkillTag({ skill }: SkillTagProps) {
  return (
    <div className="flex justify-center items-center min-w-16 p-1 px-2 bg-[#2a2a2a] rounded-3xl text-xs text-[#60a5fa] border border-[var(--accent)]">
      {skill}
    </div>
  );
}
