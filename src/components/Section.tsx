"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export default function Section({ id, title, children, className, dark = false }: SectionProps) {
  return (
      <section
          id={id}
          className={cn(
              "py-24 px-6 relative overflow-hidden",
              dark
                  ? "bg-slate-50 dark:bg-slate-800/50"
                  : "bg-white dark:bg-slate-900",
              className
          )}
      >
        <div className="max-w-5xl mx-auto">
          {title && (
              <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-5xl font-bold mb-16 text-slate-800 dark:text-slate-100"
              >
                {title}
                <span className="text-[#2962FF]">_</span>
              </motion.h2>
          )}

          <div className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {children}
          </div>
        </div>
      </section>
  );
}
