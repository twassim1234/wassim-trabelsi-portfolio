import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Hard Skills
  { name: "React", category: "Hard Skills" },
  { name: "React Native", category: "Hard Skills" },
  { name: "JavaScript", category: "Hard Skills" },
  { name: "C++", category: "Hard Skills" },
  { name: "Html/CSS", category: "Hard Skills" },
  { name: "Tailwind CSS", category: "Hard Skills" },
  { name: "Java", category: "Hard Skills" },
  { name: "Next.js", category: "Hard Skills" },
  { name: "SQL", category: "Hard Skills" },
  { name: "MongoDB", category: "Hard Skills" },
  { name: "Python", category: "Hard Skills" },
  { name: "Linux", category: "Hard Skills" },


  // Tools
  { name: "Git/GitHub", category: "Tools" },
  { name: "Docker", category: "Tools" },
  { name: "Ubuntu", category: "Tools" },
  { name: "VS Code", category: "Tools" },
  { name: "AWS", category: "Tools" },
  { name: "Microsoft Azure", category: "Tools" },
  { name: "Jira", category: "Tools" },
  { name: "Microsoft Office", category: "Tools" },

  // Soft Skills
  { name: "Team Work", category: "Soft Skills" },
  { name: "Fast Learner", category: "Soft Skills" },
  { name: "Communication", category: "Soft Skills" },
  { name: "Problem Solving", category: "Soft Skills" },
  { name: "Adaptability", category: "Soft Skills" },
  { name: "Time Management", category: "Soft Skills" },
  { name: "Critical Thinking", category: "Soft Skills" },

  // Language
  { name: "Arabic : Native Speaker", category: "Language" },
  { name: "English : Proficient ", category: "Language" },
  { name: "French : Intermediate ", category: "Language" },
  { name: "Italian : Beginner", category: "Language" },
];

const categories = ["Hard Skills", "Tools", "Soft Skills","Language"];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {categories.map((category) => {
          const filteredSkills = skills.filter(
            (skill) => skill.category === category
          );

          return (
            <div key={category} className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-center">
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                {filteredSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-card py-6 px-4 rounded-lg shadow-xs card-hover flex flex-col items-center justify-center text-center"
                  >
                    <h4 className="font-semibold text-lg">{skill.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
