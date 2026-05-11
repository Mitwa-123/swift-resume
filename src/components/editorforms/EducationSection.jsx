"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Plus } from "lucide-react";
import SectionFormWrapper from "./SectionFormWrapper";

export default function EducationSection() {
  const form = useForm({
    defaultValues: {
      primaryField: "",
      secondaryField: "",
    },
  });

  const [items, setItems] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
  const handleAdd = () => {
    setItems((prev) => {
      const updated = [...prev, {}];

      setOpenIndex(updated.length - 1);

      return updated;
    });
  };

  const handleDelete = (index) => {
    setItems((prev) => prev.filter((_, i) => i !== index));

    if (openIndex === index) {
      setOpenIndex(null);
    }
  };

  return (
    <div className="space-y-6">
      <div
        onClick={handleAdd}
        className="w-full flex items-center gap-1 border-2 border-dashed border-border rounded-md p-4 cursor-pointer"
      >
        <Plus className="w-4 h-4" />
        <span className="text-sm font-medium">Add education</span>
      </div>

      {items.map((item, index) => (
        <SectionFormWrapper
          key={index}
          form={form}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          onDelete={() => handleDelete(index)}
          sectionLabel="Your study"
          primaryLabel="Field of study"
          primaryPlaceholder="Bachelor of Science in Computer Science"
          secondaryLabel="Institution"
          secondaryPlaceholder="University of California, Berkeley"
          switchLabel="Currently studying here"
          descriptionLabel="Description"
        />
      ))}
    </div>
  );
}
