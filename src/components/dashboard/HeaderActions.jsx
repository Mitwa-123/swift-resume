"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Home, BadgeCheck, LogOut } from "lucide-react";
import Link from "next/link";

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
          <div className="cursor-pointer outline-none">
            <Avatar className="h-7.5 w-7.5">
              <AvatarImage src="/images/avatar.svg" alt="User" />
            </Avatar>
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-56 p-1">
          <div className="flex items-center gap-2.5 px-1 py-1.5">
            <Avatar className="h-8 w-8 bg-muted text-foreground flex items-center justify-center font-medium text-sm">
              <AvatarImage src="/images/avatar.svg" alt="User" />
            </Avatar>
            <div className="flex flex-col min-w-0">
              <span className="text-sm font-semibold text-foreground leading-none mb-1">
                Mitwa
              </span>
              <span className="text-xs text-muted-foreground truncate leading-none">
                mitwa.jnext@gmail.com
              </span>
            </div>
          </div>
          <DropdownMenuSeparator />

          <DropdownMenuItem className="cursor-pointer">
            <Link href="/resumes" className="flex items-center gap-2 w-full">
              <Home className="w-4 h-4" />
              <span>Dashboard</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem className="cursor-pointer">
            <Link
              href="/settings/account"
              className="flex items-center gap-2 w-full"
            >
              <BadgeCheck className="w-4 h-4" />
              <span>Account</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <Link href="/signin" className="flex items-center gap-2 w-full">
              <LogOut className="w-4 h-4" />
              <span>Sign out</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
