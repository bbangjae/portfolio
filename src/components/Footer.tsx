"use client";

import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
      <footer className="py-8 px-6 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            © {new Date().getFullYear()} YoungJae. All rights reserved.
          </p>

          <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-[#2962FF] transition-colors"
              aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </footer>
  );
}
