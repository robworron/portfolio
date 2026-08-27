import FadeIn from "@/app/components/FadeIn";
import SkillTag from "@/app/components/SkillTag";

const SKILL_LIST_STYLE = "flex flex-col gap-2 md:basis-1/3 lg:basis-1/5";
const SKILL_LIST_ITEM_HEADER_STYLE = "text-sm md:text-base font-semibold mb-2";

export default function SkillsSection() {
  return (
    <FadeIn>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Skills</h2>
        <span className="w-12 md:w-20 h-1 bg-[var(--accent)] mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 w-3/4 md:w-full max-w-48 md:max-w-full mx-auto">
          <div className={SKILL_LIST_STYLE}>
            <h3 className={SKILL_LIST_ITEM_HEADER_STYLE}>Languages</h3>
            <SkillTag skill="Python" />
            <SkillTag skill="JavaScript" />
            <SkillTag skill="TypeScript" />
            <SkillTag skill="Java" />
          </div>
          <div className={SKILL_LIST_STYLE}>
            <h3 className={SKILL_LIST_ITEM_HEADER_STYLE}>Frontend</h3>
            <SkillTag skill="HTML" />
            <SkillTag skill="CSS" />
            <SkillTag skill="React" />
            <SkillTag skill="Next.js" />
            <SkillTag skill="Tailwind CSS" />
            <SkillTag skill="Responsive Design" />
            <SkillTag skill="Accessible UI" />
            <SkillTag skill="SEO" />
          </div>
          <div className={SKILL_LIST_STYLE}>
            <h3 className={SKILL_LIST_ITEM_HEADER_STYLE}>Backend & Data</h3>
            <SkillTag skill="SQL" />
            <SkillTag skill="Next.js API Routes" />
            <SkillTag skill="REST API" />
            <SkillTag skill="Google Sheets API" />
            <SkillTag skill="Server-Side Caching" />
            <SkillTag skill="NumPy" />
          </div>
          <div className={SKILL_LIST_STYLE}>
            <h3 className={SKILL_LIST_ITEM_HEADER_STYLE}>
              Tools & Integration
            </h3>
            <SkillTag skill="Git" />
            <SkillTag skill="GitHub" />
            <SkillTag skill="Vercel" />
            <SkillTag skill="Formspree" />
            <SkillTag skill="Elfsight" />
          </div>
          <div className={SKILL_LIST_STYLE}>
            <h3 className={SKILL_LIST_ITEM_HEADER_STYLE}>CS Foundations</h3>
            <SkillTag skill="Data Structures" />
            <SkillTag skill="Algorithms" />
            <SkillTag skill="OOP" />
            <SkillTag skill="Concurrency" />
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
