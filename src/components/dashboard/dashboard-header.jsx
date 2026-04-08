"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export default function DashboardHeader() {
  return (
    <div className="w-full border-b border-slate-200">
      <div className="max-w-325 mx-auto px-3">
        <header className="flex items-center justify-between py-2">
          <div className="flex items-center gap-3.5">
            <Link href="/dashboard">
              <Image
                src="/images/swift-logo.svg"
                alt="Swift Logo"
                width={107}
                height={19}
                priority
              />
            </Link>

            <div className="hidden md:block md:h-4 w-px bg-slate-200" />

            <nav className="hidden md:flex items-center text-sm">
              <Breadcrumb>
                <BreadcrumbList className="flex items-center gap-1.5 leading-none">
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      href="/dashboard"
                      className="flex items-center gap-1 font-medium text-xs leading-none"
                    >
                      <Image
                        src="/images/home-icon.svg"
                        alt="home"
                        className="h-3.5"
                        width={14}
                        height={14}
                      />
                      Dashboard
                    </BreadcrumbLink>
                  </BreadcrumbItem>

                  <BreadcrumbSeparator />

                  <BreadcrumbItem>
                    <BreadcrumbLink
                      href="/resumes"
                      className="font-medium text-xs leading-none"
                    >
                      Resumes
                    </BreadcrumbLink>
                  </BreadcrumbItem>

                  <BreadcrumbSeparator />

                  <BreadcrumbItem>
                    <div className="font-medium text-xs leading-none">
                      Untitled resume
                    </div>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger >
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
              <DropdownMenuTrigger >
                <div className="cursor-pointer">
                  <Avatar className="h-7.5 w-7.5">
                    <AvatarImage src="/images/avatar.svg" alt="User" />
                  </Avatar>
                </div>
              </DropdownMenuTrigger>
            </DropdownMenu>
          </div>
        </header>
      </div>
    </div>
  );
}
