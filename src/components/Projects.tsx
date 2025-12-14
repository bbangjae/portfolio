"use client";

import { portfolioData } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";
import Section from "./Section";

export default function Projects() {
  const { projects } = portfolioData;

  return (
      <Section id="projects" title="Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.length > 0 && (
              <div className="md:col-span-2">
                <ProjectCard project={projects[0]} />
              </div>
          )}

          {projects.slice(1).map((project, idx) => (
              <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </Section>
  );
}