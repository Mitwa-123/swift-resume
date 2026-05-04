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
        title: "",
        subtitle: "",
      }}
      addButtonText="Add another Job"
      onBack={onBack}
      onNext={onNext}
    />
  );
}
