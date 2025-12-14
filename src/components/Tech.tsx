"use client";

import { portfolioData } from "@/data/portfolio";
import Section from "./Section";

export default function Tech() {
  const { tech } = portfolioData;

  return (
      <Section id="Tech" title="Tech">
        <div className="space-y-12">
          {tech.categories.map((category, idx) => (
              <div key={idx}>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                  {category.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.split("/").map((item, itemIdx) => (
                      <span
                          key={itemIdx}
                          className="px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm md:text-base hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-[#2962FF] transition-colors cursor-default"
                      >
                  {item.trim()}
                </span>
                  ))}
                </div>
              </div>
          ))}
        </div>
      </Section>
  );
}