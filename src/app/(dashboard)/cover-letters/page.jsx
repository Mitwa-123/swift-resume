import ResumeTabs from "@/components/dashboard/createResume/ResumeTabs";

export default function CoverLettersPage() {
  return (
    <>
    <div className="max-w-full lg:max-w-325 mx-auto px-4 sm:px-5 lg:px-10.5 font-open-sans">
          <ResumeTabs />
      <div className="text-center mt-10">
        <h2 className="text-2xl sm:text-3xl font-bold">
          Create your cover letter
        </h2>
      </div>
      </div>
    </>
  );
}