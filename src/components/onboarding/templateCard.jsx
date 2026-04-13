import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function TemplateCard({ image, title, tags }) {
  return (
    <Card className="w-full overflow-hidden hover:shadow-md transition rounded-xl">
      {/* Image */}
      <div className="relative w-full aspect-[3/4]">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="p-3">
        <h3 className="text-sm font-medium">{title}</h3>

        <div className="flex gap-2 mt-1 flex-wrap">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs px-2 py-0.5 bg-muted rounded-md text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
}
