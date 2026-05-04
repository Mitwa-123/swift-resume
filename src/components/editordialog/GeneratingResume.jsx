"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Progress } from "@/components/ui/progress"; 
import Text from "../Text";

export default function GeneratingResume({ onFinish, onBack }) {
const [progress, setProgress] = useState(40);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) {
//           clearInterval(interval);
//           return 100;
//         }
//         return prev + 5;
//       });
//     }, 150);

//     const timeout = setTimeout(() => {
//       onFinish();
//     }, 7000);

//     return () => {
//       clearInterval(interval);
//       clearTimeout(timeout);
//     };
//   }, [onFinish]);

  return (
    <div className="flex flex-col items-center justify-center p-4 sm:p-6 text-center gap-4">
      <div className=" flex justify-center items-center border border-border rounded-xl ">
        <Image
          src="/images/dialog-resume-card.svg"
          alt="Generating Resume"
          width={377}
          height={198}
          className=" object-contain"
        />
      </div>

      <div className="space-y-1.5">
        <Text variant="h2" weight="semibold">
          We’re creating your resume!
        </Text>
        <Text variant="h3" weight="normal" color="mutes">
          Please wait, we’re generating your resume.
        </Text>
      </div>

      <div className="w-full mx-auto">
        <Progress value={progress} className="h-2.5  w-full" />
      </div>
    </div>
  );
}
