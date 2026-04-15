"use client";

import { Accordion } from "@/components/ui/accordion";
import SectionItem from "./SectionItem";
import { User, Briefcase, Lightbulb, GraduationCap, Medal, PenLine, Eye, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function EditorAccordion() {
  const sections = [
    { value: "personal", title: "Personal details", desc: "Your name, summary, image and title", icon: User },
    { value: "experience", title: "Experience", desc: "Your work history and achievements", icon: Briefcase },
    { value: "skills", title: "Skills", desc: "Key areas that illustrate your strengths", icon: Lightbulb },
    { value: "education", title: "Education", desc: "Where you studied and your qualifications", icon: GraduationCap },
    { value: "additional", title: "Additional proficiencies", desc: "Certificates and languages", icon: Medal },
    { value: "custom", title: "Custom sections", desc: "Showcase unique experiences", icon: LayoutGrid },
  ];

  return (
    <div className="lg:flex-shrink-0 lg:sticky lg:inset-y-3 lg:left-3 lg:my-3 lg:mr-3 lg:border lg:border-border lg:rounded-xl lg:bg-background lg:max-w-[520px] lg:w-full lg:overflow-hidden">
      <div className="flex items-center justify-between px-4.5 py-3.5 border-b">
        <Button variant="outline" size="icon" className="h-9 w-9">
          <LayoutGrid className="w-4 h-4" />
        </Button>
        <div className="max-w-44.25 w-full">
          <Tabs defaultValue="tab1" className="w-full">
            <TabsList variant="boxed" className="w-full">
              <TabsTrigger value="tab1">Editor</TabsTrigger>
              <TabsTrigger value="tab2">Design</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div className="w-9" />
      </div>
    </div>
  );
}