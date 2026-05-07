"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, FileText, Sparkles } from "lucide-react";
import Text from "../Text";

const OptionButton = ({
  icon: Icon,
  title,
  description,
  onClick,
  showBadge,
  iconColorClass = "text-muted-foreground",
}) => {
  return (
    <Button
      variant="outline"
      className="w-full h-auto flex justify-between py-2 sm:py-3 px-0 sm:px-2 shadow-none border-none group hover:bg-base-accent transition-all"
      onClick={onClick}
    >
      <div className="flex items-center gap-1 sm:gap-3">
        <div className="w-8 h-8 flex items-center justify-center bg-base-accent rounded-lg">
          <Icon className={`w-5 h-5 ${iconColorClass}`} />
        </div>

        <div className="text-left">
          <div className="flex items-center gap-2 mb-1 sm:mb-2">
            <Text variant="h1" weight="medium">{title}</Text>
            {showBadge && (
              <Badge className="text-[10px] sm:text-xs border-none font-medium leading-4 text-base-white bg-linear-to-b from-primary-purple to-light-blue">
                Recommended
              </Badge>
            )}
          </div>
          <Text variant="h1" color="muted" weight="normal">
            {description}
          </Text>
        </div>
      </div>

      <ChevronRight className="size-3 sm:size-4 text-muted-foreground" />
    </Button>
  );
};

export default function GetStarted({ onNext }) {
  return (
    <div className="p-3 sm:p-6">
      <Text variant="h2" weight="semibold" className="mb-0.5 sm:mb-1.5">
        Let's get started
      </Text>
      <Text variant="h3" color="muted" className="mb-2 sm:mb-4">
        How do you want to create your resume?
      </Text>

      <div className="space-y-2 ">
        <OptionButton
          icon={FileText}
          title="Create resume manually"
          description="Fill in all the details yourself"
          iconColorClass="text-blue-500"
        />

        <div className="border-t pt-2">
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
