"use client";

import HistoryStep from "./HistoryStep";

export default function JobHistoryStep({ onNext, onBack }) {
  const jobs = [
    { title: "Product Designer", subtitle: "Acme Inc." },
    { title: "Senior Product Designer", subtitle: "Acme Inc." },
  ];

  return (
    <HistoryStep
      title="Tell us about your job history"
      description="Share your work history for a better AI-written resume."
      items={jobs}
      labels={{ title: "Job title", subtitle: "Company name" }}
      placeholders={{
        title: "e.g. Frontend Developer",
        subtitle: "e.g. Google",
      }}
      addButtonText="Add another job"
      onBack={onBack}
      onNext={onNext}
    />
  );
}
