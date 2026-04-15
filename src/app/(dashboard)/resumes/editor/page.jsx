import Container from "@/components/container/container";
import ResumeLayout from "@/components/editor/ResumeLayout";
import Image from "next/image";


export default function Page() {
  return (
    <>
      <div className="relative flex-auto flex overflow-hidden">
        <Image
          src="/images/editor-bg.svg"
          alt="Editor Background"
          width={1000}
          height={1000}
          className="absolute inset-0 w-full h-full object-cover -z-10"
          priority
        />
        <ResumeLayout />
      </div>
    </>
  );
}