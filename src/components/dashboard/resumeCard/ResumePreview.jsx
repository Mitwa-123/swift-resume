"use client";

import Image from "next/image";
import { useState } from "react";

import {
  MoreVertical,
  Pencil,
  Copy,
  Trash2,
  SquarePen,
  Check,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Input } from "@/components/ui/input";

export default function ResumePreview({ resume, onDuplicate }) {
  const [resumeName, setResumeName] = useState("Untitled resume");
  const [tempName, setTempName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [open, setOpen] = useState(false);
  const handleEdit = () => {
    setTempName(resumeName);
    setIsEditing(true);
  };
  const handleSave = () => {
    if (!tempName.trim()) return;
    setResumeName(tempName);
    setIsEditing(false);
    setOpen(false);
  };

  return (
    <>
      <div className="flex justify-center px-1.5 pt-2.5">
        <Image
          src="/images/recent-resume-card.svg"
          width={262}
          height={154}
          alt="resume"
          className="border border-border rounded-sm shadow-[0_1px_2px_0_rgba(0,0,0,0.04)] w-full lg:w-auto"
        />
      </div>
      <div className="flex items-center justify-between p-4">
        <div>
          <h3 className="text-sm font-semibold text-card-foreground leading-5 mb-0.5">
            {resumeName}
          </h3>
          <p className="text-xs leading-4 text-muted-foreground">
            Edited yesterday
          </p>
        </div>

        <DropdownMenu
          open={open}
          onOpenChange={(value) => {
            setOpen(value);
            if (!value) {
              setIsEditing(false);
            }
          }}
        >
          <DropdownMenuTrigger>
            <div
              role="button"
              tabIndex={0}
              className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg border border-border shadow-sm transition hover:bg-accent"
            >
              <MoreVertical className="h-4 w-4" />
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            sideOffset={8}
            className="w-56 overflow-hidden rounded-xl p-1"
          >
            <div>
              {!isEditing ? (
                <div className="flex items-center justify-between">
                  <p className="py-1 px-2 text-sm font-semibold leading-5">
                    {resumeName}
                  </p>

                  <div
                    role="button"
                    tabIndex={0}
                    onClick={handleEdit}
                    className="cursor-pointer p-2 text-muted-foreground transition hover:text-foreground"
                  >
                    <Pencil className="h-4 w-4" />
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-1">
                  <Input
                    autoFocus
                    value={tempName}
                    onChange={(e) => setTempName(e.target.value)}
                    onKeyDown={(e) => {
                      e.stopPropagation();
                      if (e.key === "Enter") {
                        handleSave();
                      }
                    }}
                    className="h-8"
                  />
                  <div role="button" tabIndex={0} onClick={handleSave}>
                    <Check className="h-4 w-4" />
                  </div>
                </div>
              )}
            </div>
            <DropdownMenuSeparator />

            <DropdownMenuItem className="flex items-center justify-between px-2 py-1.5">
              <div className="flex items-center gap-2">
                <SquarePen className="h-4 w-4" />
                <span className="font-normal text-sm leading-5 text-card-foreground">
                  Edit resume
                </span>
              </div>

              <span className="text-xs font-normal text-foreground">⌘E</span>
            </DropdownMenuItem>

            <DropdownMenuItem className="flex items-center justify-between px-2 py-1.5">
              <div className="flex items-center gap-2">
                <Copy className="h-4 w-4" />
                <span className="font-normal text-sm leading-5 text-card-foreground">
                  Duplicate
                </span>
              </div>

              <span className="text-xs font-normal text-foreground">⌘D</span>
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem className="px-2 py-1.5 text-red-500">
              <div className="flex items-center gap-2">
                <Trash2 className="h-4 w-4" />
                <span>Delete</span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}
