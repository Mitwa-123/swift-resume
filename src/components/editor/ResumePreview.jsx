import TabEditor from "./TabEditor";
import { useState } from "react";

export default function ResumePreview() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = (e) => {
    const scrollTop = e.currentTarget.scrollTop;
    setIsScrolled(scrollTop > 10);
  };

  return (
    <div
      onScroll={handleScroll}
      className="mx-auto flex flex-col gap-y-2.5 pt-1.5 px-4  sm:pt-5 lg:pb-6 h-full overflow-y-auto [&::-webkit-scrollbar]:hidden"
    >
      <TabEditor isScrolled={isScrolled} />

      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-245 bg-white overflow-hidden h-dvh">
          {/*content */}
        </div>
      </div>
      <div className="pointer-events-none" />
    </div>
  );
}
