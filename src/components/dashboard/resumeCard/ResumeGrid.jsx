import CreateResumeCard from "./CreateResumeCard";
import RecentResumeCard from "./recentResumeCard";

export default function ResumeGrid({ type }) {
  const data = new Array(4).fill("/resumes/resume.png");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
      {type === "all" && <CreateResumeCard />}

      {data.map((img, i) => (
        <RecentResumeCard key={i} image={img} />
      ))}
    </div>
  );
}
