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
    content: "mitwa",
  },
  {
    value: "experience",
    title: "Experience",
    desc: "Your work history and achievements",
    icon: Briefcase,
  },
  {
    value: "skills",
    title: "Skills",
    desc: "Key areas that illustrate your strengths",
    icon: Lightbulb,
  },
  {
    value: "education",
    title: "Education",
    desc: "Where you studied and your qualifications",
    icon: GraduationCap,
  },
  {
    value: "additional",
    title: "Additional proficiencies",
    desc: "Certificates and languages",
    icon: Medal,
  },
  {
    value: "custom",
    title: "Custom sections",
    desc: "Showcase unique experiences",
    icon: LayoutGrid,
  },
];
