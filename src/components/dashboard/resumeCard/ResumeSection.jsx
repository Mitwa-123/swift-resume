import ResumeGrid from "./ResumeGrid";
import { Badge } from "@/components/ui/badge";

export default function ResumeSection({ title, type }) {
  return (
    <div
      className={
        type === "recent" ? " border-b  border-gray-200 pb-10.5" : ""
      }
    >
      <div className="max-w-300 mx-auto">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-medium leading-7 text-foreground">
            {title}{" "}
            {type === "all" && (
              <Badge variant="secondary" className="rounded-full   text-xs">
                10
              </Badge>
            )}
          </h2>
        </div>

        <ResumeGrid type={type} />
      </div>
    </div>
  );
}
