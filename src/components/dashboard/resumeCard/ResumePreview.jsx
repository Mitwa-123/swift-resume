import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
export default function ResumePreview() {
  return (
    <>
      <div className="flex justify-center px-1.5 pt-2.5">
        <Image
          src="/images/recent-resume-card.svg"
          width={262}
          height={154}
          alt="resume"
          className="border border-border rounded-sm shadow-[0_1px_2px_0_rgba(0,0,0,0.04)]"
        />
      </div>
      <div className="flex items-center justify-between p-4">
        <div>
          <h3 className="text-sm font-semibold text-card-foreground leading-5 mb-0.5">
            Untitled resume
          </h3>
          <p className="text-xs leading-4 text-muted-foreground">
            Edited yesterday
          </p>
        </div>

        <Button
          variant="outline"
          size="icon-lg"
          className="h-7 w-7 rounded-lg border border-border"
        >
          <MoreVertical size={28} />
        </Button>
      </div>
    </>
  );
}
