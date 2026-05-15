"use client";

import React from "react";
import Image from "next/image";
import { Download, ExternalLink, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DownloadResumeStep({  resumeUrl = "#" }) {
  const handleOpenNewTab = () => {
    window.open(resumeUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className=" w-full lg:w-179.5 min-h-117 mx-auto flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
        <div className="px-0 md:p-6 flex flex-col justify-normal md:justify-center text-center items-center md:text-start md:items-start">
          <img
            src="/images/swift-logo.svg"
            alt="Swift Resume"
            className="hidden md:block h-6 w-fit mb-12"
          />

          <img
            src="/images/swiftresume-onlyicon.svg"
            alt="Swift Resume"
            className="block md:hidden w-fit mb-8"
          />
          <div className="space-y-2 mb-12">
            <h1 className="text-3xl leading-9 font-extrabold">
              Download your resume
            </h1>
            <p className="text-xs text-slate-500 leading-4 font-medium">
              Create, edit, and download unlimited resumes effortlessly with our
              intuitive, user-friendly resume-building platform.
            </p>
          </div>

          <div className="space-y-2">
            <Button className="w-full">
              <Download className="size-4" />
              Download PDF
            </Button>

            <Button
              variant="outline"
              onClick={handleOpenNewTab}
              className="w-full"
            >
              <ExternalLink className="size-4" />
              Open in new tab
            </Button>
          </div>
        </div>

        <div className="hidden md:flex flex-col items-center justify-center bg-slate-50 rounded-[14px] p-4.75 ">
          <div className="relative w-full">
            <Image
              src="/images/verify-card.svg"
              alt="Preview"
              width={308.55}
              height={257.31}
              className="w-full"
            />
          </div>
          <p className="mt-3 text-sm font-medium text-center">
            Your resume is ready to download!
          </p>
        </div>
      </div>
    </div>
  );
}
