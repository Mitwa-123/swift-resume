import Image from "next/image";

export default function ResumePreviewCard({ className = "" }) {
  return (
    <div className={`shrink-0`}>
      <Image
        src="/images/resume-cards.svg"
        alt="Resume preview"
        width={204}
        height={240}
        className="object-contain"
      />
    </div>
  );
}
