"use client";

import { useState } from "react";
import Image from "next/image";
import ResumePreview from "@/components/editor/ResumePreview";
import EditorSidebar from "@/components/editor/EditorSidebar";
import DialogModal from "@/components/editordialog/DialogModal";

export default function Layout() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="fixed flex h-screen w-screen ">
      <Image
        src="/images/editor-bg.svg"
        alt="Editor Background"
        fill
        className="object-cover -z-10"
        priority
      />

      <div className="flex w-full h-full ">
        <div className="flex-1 min-w-0 ">
          <ResumePreview />
        </div>
        <EditorSidebar />
      </div>

      <DialogModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
