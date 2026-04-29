import VoiceRecordingStep from "./VoiceRecordingStep";

export default function ProfessionalHighlights({ onBack, onNext }) {
  return (
    <VoiceRecordingStep
      title="Any professional highlights?"
      description="Share your achievements, awards, and standout results."
      onBack={onBack}
      onNext={onNext}
      nextStepName="CAREER_GOALS"
      skipStepName="CAREER_GOALS"
    />
  );
}
