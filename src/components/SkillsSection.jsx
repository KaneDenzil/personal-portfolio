import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Mobile
  { name: "React Native", category: "mobile" },
  { name: "Expo", category: "mobile" },
  { name: "Swift", category: "mobile" },
  { name: "SwiftUI", category: "mobile" },
  { name: "UIKit", category: "mobile" },
  { name: "Kotlin", category: "mobile" },
  { name: "Flutter", category: "mobile" },
  { name: "CoreBluetooth", category: "mobile" },

  // Frontend
  { name: "TypeScript", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "TanStack Query", category: "frontend" },
  { name: "Zustand", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },

  // Backend
  { name: "Node.js", category: "backend" },
  { name: "REST APIs", category: "backend" },
  { name: "GraphQL", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "SQL", category: "backend" },

  // Cloud & AI
  { name: "AWS Lambda", category: "cloud" },
  { name: "API Gateway", category: "cloud" },
  { name: "RDS", category: "cloud" },
  { name: "Cognito", category: "cloud" },
  { name: "Secrets Manager", category: "cloud" },
  { name: "Amazon Bedrock", category: "cloud" },
  { name: "Transcribe & Polly", category: "cloud" },
  { name: "Ollama", category: "cloud" },
  { name: "Prompt Engineering", category: "cloud" },

  // Tools
  { name: "Claude Code", category: "tools" },
  { name: "Cursor", category: "tools" },
  { name: "GitHub Copilot", category: "tools" },
  { name: "GitHub Actions", category: "tools" },
  { name: "EAS Build & Update", category: "tools" },
  { name: "Fastlane", category: "tools" },
  { name: "Bitrise", category: "tools" },
  { name: "Turborepo", category: "tools" },
  { name: "Jest & RNTL", category: "tools" },
  { name: "Datadog", category: "tools" },
  { name: "Sentry", category: "tools" },
  { name: "Jira", category: "tools" },
];

const categories = ["all", "mobile", "frontend", "backend", "cloud", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category === "cloud" ? "Cloud & AI" : category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card px-4 py-3 rounded-lg shadow-xs card-hover"
            >
              <h3 className="font-medium text-sm md:text-base text-left">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
