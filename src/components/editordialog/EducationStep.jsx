"use client";

import HistoryStep from "./HistoryStep";

export default function EducationStep({ onNext, onBack }) {
  const education = [
    { title: "Computer Science", subtitle: "Stanford University" },
    { title: "Business Studies", subtitle: "My college" },
  ];

  return (
    <HistoryStep
      title="Tell us about your education"
      description="Share your education for a better AI-written resume."
      items={education}
      labels={{ title: "Institution", subtitle: "Field of study" }}
    placeholders={{
        title: "e.g. Computer Science",
        subtitle: "e.g. University of Mumbai",
      }}
      addButtonText="Add another education"
      onBack={onBack}
      onNext={onNext}
    />
  );
}
