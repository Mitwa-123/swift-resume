import { Card, CardContent } from "@/components/ui/card";
import ResumePreview from "./ResumePreview";
import ResumeCardFooter from "./ResumeCardFooter";

export default function RecentResumeCard({ image }) {
  return (
    <Card className="hover:shadow-md transition">
      <CardContent>
        <ResumePreview image={image} />
        <div className=" bg-muted/30 rounded-lg p-4">
          <ResumeCardFooter />
        </div>
      </CardContent>
    </Card>
  );
}
