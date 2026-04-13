import TemplateGrid from "@/components/onboarding/templateGrid";
import TemplateTabs from "@/components/onboarding/TemplateTabs";
import { templates } from "@/components/onboarding/template-data";
export default function Page() {
  return (
    <>
      {/* Tabs */}
      <div className="w-full border-b">
        <div className="max-w-325 mx-auto px-4">
          <TemplateTabs />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        <TemplateGrid templates={templates} />
      </div>
    </>
  );
}
