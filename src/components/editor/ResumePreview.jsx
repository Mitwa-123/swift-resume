"use client";

import { useEffect, useRef, useState } from "react";
import TabEditor from "./TabEditor";

export default function ResumePreview() {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [isScrolled, setIsScrolled] = useState(false);

  const BASE_WIDTH = 595.28;
  const BASE_HEIGHT = 841.89;

  useEffect(() => {
    const updateScale = () => {
      if (!containerRef.current) return;

      const width = containerRef.current.offsetWidth;
      let newScale = 1;

      if (width < BASE_WIDTH) {
        newScale = width / BASE_WIDTH;
      } else if (width > 900) {
        const growth = Math.min((width - 900) / 500, 1);
        newScale = 1 + growth * 0.67;
      }

      setScale(newScale);
    };

    const observer = new ResizeObserver(updateScale);
    if (containerRef.current) observer.observe(containerRef.current);

    updateScale();
    return () => observer.disconnect();
  }, []);

  return (
    <div
      onScroll={(e) => setIsScrolled(e.target.scrollTop > 20)}
      className="flex flex-col  pt-2 px-4 h-full overflow-y-auto relative scroll-smooth no-scrollbar"
    >

      <div className="flex justify-center w-full sticky top-0 z-20">
        <div
          style={{ width: `${BASE_WIDTH * scale}px`, minWidth: "fit-content" }}
        >
          <TabEditor isScrolled={isScrolled} />
        </div>
      </div>

      <div ref={containerRef} className="flex justify-center w-full">
        <div
          className="relative origin-top transition-transform duration-75"
          style={{
            transform: `scale(${scale})`,
            width: BASE_WIDTH,
            height: BASE_HEIGHT * scale,
          }}
        >
          <div
            className="bg-white rounded"
            style={{
              width: BASE_WIDTH,
              minHeight: BASE_HEIGHT,
              padding: "30px",
            }}
          >
            {/* Resume Content */}
          </div>
        </div>
      </div>
    </div>
  );
}
