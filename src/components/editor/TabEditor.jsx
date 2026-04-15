"use client";

import { Button } from "@/components/ui/button";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Download,
  Palette,
} from "lucide-react";

export default function TabEditor() {
  return (
    <div className="z-10 editor-header sticky top-2 py-1.5 mb-1.5 flex items-center justify-between transition-all duration-300 rounded-lg border border-transparent lg:top-3">
      <div className="flex items-center gap-1 text-muted-foreground">
        <ChevronLeft className="w-4 h-4 cursor-pointer" />
        <ChevronRight className="w-4 h-4 cursor-pointer" />

        <div className="flex items-center gap-1 text-xs text-muted-foreground leading-4 font-medium">
          <Check className="w-4 h-4" />
          <span>Saved</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 text-sm text-muted-foreground leading-5 font-medium cursor-pointer">
          <Palette className="w-4 h-4" />
          <span>Templates</span>
        </div>

        <Button size="sm">
          <Download className="w-4 h-4" />
          Download
        </Button>
      </div>
    </div>
  );
}
