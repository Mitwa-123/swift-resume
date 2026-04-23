import Image from "next/image";
import { Badge } from "../ui/badge";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function TemplateCard({ image, title, tags }) {
  const router = useRouter();
  const handleUseTemplate = () => {
    const randomId = crypto.randomUUID();
    router.push(`/resumes/editor/${randomId}`);
  };
  return (
    <div className="flex flex-col group cursor-pointer">
      <div className="overflow-hidden rounded-lg border border-border  relative w-74.5 h-105.5 transition-all duration-300 hover:ring-2 hover:ring-base-primary hover:ring-offset-2 delay-200">
        <Image src={image} alt={title} fill className="object-cover"/>
        
        <div className="absolute inset-0 flex items-center justify-center bg-primary/10 opacity-0  transition-opacity duration-300 delay-150 group-hover:opacity-100">
          <Button onClick={handleUseTemplate} className="text-sm font-medium flex items-center px-3">
            <Plus />
            Use Template
          </Button>
        </div>
      </div>
      <h3 className="text-foreground text-base leading-6 font-semibold mt-3">
        {title}
      </h3>
      <div className="flex gap-1 mt-1.5 flex-wrap">
        {tags.map((tag, i) => (
          <Badge key={i} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}
