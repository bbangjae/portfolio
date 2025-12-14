"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  const { hero } = portfolioData;

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 pb-12 px-6 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800"
    >
      <div className="max-w-6xl w-full text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col items-center justify-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight flex items-center gap-3">
              {hero.intro.text}
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-600 dark:text-slate-300">
              {hero.subtitle}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2962FF] to-[#0039CB] inline-block ml-2">
                {hero.intro.link?.label}
              </span>
              입니다.
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a
              href="https://github.com/bbangjae"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium hover:opacity-90 transition-opacity"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              GitHub
            </a>

            <a
              href="https://a-steady-byun.tistory.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white font-medium hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
              Tech Blog
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-12 px-4"
        >
          {hero.achievements.map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center px-6 py-3 rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 text-sm sm:text-base text-slate-600 dark:text-slate-300"
            >
              <span className="font-bold text-[#2962FF] mr-2">
                {item.label}
              </span>
              <span>{item.suffix}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
