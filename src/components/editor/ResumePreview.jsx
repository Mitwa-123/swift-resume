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

      <div className="relative flex justify-center items-start flex-1">
        <div className="space-y-5 absolute top-0 origin-top scale-[1.68]">
          <div className="  flex w-148.75 h-dvh bg-white relative overflow-hidden border border-black/5 rounded "></div>
        </div>
        <div className="pointer-events-none" />
      </div>
    </div>
  );
}
