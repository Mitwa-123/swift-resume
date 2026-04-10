import CreateResumeCard from "./CreateResumeCard";
import RecentResumeCard from "./recentResumeCard";

export default function ResumeGrid({ type }) {
  const data = new Array(type === "all" ? 3 : 4).fill("/resumes/resume.svg");
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-10.5">
      {type === "all" && <CreateResumeCard />}

      {data.map((img, i) => (
        <RecentResumeCard key={i} image={img} />
      ))}
    </div>
  );
}
