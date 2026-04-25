"use client";

import TabEditor from "./TabEditor";
import { useState, useEffect } from "react";

export default function ResumePreview() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [width, setWidth] = useState(595);

  const handleScroll = (e) => {
    const scrollTop = e.currentTarget.scrollTop;
    setIsScrolled(scrollTop > 10);
  };

  useEffect(() => {
    const handleResize = () => {
      const containerWidth = window.innerWidth - 32;

      if (containerWidth <= 1268) {
        setWidth(595);
      } else {
        setWidth(Math.min(1100, containerWidth * 0.7));
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      onScroll={handleScroll}
      className="mx-auto flex flex-col gap-y-2.5 pt-1.5 px-4 sm:pt-5 lg:pb-6 h-full overflow-y-auto [&::-webkit-scrollbar]:hidden"
    >
      <TabEditor isScrolled={isScrolled} />

      <div className="relative flex justify-center items-start w-full">
        <div
          className="bg-white overflow-hidden h-dvh transition-all duration-200"
          style={{ width: `${width}px` }}
        >
          {/* content */}
        </div>
      </div>

      <div className="pointer-events-none" />
    </div>
  );
}
