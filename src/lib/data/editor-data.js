import CustomSection from "@/components/editorforms/CustomSection";
import EducationSection from "@/components/editorforms/EducationSection";
import ExperienceSection from "@/components/editorforms/ExperienceSection";
import PersonalDetailsForm from "@/components/editorforms/PersonalDetailsForm";
import ProficienciesSection from "@/components/editorforms/ProficienciesSection";
import SkillsSection from "@/components/editorforms/SkillsSection";
import {
  User,
  Briefcase,
  Lightbulb,
  GraduationCap,
  Medal,
  LayoutGrid,
} from "lucide-react";

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
    icon: LayoutGrid,
    content: <CustomSection />,
  },
];
