import React, { useEffect, useRef } from "react";

function Bullet({ children }) {
  return (
    <li className="flex items-start sm:items-center gap-2 sm:gap-3">
      <svg
        aria-hidden
        width="10"
        height="10"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mt-1 sm:mt-0 flex-shrink-0 text-sky-600 sm:w-[14px] sm:h-[14px]"
      >
        <circle cx="12" cy="12" r="10" fill="currentColor" />
      </svg>
      <span className="text-sm sm:text-base leading-relaxed text-slate-700">
        {children}
      </span>
    </li>
  );
}

export default function Research() {
  const rootRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const root = rootRef.current || document;
    const items = (rootRef.current || document).querySelectorAll('.reveal-item');
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const delay = Number(el.dataset.index || 0) * 80;
          setTimeout(() => el.classList.add('is-visible'), delay);
          observer.unobserve(el);
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    items.forEach((el, i) => {
      el.dataset.index = String(i);
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="research"
      aria-label="Research Experience & Projects"
      ref={rootRef}
      className="relative py-20 lg:py-28 bg-gradient-to-b from-transparent to-white/60"
    >
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .reveal-item { transition: none !important; transform: none !important; opacity: 1 !important; }
        }
        .reveal-item {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 700ms cubic-bezier(.2,.9,.2,1), transform 700ms cubic-bezier(.2,.9,.2,1);
          will-change: transform, opacity;
        }
        .reveal-item.reveal-from-left { transform: translateX(-36px) translateY(8px); }
        .reveal-item.reveal-from-right { transform: translateX(36px) translateY(8px); }
        .reveal-item.is-visible { opacity: 1; transform: translateX(0) translateY(0); }
      `}</style>

      {/* Decorative blobs to match Hero/About */}
      <div
        aria-hidden
        className="absolute -left-36 top-4 w-[560px] h-[560px] rounded-full bg-gradient-to-br from-indigo-400 via-sky-500 to-cyan-400 opacity-18 blur-3xl transform -rotate-6"
      />
      <div
        aria-hidden
        className="absolute -right-36 -top-10 w-[460px] h-[460px] rounded-full bg-gradient-to-tr from-fuchsia-400 via-violet-500 to-indigo-600 opacity-16 blur-3xl transform rotate-12"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12">
        <div className="flex items-end justify-center md:justify-between mb-8 w-full">
          <h2 className="w-full md:w-auto text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-center md:text-left">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-600 via-indigo-600 to-fuchsia-600">
              Research Experience & Projects
            </span>
          </h2>
        </div>

        {/* timeline wrapper */}
        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-8 top-6 bottom-6 w-px bg-sky-100" aria-hidden />

          <div id="research-list" className="space-y-12">
            {/* Item 1 */}
            <div className="flex items-start gap-6">
              <article className="reveal-item reveal-from-left flex-1 rounded-2xl p-8 sm:p-10 bg-white/70 backdrop-blur-sm border border-gray-100 shadow-sm hover:shadow-md transform hover:scale-[1.01] transition-all relative">
                <header className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 w-full sm:w-auto">
                    <div className="min-w-0">
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight whitespace-normal break-words">
                        Deep RL Research Intern
                        <span className="ml-0 sm:ml-3 text-base sm:text-lg font-semibold text-sky-600 block sm:inline">
                          — Prof. P. K. Mishra, IIT Kharagpur
                        </span>
                      </h3>
                    </div>

                    {/* links */}
                    <div className="inline-flex items-center justify-center sm:justify-start gap-2 sm:gap-3 mt-1 sm:mt-0">
                      <a
                        href="https://github.com/JaishreeramCoder/blackjack"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center p-1 rounded hover:bg-slate-100"
                        aria-label="Deep RL repo on GitHub"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-slate-700"
                          aria-hidden
                        >
                          <path
                            d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.92 3.19 9.09 7.61 10.56.56.1.76-.24.76-.53 0-.26-.01-1-.02-1.96-3.09.67-3.75-1.49-3.75-1.49-.51-1.3-1.24-1.65-1.24-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.69 2.6 1.2 3.23.92.1-.72.39-1.2.71-1.48-2.47-.28-5.07-1.24-5.07-5.5 0-1.21.43-2.2 1.14-2.98-.11-.28-.5-1.42.11-2.96 0 0 .93-.3 3.05 1.14.89-.25 1.84-.37 2.79-.37.95 0 1.9.12 2.79.37 2.12-1.44 3.05-1.14 3.05-1.14.61 1.54.22 2.68.11 2.96.71.78 1.14 1.77 1.14 2.98 0 4.27-2.6 5.21-5.08 5.49.4.35.76 1.03.76 2.08 0 1.5-.01 2.71-.01 3.08 0 .29.2.64.77.53 4.42-1.47 7.61-5.64 7.61-10.56C23.25 5.48 18.27.5 12 .5z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>

                      <a
                        href="https://blackjack-beta-kohl.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center p-1 rounded hover:bg-slate-100"
                        aria-label="Deep RL webapp"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-slate-700"
                          aria-hidden
                        >
                          <path
                            d="M14 3h7v7"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10 14L21 3"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M21 21H3V3"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>

                  <div className="text-sm text-slate-500 sm:mt-0 flex items-center justify-center sm:justify-start gap-2">
                    <span className="text-lg">🗓️</span>
                    <time dateTime="2025-01">Jan 2025</time>
                    <span className="mx-1">—</span>
                    <time dateTime="2025-04">April 2025</time>
                  </div>
                </header>

                <div className="mt-6 space-y-2 text-slate-700">
                  <ul role="list" className="space-y-2 pl-0 list-none">
                    <Bullet>Implemented GRPO and DAPO algorithms from scratch in Python for card-counting Blackjack environments</Bullet>
                    <Bullet>Among the first GRPO implementations outside LLMs settings and the very first implementation for Blackjack</Bullet>
                    <Bullet>Developed Monte Carlo and PPO baseline models; benchmarked GRPO, boosting win% by ∼1.2% to 44.39%</Bullet>
                    <Bullet>Deployed a web app (React/FastAPI/Tailwind) integrating the model to suggest optimal Blackjack moves to users</Bullet>
                  </ul>
                </div>
              </article>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-6">
              <article className="reveal-item reveal-from-right flex-1 rounded-2xl p-8 sm:p-10 bg-white/70 backdrop-blur-sm border border-gray-100 shadow-sm hover:shadow-md transform hover:scale-[1.01] transition-all relative">
                <header className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 w-full sm:w-auto">
                    <div className="min-w-0">
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight whitespace-normal break-words">
                        GenAI Research Intern
                        <span className="ml-0 sm:ml-3 text-base sm:text-lg font-semibold text-sky-600 block sm:inline">
                          — Prof. P.K. Mishra, IIT Kharagpur
                        </span>
                      </h3>
                    </div>

                    {/* links */}
                    <div className="inline-flex items-center justify-center sm:justify-start gap-2 sm:gap-3 mt-1 sm:mt-0">
                      <a
                        href="https://github.com/JaishreeramCoder/Masters-Thesis-Project1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center p-1 rounded hover:bg-slate-100"
                        aria-label="GenAI repo on GitHub"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-slate-700"
                          aria-hidden
                        >
                          <path
                            d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.92 3.19 9.09 7.61 10.56.56.1.76-.24.76-.53 0-.26-.01-1-.02-1.96-3.09.67-3.75-1.49-3.75-1.49-.51-1.3-1.24-1.65-1.24-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.69 2.6 1.2 3.23.92.1-.72.39-1.2.71-1.48-2.47-.28-5.07-1.24-5.07-5.5 0-1.21.43-2.2 1.14-2.98-.11-.28-.5-1.42.11-2.96 0 0 .93-.3 3.05 1.14.89-.25 1.84-.37 2.79-.37.95 0 1.9.12 2.79.37 2.12-1.44 3.05-1.14 3.05-1.14.61 1.54.22 2.68.11 2.96.71.78 1.14 1.77 1.14 2.98 0 4.27-2.6 5.21-5.08 5.49.4.35.76 1.03.76 2.08 0 1.5-.01 2.71-.01 3.08 0 .29.2.64.77.53 4.42-1.47 7.61-5.64 7.61-10.56C23.25 5.48 18.27.5 12 .5z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>

                  <div className="text-sm text-slate-500 sm:mt-0 flex items-center justify-center sm:justify-start gap-2">
                    <span className="text-lg">🗓️</span>
                    <time dateTime="2024-08">Aug 2024</time>
                    <span className="mx-1">—</span>
                    <time dateTime="2024-11">Nov 2024</time>
                  </div>
                </header>

                <div className="mt-6 space-y-2 text-slate-700">
                  <ul role="list" className="space-y-2 pl-0 list-none">
                    <Bullet>Built resource-efficient PPO-based RLHF pipelines and evaluated DPO to align LLMs with human preferences</Bullet>
                    <Bullet>Fine-tuned LLaMA 3.1 8B with QLoRA adapters on OpenAI summary dataset, boosting ROUGE-1 score to 0.19</Bullet>
                    <Bullet>Compared reward models (100M–8B) using Hugging Face TRL; found Gemma 2B most efficient and competitive</Bullet>
                    <Bullet>Applied PPO-based RLHF to refine the supervised model, increasing its average reward score from 5.42 to 5.62</Bullet>
                  </ul>
                </div>
              </article>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-6">
              <article className="reveal-item reveal-from-left flex-1 rounded-2xl p-8 sm:p-10 bg-white/70 backdrop-blur-sm border border-gray-100 shadow-sm hover:shadow-md transform hover:scale-[1.01] transition-all relative">
                <header className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 text-center sm:text-left">
                  <div className="w-full sm:w-auto">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 w-full sm:w-auto">
                      <div className="min-w-0">
                        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight whitespace-normal break-words">
                          NLP Research Intern
                          <span className="ml-0 sm:ml-3 text-base sm:text-lg font-semibold text-sky-600 block sm:inline">
                            — Prof. Jiaul H. Paik, IIT Kharagpur
                          </span>
                        </h3>
                      </div>

                      {/* links */}
                      <div className="inline-flex items-center justify-center sm:justify-start gap-2 sm:gap-3 mt-1 sm:mt-0">
                        <a
                          href="https://github.com/JaishreeramCoder/Bachelor-Thesis-Project2"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center p-1 rounded hover:bg-slate-100"
                          aria-label="NLP repo on GitHub"
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-slate-700"
                            aria-hidden
                          >
                            <path
                              d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.92 3.19 9.09 7.61 10.56.56.1.76-.24.76-.53 0-.26-.01-1-.02-1.96-3.09.67-3.75-1.49-3.75-1.49-.51-1.3-1.24-1.65-1.24-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.69 2.6 1.2 3.23.92.1-.72.39-1.2.71-1.48-2.47-.28-5.07-1.24-5.07-5.5 0-1.21.43-2.2 1.14-2.98-.11-.28-.5-1.42.11-2.96 0 0 .93-.3 3.05 1.14.89-.25 1.84-.37 2.79-.37.95 0 1.9.12 2.79.37 2.12-1.44 3.05-1.14 3.05-1.14.61 1.54.22 2.68.11 2.96.71.78 1.14 1.77 1.14 2.98 0 4.27-2.6 5.21-5.08 5.49.4.35.76 1.03.76 2.08 0 1.5-.01 2.71-.01 3.08 0 .29.2.64.77.53 4.42-1.47 7.61-5.64 7.61-10.56C23.25 5.48 18.27.5 12 .5z"
                              fill="currentColor"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="text-sm text-slate-500 sm:mt-0 flex items-center justify-center sm:justify-start gap-2">
                    <span className="text-lg">🗓️</span>
                    <time dateTime="2024-01">Jan 2024</time>
                    <span className="mx-1">—</span>
                    <time dateTime="2024-04">April 2024</time>
                  </div>
                </header>

                <div className="mt-6 space-y-2 text-slate-700">
                  <ul role="list" className="space-y-2 pl-0 list-none">
                    <Bullet>Curated a custom gender stereotype dataset by sending sentence batches to the GPT-3.5-Turbo API with log_probs=True, manually reviewing borderline cases (0.4 ≤ P(True) ≤ 0.6) for accurate labeling</Bullet>
                    <Bullet>Trained multiple classifiers — Random Forest, XGBoost, and FLAN-T5 — achieving accuracies of 0.81, 0.84, and 0.86, respectively</Bullet>
                    <Bullet>Optimized the LLaMA 2–7B model using few-shot prompting in zero-shot and 2-shot configurations, maintaining 0.86 accuracy</Bullet>
                    <Bullet>Fine-tuned the LLaMA 2–7B model with QLoRA adapters and 5-fold cross-validation, improving accuracy to 0.91</Bullet>
                  </ul>
                </div>
              </article>
            </div>

            {/* Item 4 */}
            <div className="flex items-start gap-6">
              <article className="reveal-item reveal-from-right flex-1 rounded-2xl p-8 sm:p-10 bg-white/70 backdrop-blur-sm border border-gray-100 shadow-sm hover:shadow-md transform hover:scale-[1.01] transition-all relative">
                <header className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 text-center sm:text-left">
                  <div className="w-full sm:w-auto">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 w-full sm:w-auto">
                      <div className="min-w-0">
                        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight whitespace-normal break-words">
                          Computer Vision Research Intern
                          <span className="ml-0 sm:ml-3 text-base sm:text-lg font-semibold text-sky-600 block sm:inline">
                            — Prof. Adway Mitra, IIT Kharagpur
                          </span>
                        </h3>
                      </div>

                      {/* links */}
                      <div className="inline-flex items-center justify-center sm:justify-start gap-2 sm:gap-3 mt-1 sm:mt-0">
                        <a
                          href="https://github.com/JaishreeramCoder/segmentation"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center p-1 rounded hover:bg-slate-100"
                          aria-label="CV repo on GitHub"
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-slate-700"
                            aria-hidden
                          >
                            <path
                              d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.92 3.19 9.09 7.61 10.56.56.1.76-.24.76-.53 0-.26-.01-1-.02-1.96-3.09.67-3.75-1.49-3.75-1.49-.51-1.3-1.24-1.65-1.24-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.69 2.6 1.2 3.23.92.1-.72.39-1.2.71-1.48-2.47-.28-5.07-1.24-5.07-5.5 0-1.21.43-2.2 1.14-2.98-.11-.28-.5-1.42.11-2.96 0 0 .93-.3 3.05 1.14.89-.25 1.84-.37 2.79-.37.95 0 1.9.12 2.79.37 2.12-1.44 3.05-1.14 3.05-1.14.61 1.54.22 2.68.11 2.96.71.78 1.14 1.77 1.14 2.98 0 4.27-2.6 5.21-5.08 5.49.4.35.76 1.03.76 2.08 0 1.5-.01 2.71-.01 3.08 0 .29.2.64.77.53 4.42-1.47 7.61-5.64 7.61-10.56C23.25 5.48 18.27.5 12 .5z"
                              fill="currentColor"
                            />
                          </svg>
                        </a>

                        <a
                          href="https://segmentation-six.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center p-1 rounded hover:bg-slate-100"
                          aria-label="CV webapp"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-slate-700"
                            aria-hidden
                          >
                            <path
                              d="M14 3h7v7"
                              stroke="currentColor"
                              strokeWidth="1.4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M10 14L21 3"
                              stroke="currentColor"
                              strokeWidth="1.4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M21 21H3V3"
                              stroke="currentColor"
                              strokeWidth="1.4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="text-sm text-slate-500 sm:mt-0 flex items-center justify-center sm:justify-start gap-2">
                    <span className="text-lg">🗓️</span>
                    <time dateTime="2023-08">Aug 2023</time>
                    <span className="mx-1">—</span>
                    <time dateTime="2023-11">Nov 2023</time>
                  </div>
                </header>

                <div className="mt-6 space-y-2 text-slate-700">
                  <ul role="list" className="space-y-2 pl-0 list-none">
                    <Bullet>Applied image segmentation models to satellite imagery to auto-generate slum masks, reducing manual effort</Bullet>
                    <Bullet>Acquired 1,000+ satellite images via Google Earth Pro, then annotated and masked them with MakeSense.ai</Bullet>
                    <Bullet>Built 3 PyTorch pipelines (custom U-Net, DenseNet-encoder U-Net, fine-tuned HRNet), getting 0.89 F1 score</Bullet>
                    <Bullet>Developed a React/Django web app enabling users to upload satellite images and download segmentation masks</Bullet>
                  </ul>
                </div>
              </article>
            </div>

            {/* Item 5 - Leetcode extension (no location line as requested) */}
            <div className="flex items-start gap-6">
              <article className="reveal-item reveal-from-left flex-1 rounded-2xl p-8 sm:p-10 bg-white/70 backdrop-blur-sm border border-gray-100 shadow-sm hover:shadow-md transform hover:scale-[1.01] transition-all relative">
                <header className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 text-center sm:text-left">
                  <div className="w-full sm:w-auto">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 w-full sm:w-auto">
                      <div className="min-w-0">
                        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight whitespace-normal break-words">
                          Leetcode Friends Contest Rank Tracker
                          <span className="ml-0 sm:ml-3 text-base sm:text-lg font-semibold text-sky-600 block sm:inline">
                            — {" "}
                            <a
                              href="https://chromewebstore.google.com/detail/leetcode-friends-rank-che/aajplhnjobdefcjgghdpanciaiioihhm?utm_source=item-share-cb"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Chrome Extension
                            </a>
                          </span>
                        </h3>
                      </div>

                      {/* links */}
                      <div className="inline-flex items-center justify-center sm:justify-start gap-2 sm:gap-3 mt-1 sm:mt-0">
                        <a
                          href="https://github.com/JaishreeramCoder/leetcode-friends-contest-tracker"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center p-1 rounded hover:bg-slate-100"
                          aria-label="LeetCode extension repo on GitHub"
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-slate-700"
                            aria-hidden
                          >
                            <path
                              d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.92 3.19 9.09 7.61 10.56.56.1.76-.24.76-.53 0-.26-.01-1-.02-1.96-3.09.67-3.75-1.49-3.75-1.49-.51-1.3-1.24-1.65-1.24-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.69 2.6 1.2 3.23.92.1-.72.39-1.2.71-1.48-2.47-.28-5.07-1.24-5.07-5.5 0-1.21.43-2.2 1.14-2.98-.11-.28-.5-1.42.11-2.96 0 0 .93-.3 3.05 1.14.89-.25 1.84-.37 2.79-.37.95 0 1.9.12 2.79.37 2.12-1.44 3.05-1.14 3.05-1.14.61 1.54.22 2.68.11 2.96.71.78 1.14 1.77 1.14 2.98 0 4.27-2.6 5.21-5.08 5.49.4.35.76 1.03.76 2.08 0 1.5-.01 2.71-.01 3.08 0 .29.2.64.77.53 4.42-1.47 7.61-5.64 7.61-10.56C23.25 5.48 18.27.5 12 .5z"
                              fill="currentColor"
                            />
                          </svg>
                        </a>

                        <a
                          href="https://www.youtube.com/watch?v=wUPa8KRKiaY"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center p-1 rounded hover:bg-slate-100"
                          aria-label="YouTube demo video"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="18"
                            height="18"
                            fill="currentColor"
                            className="text-red-600"
                            aria-hidden
                          >
                            <path d="M21.8 8.001a2.75 2.75 0 0 0-1.94-1.94C18.14 5.75 12 5.75 12 5.75s-6.14 0-7.86.311a2.75 2.75 0 0 0-1.94 1.94A28.92 28.92 0 0 0 2 12a28.92 28.92 0 0 0 .2 3.999 2.75 2.75 0 0 0 1.94 1.94C5.86 18.25 12 18.25 12 18.25s6.14 0 7.86-.311a2.75 2.75 0 0 0 1.94-1.94A28.92 28.92 0 0 0 22 12a28.92 28.92 0 0 0-.2-3.999ZM10 15.02V8.98L15.5 12 10 15.02Z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="text-sm text-slate-500 sm:mt-0 flex items-center justify-center sm:justify-start gap-2">
                    <span className="text-lg">🗓️</span>
                    <time dateTime="2025-05">May 2025</time>
                    <span className="mx-1">—</span>
                    <time dateTime="2025-06">June 2025</time>
                  </div>
                </header>

                <div className="mt-6 space-y-2 text-slate-700">
                  <ul role="list" className="space-y-2 pl-0 list-none">
                    <Bullet>Developed a Chrome extension in JavaScript adding a friends leaderboard to LeetCode’s contest ranking page</Bullet>
                    <Bullet>Only available tool offering this feature for LeetCode, attracting 25+ users and 4.5+ rating on Chrome Web Store</Bullet>
                    <Bullet>Built a popup via LeetCode’s GraphQL API for friends’ latest updates; added waitForXPath for DOM handling</Bullet>
                    <Bullet>Optimized friends’ rank retrieval via chrome.storage.local caching and parallel requests (∼10 min → &lt;1 min)</Bullet>
                  </ul>
                </div>
              </article>
            </div>

          </div>
        </div>
      </div>

      {/* Decorative subtle SVG wave to flow to next section */}
      <svg
        className="absolute bottom-0 left-0 w-full h-24 md:h-36"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          fill="rgba(14,165,233,0.04)"
          d="M0,192L60,186.7C120,181,240,171,360,149.3C480,128,600,96,720,96C840,96,960,128,1080,154.7C1200,181,1320,203,1380,213.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
      </svg>
    </section>
  );
}
