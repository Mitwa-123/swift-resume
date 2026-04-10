import ResumeTabs from "@/components/dashboard/createResume/ResumeTabs";

export default function ResumeLayout({ children }) {
  return (
    <div className="w-full">
      <div className="w-full border-b">
        <div className="max-w-325 mx-auto px-4 sm:px-5 lg:px-10.5">
          <ResumeTabs />
        </div>
      </div>
      {children}
    </div>
  );
}
