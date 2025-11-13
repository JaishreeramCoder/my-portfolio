import React from "react";

export default function About() {
  return (
    <section
      id="about"
      aria-label="About"
      className="relative py-20 lg:py-28 bg-gradient-to-b from-transparent to-white/60"
    >
      {/* Decorative blobs that visually continue from the Hero section */}
      <div
        aria-hidden
        className="absolute -left-32 top-2 w-[480px] h-[480px] rounded-full bg-gradient-to-br from-indigo-400 via-sky-500 to-cyan-400 opacity-20 blur-3xl transform rotate-12"
      />
      <div
        aria-hidden
        className="absolute -right-28 -top-6 w-[360px] h-[360px] rounded-full bg-gradient-to-tr from-fuchsia-400 via-violet-500 to-indigo-600 opacity-18 blur-3xl transform -rotate-6"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12">
        <header className="mb-10 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-600 via-indigo-600 to-fuchsia-600">
              About
            </span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-600 max-w-3xl mx-auto">
            A quick overview of my background & interests.
          </p>
        </header>

        {/* Wider, centered content block — not full width but occupies a significant portion */}
        <div className="prose prose-slate max-w-none text-slate-700 dark:prose-invert">
          <div className="mx-auto max-w-5xl text-center text-sm sm:text-base leading-relaxed space-y-6">
            <p>
              Hi, I’m Adarsh, a Data Scientist at Axtria Ingenious Insights, where I am currently working on building a machine learning–powered NBA recommendation engine for a Fortune Global 500 pharmaceutical company.
            </p>

            <p>
              I am a passionate competitive programmer with 3+ years of active experience — I’ve solved 1500+ DSA problems, hold a 5★ rating on CodeChef, and an Expert rating on Codeforces.
            </p>

            <p>
              I hold an Integrated Dual Degree (B.Tech in Mechanical Engineering &amp; M.Tech in AI/ML) from IIT Kharagpur. During my time there, I worked closely with professors from the Department of AI on research work spanning computer vision, deep reinforcement learning, and fine-tuning LLMs.
            </p>

            <p>
              I’m passionate about building scalable AI/ML systems and distributed architectures. I enjoy system design and problem solving — always open to collaborate on ambitious products and research problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
