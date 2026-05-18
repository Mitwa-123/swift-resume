import CustomSection from "@/components/editorforms/CustomSection";
import EducationSection from "@/components/editorforms/EducationSection";
import ExperienceSection from "@/components/editorforms/ExperienceSection";
import PersonalDetailsForm from "@/components/editorforms/PersonalDetailsForm";
import ProficienciesSection from "@/components/editorforms/ProficienciesSection";
import SkillsSection from "@/components/editorforms/SkillsSection";
import { User, Briefcase, Lightbulb, GraduationCap, Medal } from "lucide-react";

const CustomFileSmileIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
<path d="M14 2v4a2 2 0 0 0 2 2h4" />
<circle cx="10" cy="13" r="1" fill="currentColor" stroke="none" />
<circle cx="14" cy="13" r="1" fill="currentColor" stroke="none" />
<path d="M10 16.5a2.5 2.5 0 0 0 4 0" />
</svg>
  );

  export const RESUME_SECTIONS = [
  {
    value: "personal",
    title: "Personal details",
    desc: "Your name, summary, image and title",
    icon: User,
    content: <PersonalDetailsForm />,
  },
  {
    value: "experience",
    title: "Experience",
    desc: "Your work history and achievements",
    icon: Briefcase,
    content: <ExperienceSection />,
  },
  {
    value: "skills",
    title: "Skills",
    desc: "Key areas that illustrate your strengths",
    icon: Lightbulb,
    content: <SkillsSection />,
  },
  {
    value: "education",
    title: "Education",
    desc: "Where you studied and your qualifications",
    icon: GraduationCap,
    content: <EducationSection />,
  },
  {
    value: "additional",
    title: "Additional proficiencies",
    desc: "Certificates and languages",
    icon: Medal,
    content: <ProficienciesSection />,
  },
  {
    value: "custom",
    title: "Custom sections",
    desc: "Showcase unique experiences",
    icon: CustomFileSmileIcon,
    content: <CustomSection />,
},
];
