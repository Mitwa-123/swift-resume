"use client";

import { useState, useRef, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { Sparkles, Plus, GripVertical, SquarePen, X } from "lucide-react";

export default function SkillsSection() {
  const [skills, setSkills] = useState([
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "BigQuery",
    "Supabase",
  ]);

  const [editingIndex, setEditingIndex] = useState(null);
  const [editValue, setEditValue] = useState("");
  const inputRef = useRef(null);

  const form = useForm({
    defaultValues: { skill: "" },
  });

  const { control, handleSubmit, reset } = form;

  const handleAddSkill = (data) => {
    const trimmedSkill = data.skill.trim();
    if (!trimmedSkill) return;
    setSkills((prev) => [...prev, trimmedSkill]);
    reset({ skill: "" });
  };

  const handleSave = (index) => {
    if (editValue.trim() !== "") {
      const updatedSkills = [...skills];
      updatedSkills[index] = editValue.trim();
      setSkills(updatedSkills);
    }
    setEditingIndex(null);
  };

  useEffect(() => {
    if (editingIndex !== null && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editingIndex]);

  return (
    <div>
      <form
        onSubmit={handleSubmit(handleAddSkill)}
        className="flex items-start gap-2 mb-5"
      >
        <div className="relative flex-1">
          <Controller
            name="skill"
            control={control}
            rules={{ required: "Skill is required" }}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="skill" className="sr-only">
                  Enter your skills
                </FieldLabel>

                <div className="relative flex items-center">
                  <Input
                    {...field}
                    id="skill"
                    placeholder="Enter your skills"
                  />
                  <Button
                    type="button"
                    variant="secondary"
                    size="sm"
                    className="absolute right-3"
                  >
                    <Sparkles className="size-4 text-yellow-500" />
                    AI suggest
                  </Button>
                </div>
                {fieldState.error && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
        </div>

        <Button type="submit" size="icon-lg">
          <Plus className="size-5" />
        </Button>
      </form>

      <div className="space-y-2.5">
        {skills.map((skill, index) => (
          <div
            key={`${index}`}
            className="flex items-center justify-between rounded-sm border border-border bg-secondary p-3"
          >
            <div className="flex items-center gap-1 flex-1">
              <GripVertical className="size-4.5 text-muted-foreground shrink-0 cursor-grab" />

              {editingIndex === index ? (
                <input
                  ref={inputRef}
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  onBlur={() => handleSave(index)}
                  onKeyDown={(e) => e.key === "Enter" && handleSave(index)}
                  className="w-full text-sm font-semibold px-2 py-1 rounded-sm border border-input bg-base-white focus:outline-none focus:ring-1 focus:ring-base-primary"
                />
              ) : (
                <span className="text-sm font-semibold leading-4">{skill}</span>
              )}
            </div>

            <div className="flex items-center gap-2 pl-2">
              <button
                type="button"
                onClick={() => {
                  setEditingIndex(index);
                  setEditValue(skill);
                }}
                className="text-muted-foreground"
              >
                <SquarePen className="size-3.5 cursor-pointer" />
              </button>
              <button
                type="button"
                onClick={() => setSkills(skills.filter((_, i) => i !== index))}
                className=" text-muted-foreground"
              >
                <X className="size-3.5 cursor-pointer" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
