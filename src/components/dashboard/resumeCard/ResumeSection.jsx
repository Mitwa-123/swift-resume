import ResumeGrid from "./ResumeGrid";

export default function ResumeSection({ title, type }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">
          {title}{" "}
          {type === "all" && (
            <span className="text-gray-500 text-sm">(10)</span>
          )}
        </h2>
      </div>

      <ResumeGrid type={type} />
    </div>
  );
}
