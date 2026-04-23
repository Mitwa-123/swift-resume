"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, FileText, Sparkles } from "lucide-react";

const OptionButton = ({
  icon: Icon,
  title,
  description,
  onClick,
  showBadge,
  iconColorClass ="text-muted-foreground",
}) => {
  return (
   
    <Button
      variant="outline"
      className="w-full h-auto flex justify-between py-3 px-2 shadow-none border-none group hover:bg-base-accent transition-all"
      onClick={onClick}>
      <div className="flex items-center gap-3">
        <div className="p-1.5 bg-base-accent rounded-lg">
          <Icon className={`size-5 ${iconColorClass}`} />
        </div>

        <div className="text-left">
          <div className="flex items-center gap-2 mb-2">
            <p className="font-medium text-base leading-none">{title}</p>
            {showBadge && (
              <Badge className="text-xs border-none font-medium leading-4 text-white bg-linear-to-b from-[#8055FF] to-[#237BFF]">
                Recommended
              </Badge>
            )}
          </div>
          <p className="text-base text-muted-foreground font-normal ">
            {description}
          </p>
        </div>
      </div>

      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
    </Button>
  );
};

export default function GetStarted({ onNext }) {
  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold leading-none mb-1.5 text-slate-900">
        Let's get started
      </h2>
      <p className="text-base text-muted-foreground leading-6 mb-4">
        How do you want to create your resume?
      </p>

      <div className="space-y-2 ">
        <OptionButton
          icon={FileText}
          title="Create resume manually"
          description="Fill in all the details yourself"
          iconColorClass="text-blue-500"
        />

        <div className="border-t pt-2 border-border">
          <OptionButton
            icon={Sparkles}
            title="Create with AI"
            description="Give an overview; AI does the rest."
            showBadge={true}
            onClick={() => onNext("LINKEDIN")}
          />
        </div>
      </div>
    </div>
  );
}
