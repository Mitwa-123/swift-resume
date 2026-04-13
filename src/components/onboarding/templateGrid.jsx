import TemplateCard from "./templateCard";

export default function TemplateGrid({ templates }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {templates.map((item) => (
        <TemplateCard key={item.id} {...item} />
      ))}
    </div>
  );
}
