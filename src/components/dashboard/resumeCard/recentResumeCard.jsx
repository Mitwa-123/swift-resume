import { Card, CardContent } from "@/components/ui/card";
import ResumePreview from "./ResumePreview";

export default function RecentResumeCard({ image }) {
  return (
    <Card className="hover:shadow-md transition">
      <CardContent>
        <ResumePreview image={image} />
        <div className="bg-muted/30 rounded-lg">
        </div>
      </CardContent>
    </Card>
  );
}
