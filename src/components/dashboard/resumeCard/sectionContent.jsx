import ResumeGrid from "./ResumeGrid";
import { Badge } from "@/components/ui/badge";

export default function SectionContent({ title, type }) {
  return (
    <>
      <div className="flex items-center justify-between pb-5">
        <h2 className="text-lg font-medium leading-7 text-foreground pt-5.5 ">
          {title}{" "}
          {type === "all" && (
            <Badge className="h-5 px-1 text-xs rounded-md bg-muted text-foreground">
              10
            </Badge>
          )}
        </h2>
      </div>

      <ResumeGrid type={type} />
    </>
  );
}
