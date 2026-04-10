import ResumeSection from "./ResumeSection";

export default function ResumeContainer() {
  return (
    <>
      <ResumeSection title="Recents" type="recent" />
      <ResumeSection title="All" type="all" />
    </>
  );
}
