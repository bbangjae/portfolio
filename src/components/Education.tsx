"use client";

import { Star } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import Section from "./Section";

export default function Education() {
  const { education } = portfolioData;

  return (
      <Section id="education" title="Education" dark>
        <div className="space-y-8">
          {education.items.map((item, idx) => (
              <div
                  key={idx}
                  className="border-l-4 border-slate-200 dark:border-slate-700 pl-6 py-1 hover:border-[#2962FF] transition-colors"
              >
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                  {item.label}
                </h3>

                <div className="flex flex-wrap items-center gap-2 text-slate-500 dark:text-slate-400 mb-2">
                  <span>{item.detail}</span>

                  {item.stars && (
                      <div className="flex items-center text-yellow-400">
                        {Array.from({ length: item.stars }).map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                  )}

                  {item.suffix && <span>{item.suffix}</span>}
                </div>

                {item.description && (
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                )}
              </div>
          ))}
        </div>
      </Section>
  );
}