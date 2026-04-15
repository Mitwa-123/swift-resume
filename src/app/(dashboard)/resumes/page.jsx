import Container from "@/components/container/container";
import ResumeTabs from "@/components/dashboard/createResume/ResumeTabs";
import ResumeContainer from "@/components/dashboard/resumeCard/ResumeContainer";

export default function CreateResumePage() {
  return (
    <>
    <div className="w-full">
          <div className="w-full border-b">
            <Container>
              <ResumeTabs />
            </Container>
          </div>
        </div>
    
      <ResumeContainer />
      
    </>
  );
}