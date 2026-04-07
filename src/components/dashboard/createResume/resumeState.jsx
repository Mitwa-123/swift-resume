import ResumeCard from "./resumeCard";
import ResumeContent from "./resumeContent";

export default function ResumeState() {
  return (
    <div className="min-h-[calc(100vh-120px)] flex flex-col items-center justify-center overflow-hidden">
      <ResumeContent />
      <ResumeCard />
    </div>
  );
}