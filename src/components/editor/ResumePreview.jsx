import { Card } from "@/components/ui/card";
import TabEditor from "./TabEditor";

export default function ResumePreview() {
  return (
    <div className="w-full mx-auto flex flex-col gap-y-2.5 pt-1.5 px-4 sm:pt-5 lg:pb-6">
      <div className="w-full">
        <TabEditor />
      </div>

      <div className="relative flex justify-center items-start w-full">
        <div className="space-y-5 absolute top-0 origin-top scale-[1.68] w-148.75">
          <div className="resume-page flex w-148.75 min-h-210.5 bg-white relative overflow-hidden border border-black/5 rounded shadow-resume-page font-sans">
          {/* main content  */}
          </div>
        </div>

        <div className="w-full h-[800px]   pointer-events-none" />
      </div>
    </div>
  );
}
