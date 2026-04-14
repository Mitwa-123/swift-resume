import Image from "next/image";
import { Badge } from "../ui/badge";

export default function TemplateCard({ image, title, tags }) {
  return (
    <div className="flex flex-col">
      <div className="overflow-hidden rounded-lg border border-border hover:shadow-md transition ">
        <div className="relative w-74.5 h-105.5">
          <Image src={image} alt={title} fill className="object-cover" />
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
