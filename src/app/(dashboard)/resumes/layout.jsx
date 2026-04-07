import ResumeTabs from "@/components/dashboard/createResume/ResumeTabs";

export default function ResumeLayout({ children }) {
  return (
    <div className="max-w-full lg:max-w-325 mx-auto px-4 sm:px-5 lg:px-10.5 font-open-sans">
      <ResumeTabs />
      {children}
    </div>
  );
}
