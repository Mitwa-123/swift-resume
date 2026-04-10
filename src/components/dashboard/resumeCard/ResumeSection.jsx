import SectionContent from "./sectionContent";

export default function ResumeSection({ title, type }) {
  return (
    <div
      className={`${
        type === "recent" ? "bg-base-accent border-b border-border" : ""
      }`}
    >
      <div className="max-w-314 mx-auto px-4 sm:px-5">
        <SectionContent title={title} type={type} />
      </div>
    </div>
  );
}
