// src/components/Footer.jsx
import React from "react";
import { hero } from "../data/hero";

export default function Footer() {
  const year = new Date().getFullYear();

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="text-sm sm:text-base text-slate-200 font-medium">
          © {year} {hero.name} | Data Scientist
        </div>

        <div className="text-sm text-slate-400 mt-2">
          Built with React, Vite, and Tailwind CSS
        </div>

        <div className="mt-4">
          <button
            onClick={handleBackToTop}
            className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
            aria-label="Back to top"
          >
            ↑ Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
