"use client";

import { portfolioData } from "@/data/portfolio";
import Section from "./Section";

export default function About() {
  const { about } = portfolioData;

  return (
    <Section id="about" title="About" dark>
      <div className="space-y-6 text-xl font-light leading-relaxed">
        {about.paragraphs.map((para, idx) => (
          <p key={idx} dangerouslySetInnerHTML={{ __html: para }} />
        ))}
      </div>
    </Section>
  );
}
