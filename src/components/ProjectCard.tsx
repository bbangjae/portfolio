"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Project } from "@/types/portfolio";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={cn(
        "relative overflow-hidden rounded-xl shadow-lg mb-6 break-inside-avoid group bg-slate-900",
      )}
      style={{ backgroundColor: project.backgroundColor || "#000" }}
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <img
          src={project.backgroundImage}
          alt={project.title}
          className={`w-full h-full object-cover transition-opacity duration-300 ${isHovered ? "opacity-0" : "opacity-100"
            }`}
        />

        <div
          className={`absolute inset-0 bg-black/10 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"
            }`}
        >
          {isHovered && (
            <img
              src={project.backgroundImage}
              alt={`${project.title} demo`}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col p-6 z-20 overflow-hidden">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col h-full"
        >
          <h3 className={cn(
            "font-bold text-white mb-1 text-center",
            project.featured ? "text-4xl md:text-5xl mb-4" : "text-3xl"
          )}>
            {project.title}
          </h3>

          <div className="flex-1 overflow-y-auto mb-4 pr-2 scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800">
            <p className={cn(
              "text-slate-200 leading-relaxed mb-4 text-center",
              project.featured ? "text-lg md:text-xl" : "text-base"
            )}>
              {project.description}
            </p>

            {project.implementation && (
              <div className="mt-4">
                <h4 className={cn(
                  "font-semibold text-slate-200 mb-2 flex items-center gap-2",
                  project.featured ? "text-base md:text-lg" : "text-sm"
                )}>
                  ⚡ 구현 내용
                </h4>
                <ul className="space-y-2 text-left bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
                  {project.implementation.map((item, idx) => (
                    <li key={idx} className={cn(
                      "flex items-start text-slate-300",
                      project.featured ? "text-base" : "text-sm"
                    )}>
                      <span className="mr-2 text-blue-400 mt-1.5 text-[0.6rem]">●</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="flex gap-3 justify-center mt-auto">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#2962FF] text-white rounded-full text-sm font-medium hover:bg-[#1E40AF] transition-colors"
            >
              View Project
            </a>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white text-slate-900 rounded-full text-sm font-medium hover:bg-slate-100 transition-colors"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
