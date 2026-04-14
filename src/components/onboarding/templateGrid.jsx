import TemplateCard from "./templateCard";

export default function TemplateGrid({ templates }) {
  return (
    <div className="py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-240">
        {templates.map((item) => (
          <TemplateCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
