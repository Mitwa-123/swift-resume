import ResumeSection from "./ResumeSection";

export default function ResumeContainer() {
  return (
    <div className=" mt-5.5 space-y-10 ">
      <ResumeSection title="Recents" type="recent"/>
      <ResumeSection title="All" type="all" />
    </div>
  );
}
