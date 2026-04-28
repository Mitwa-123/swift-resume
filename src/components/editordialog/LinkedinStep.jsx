import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import StepLayout from "./StepLayout";

export default function LinkedinStep({ onBack, onNext, onManual }) {
  return (
    <StepLayout
      title="Want to use your Linkedin profile?"
      description="Paste your LinkedIn profile URL below and our AI will use it to write your resume."
      onBack={onBack}
      buttons={
        <>
          <Button variant="outline" onClick={onManual}>
            Add manually
          </Button>
          <Button onClick={onNext}>Import profile</Button>
        </>
      }
    >
      <Input
        type="url"
        placeholder="Your LinkedIn profile URL"
      />
    </StepLayout>
  );
}
