"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export default function HeaderActions() {
  return (
    <div className="flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex items-center gap-1 cursor-pointer">
            <img
              src="/images/flag.svg"
              alt="Language"
              className="w-4 h-4 rounded-full"
            />
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          <DropdownMenuItem>English</DropdownMenuItem>
          <DropdownMenuItem>Hindi</DropdownMenuItem>
          <DropdownMenuItem>Gujarati</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="cursor-pointer">
            <Avatar className="h-7.5 w-7.5">
              <AvatarImage src="/images/avatar.svg" alt="User" />
            </Avatar>
          </div>
        </DropdownMenuTrigger>
      </DropdownMenu>
    </div>
  );
}
