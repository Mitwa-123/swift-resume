import React from "react";
import { ChevronLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DialogHeader({
  title,
  description,
  onBack,
  isJobHistory,
}) {
  return (
    <div className="w-full flex flex-col items-center text-center gap-4">
      <div className="h-[40px] flex p-2.5 items-center justify-center rounded-xl bg-blue-50 border border-blue-100">
        <Sparkles className="size-4.5 text-blue-600" />
      </div>

      <div className="flex flex-col gap-1.5 items-center">
        <div className="flex items-center justify-center gap-1 sm:gap-2 w-full">
          {onBack && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onBack}
              className="size-6 sm:size-7 border-border shadow-sm cursor-pointer"
            >
              <ChevronLeft className="size-3 sm:size-4 text-muted-foreground" />
            </Button>
          )}
          <h2 className="text-base sm:text-lg font-semibold leading-none">
            {title}
          </h2>
        </div>

        <p
          className={`text-sm sm:text-base font-normal leading-6  text-muted-foreground ${
            isJobHistory ? "max-w-55" : "max-w-none"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
