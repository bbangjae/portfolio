"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github } from "lucide-react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navData = portfolioData.navigation;

  return (
      <nav
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
              scrolled
                  ? "bg-white/80 backdrop-blur-md shadow-sm dark:bg-slate-900/80"
                  : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            {navData.logo}
            <span className="text-[#2962FF]">{navData.logoAccent}</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navData.links.map((link) => (
                <a
                    key={link.label || link.href}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className={`text-slate-600 hover:text-[#2962FF] font-medium transition-colors ${
                        link.noUnderline ? "" : "hover:underline underline-offset-4"
                    }`}
                >
                  {link.iconClass ? (
                      link.iconClass.includes("github") ? (
                          <Github className="w-6 h-6" />
                      ) : (
                          <span className={link.iconClass}></span>
                      )
                  ) : (
                      link.label
                  )}
                </a>
            ))}
          </div>

          <button
              className="md:hidden p-2 text-slate-800"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
              <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="md:hidden bg-white dark:bg-slate-900 border-t"
              >
                <div className="flex flex-col p-6 space-y-4">
                  {navData.links.map((link) => (
                      <a
                          key={link.label || link.href}
                          href={link.href}
                          target={link.external ? "_blank" : undefined}
                          rel={link.external ? "noopener noreferrer" : undefined}
                          onClick={() => setIsOpen(false)}
                          className="text-lg font-medium text-slate-700 dark:text-slate-200 hover:text-[#2962FF]"
                      >
                        {link.iconClass && link.iconClass.includes("github")
                            ? "GitHub"
                            : link.label}
                      </a>
                  ))}
                </div>
              </motion.div>
          )}
        </AnimatePresence>
      </nav>
  );
}
