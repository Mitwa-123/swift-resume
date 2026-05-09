"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SectionFormWrapper from "./SectionFormWrapper";
import {
  Plus
} from "lucide-react";

export default function ExperienceSection() {
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
        className="w-full flex items-center gap-1 border-2 border-dashed border-border rounded-md p-4 cursor-pointer"
      >
        <Plus className="w-4 h-4" />
        <span className="text-sm font-medium">Add experience or job</span>
      </div>
      {items.map((item, index) => (
        <SectionFormWrapper
          key={index}
          form={form}
          onAdd={handleAdd}
          onDelete={() => handleDelete(index)}
          addButtonText="Add experience or job"
          sectionLabel="Your role"
          primaryLabel="Job title"
          primaryPlaceholder="Software Engineer"
          secondaryLabel="Sub title"
          secondaryPlaceholder="Tech Innovators Inc, San Francisco, CA"
          switchLabel="Mark as internship"
          descriptionLabel="Key accomplishments"
        />
      ))}
    </div>
  );
}
