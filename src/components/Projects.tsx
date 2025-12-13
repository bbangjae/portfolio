import { projects } from "@/src/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              프로젝트
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              제가 진행한 프로젝트들을 소개합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
  );
}