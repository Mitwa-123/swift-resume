"use client";

import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import DialogHeader from "./DialogHeader";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge"; 

const INITIAL_SKILLS = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "Ruby",
  "C++",
  "PHP",
  "Swift",
  "Go",
  "Rust",
  "TypeScript",
  "Kotlin",
  "Dart",
  "Scala",
  "Perl",
  "Haskell",
  "Objective-C",
  "Elixir",
  "Lua",
  "Shell",
  "MATLAB",
  "R",
  "F#",
  "Clojure",
  "Visual Basic .NET",
  "Crystal",
  "COBOL",
  "Ada",
  "Assembly",
  "SQL",
];

export default function SkillsStep({ onBack, onNext }) {
  const [skills, setSkills] = useState(INITIAL_SKILLS);
  const [inputValue, setInputValue] = useState("");

  const handleAddSkill = () => {
    const trimmed = inputValue.trim();
    if (trimmed && !skills.includes(trimmed)) {
      setSkills([...skills, trimmed]);
      setInputValue("");
    }
  };

  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter((s) => s !== skillToRemove));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddSkill();
    }
  };
  return (
    <div className="relative p-6 flex flex-col items-center text-center">
      <DialogHeader
        title="What are your top skills?"
        description="Ensure the job title at the top of your resume matches your goals or target role."
        onBack={onBack}
      />

      <div className="flex w-full gap-2 items-center mt-4 mb-5">
        <Input
          type="text"
          placeholder="Enter multiple skills comma-separated"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button variant="secondary" size="icon-lg" onClick={handleAddSkill}>
          <Plus />
        </Button>
      </div>

      <div className="flex flex-wrap gap-x-2 gap-y-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="secondary">
            {skill}
            <button type="button" onClick={() => removeSkill(skill)}>
              <X className="h-3 w-3 text-muted-foreground" />
            </button>
          </Badge>
        ))}
      </div>

      <div className="flex justify-end items-center gap-2 w-full mt-4">
        <Button
          type="button"
          variant="outline"
          onClick={onBack}
          className="px-4"
        >
          Back
        </Button>
        <Button
          type="button"
          onClick={() => onNext("HIGHLIGHTS")}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
