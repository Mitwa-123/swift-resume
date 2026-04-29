import VoiceRecordingStep from "./VoiceRecordingStep";

export default function CareerGoals({ onBack, onNext }) {
  return (
    <VoiceRecordingStep
      title="What are your career goals?"
      description="Seeking skill growth, challenging projects, or a great team? Share your goals."
      onBack={onBack}
      onNext={onNext}
      nextStepName="FINISH"
      skipStepName="FINISH"
    />
  );
}
