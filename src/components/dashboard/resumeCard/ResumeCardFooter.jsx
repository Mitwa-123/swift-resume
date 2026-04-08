import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";

export default function ResumeCardFooter() {
  return (
    <div className="flex items-start justify-between">
      <div>
        <h3 className="text-sm font-semibold text-card-foreground leading-5 mb-0.5">Untitled resume</h3>
        <p className="text-xs leading-4 text-muted-foreground">Edited yesterday</p>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="h-7 w-7 rounded-lg border border-border"
      >
        <MoreVertical size={28} />
      </Button>
    </div>
  );
}
