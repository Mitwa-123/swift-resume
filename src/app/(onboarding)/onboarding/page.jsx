"use client";

import { useState } from "react";
import TemplateTabs from "@/components/onboarding/TemplateTabs";
import { templateData } from "@/components/onboarding/template-data";
import Container from "@/components/container/container";
import TemplateGrid from "@/components/onboarding/templateGrid";

export default function Page() {
  const [activeTab, setActiveTab] = useState("all");

  const templates = templateData[activeTab] || [];

  return (
    <>
      <div className="w-full border-b">
        <Container>
          <TemplateTabs value={activeTab} onChange={setActiveTab} />
        </Container>
      </div>

      <Container>
        <TemplateGrid templates={templates} />
      </Container>
    </>
  );
}
