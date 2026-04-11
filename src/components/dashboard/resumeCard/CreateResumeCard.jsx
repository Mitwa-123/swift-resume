import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CreateResumeCard() {
  return (
    <div className="relative z-10">
      <Card className=" h-57.5 shrink-0 rounded-xl border-2 border-blue-500 bg-gradient-to-b from-accent-foreground via-accent to-card shadow-lg flex flex-col items-center relative pt-0 px-0 ">
        <CardContent className="flex  justify-center mt-7">
          <Image
            src="/images/create-resume.svg"
            alt="Create resume"
            width={204}
            height={226}
            className="object-contain opacity-90"
          />

          <div className="absolute bottom-6 left-7 right-7 flex justify-center z-20">
            <Link href="/resumes/create-resume">
              <Button size="sm" variant="default">
                <Plus />
                Create resume
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
