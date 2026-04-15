"use client";

import ResumeEditor from "./ResumeEditor";
import ResumePreview from "./ResumePreview";

export default function ResumeLayout() {


  return (
    <>
      <div className="flex-auto flex h-full overflow-y-auto thin-scrollbar">
        <div className="flex-1 w-full min-w-0">
          <ResumePreview />
        </div>
        <ResumeEditor />
      </div>
    </>
  );
}
