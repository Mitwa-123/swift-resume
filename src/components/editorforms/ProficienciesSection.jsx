"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Plus } from "lucide-react";
import SimpleSectionWrapper from "./SimpleSectionWrapper";

export default function ProficienciesSection() {
  const form = useForm({
    defaultValues: {
      primaryField: "",
      secondaryField: "",
    },
  });

  const [items, setItems] = useState([{}]);

  const handleAdd = () => {
    setItems((prev) => [...prev, {}]);
  };

  const handleDelete = (index) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      <div
        onClick={handleAdd}
        className="w-full flex items-center justify-start gap-1 border-2 border-dashed border-border rounded-md p-4 cursor-pointer hover:bg-accent/50 transition-colors"
      >
        <Plus className="w-4 h-4" />
        <span className="text-sm font-medium leading-4">Add proficiency</span>
      </div>

      {items.map((item, index) => (
        <SimpleSectionWrapper
          key={index}
          form={form}
          onAdd={handleAdd}
          onDelete={() => handleDelete(index)}
          addButtonText="Add proficiency"
          sectionLabel="Proficiency"
          primaryLabel="Title"
          primaryPlaceholder="AWS Certified Cloud Practitioner"
          secondaryLabel="Subtitle"
          secondaryPlaceholder="Amazon Web Services"
          descriptionLabel="Description"
        />
      ))}
    </div>
  );
}
