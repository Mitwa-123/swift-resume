"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Plus } from "lucide-react";
import SimpleSectionWrapper from "./SimpleSectionWrapper";

export default function CustomSection() {
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
        className="w-full flex items-center justify-start gap-1 border border-dashed border-border rounded-md p-4 cursor-pointer hover:bg-accent/50 transition-colors"
      >
        <Plus className="w-4 h-4" />
        <span className="text-sm font-medium leading-4">Add proficiency</span>
      </div>

      {items.map((item, index) => (
        <SimpleSectionWrapper
          key={index}
          form={form}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          onDelete={() => handleDelete(index)}
          primaryLabel="Title"
          primaryPlaceholder="Volunteering or Award"
          secondaryLabel="Subtitle"
          secondaryPlaceholder="Enter organization or location"
          descriptionLabel="Description"
        />
      ))}
    </div>
  );
}
