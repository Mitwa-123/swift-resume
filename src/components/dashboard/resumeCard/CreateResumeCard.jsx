import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function CreateResumeCard() {
  return (
    <Card className="border-2 border-blue-500 rounded-xl flex items-center justify-center">
      <CardContent className="flex flex-col items-center justify-center h-[220px] gap-4">
        <div className="w-full h-[100px] bg-gray-100 rounded-md" />

        <Button className="bg-blue-600 hover:bg-blue-700 text-white gap-2">
          <Plus size={16} />
          Create resume
        </Button>
      </CardContent>
    </Card>
  );
}
