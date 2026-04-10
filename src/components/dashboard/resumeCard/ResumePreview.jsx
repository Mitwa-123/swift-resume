import Image from "next/image";
export default function ResumePreview() {
  return (
    <div className="flex justify-center pt-2 px-1.5 ">
      <Image
        src="/images/recent-resume-card.svg"
        width={262}
        height={154}
        alt="resume"
      />
    </div>
  );
}
