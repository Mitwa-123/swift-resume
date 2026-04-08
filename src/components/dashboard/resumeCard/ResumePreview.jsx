import Image from "next/image";
export default function ResumePreview() {
  return (
    <Image
      src="/images/recent-resume-card.svg"
      alt="resume preview"
      width={262}
      height={154}
      className="w-full max-w-65.5 mx-auto "
    />
  );
}
