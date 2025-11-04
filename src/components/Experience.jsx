import React, { useEffect, useRef } from "react";

function Bullet({ children }) {
  return (
    <li className="flex items-start gap-3">
      <svg
        aria-hidden
        width="10"
        height="10"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mt-1 flex-shrink-0 text-sky-600 sm:w-[14px] sm:h-[14px]"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="0"
          fill="currentColor"
        />
      </svg>
      <span className="text-sm sm:text-base leading-relaxed text-slate-700">
        {children}
      </span>
    </li>
  );
}


function TechPill({ children }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sky-50 text-sky-700 border border-sky-100 mr-2 mb-2">{children}</span>
  );
}

export default function Experience() {
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
          // staggered reveal
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
      id="experience"
      aria-label="Experience"
      ref={rootRef}
      className="relative py-20 lg:py-28 bg-gradient-to-b from-transparent to-white/60"
    >
      {/* Small CSS for reveal - minimal, keeps all Tailwind styles intact */}
      <style>{`
        /* Respect user preference */
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
              Experience
            </span>
          </h2>
        </div>

        {/* timeline wrapper */}
        <div className="relative">
          {/* vertical line - hidden on small screens to save space */}
          <div className="hidden md:block absolute left-8 top-6 bottom-6 w-px bg-sky-100" aria-hidden />

          <div id="work" className="space-y-12">
            {/* Item 1 */}
            <div className="flex flex-col sm:flex-row items-start gap-6">
              {/* marker column - full width on mobile so the card can take ~90% width */}
              <div className="flex flex-col items-center sm:w-16 w-full relative">
                <div className="hidden md:flex w-10 h-10 rounded-full bg-white border-2 border-sky-500 items-center justify-center shadow-sm">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-sky-600"
                  >
                    <circle cx="12" cy="12" r="5.2" fill="currentColor" />
                    <circle
                      cx="12"
                      cy="12"
                      r="8.4"
                      stroke="currentColor"
                      strokeWidth="0.6"
                      opacity="0.12"
                    />
                  </svg>
                </div>
              </div>
              <article className="reveal-item reveal-from-left w-[100%] md:flex-1 mx-auto sm:mx-0 rounded-2xl p-6 sm:p-8 bg-white/70 backdrop-blur-sm border border-gray-100 shadow-sm hover:shadow-md transform hover:scale-[1.01] transition-all relative">
                <header className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-2 items-center text-center sm:text-left min-w-0">
                  <div className="w-full sm:flex-1 min-w-0">
                    <div className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight break-words">
                      <span className="block">Data Scientist</span>
                      <span className="ml-0 sm:ml-3 text-lg font-semibold text-sky-600 block sm:inline">— Axtria</span>
                    </div>

                    <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-slate-500 justify-center sm:justify-start w-full sm:w-auto whitespace-normal text-center sm:text-left">
                      <span className="inline-flex items-center gap-2 break-normal">📍 Noida, India</span>
                      <span className="inline-flex items-center gap-2 px-2 py-0.5 bg-slate-200 rounded-full">Full-time</span>
                    </div>
                  </div>

                  <div className="text-sm text-slate-500 mt-2 sm:mt-0 flex items-center gap-2 justify-center sm:justify-end w-full sm:w-auto flex-wrap sm:flex-nowrap">
                    <span className="text-lg">🗓️</span>
                    <time dateTime="2025-07" className="whitespace-nowrap">July 2025</time>
                    <span className="mx-1" aria-hidden>—</span>
                    <span className="whitespace-nowrap">Present</span>
                  </div>
                </header>
                <div className="mt-6 space-y-4 text-slate-700">
                  <div className="font-semibold">NBA Recommendation System:</div>
                  <ul role="list" className="space-y-3 pl-0 list-none">
                    <Bullet>
                      Built an RNN-based sales-lift prediction model in PyTorch for a Fortune Global 500
                      pharmaceutical client
                    </Bullet>
                    <Bullet>
                      Integrated the model into a 200+ task NBA recommendation engine, reducing end-to-end
                      pipeline runtime by <span className="font-medium">20%</span>
                    </Bullet>
                    <Bullet>
                      Ingested <span className="font-medium">100+</span> Hive tables (1M+ rows each) into Unity
                      Catalog; engineered features using PySpark for training
                    </Bullet>
                    <Bullet>
                      Imputed lift for ~<span className="font-medium">20%</span> missing HCPs by combining NCF +
                      Lookalike and Random Forest based model output
                    </Bullet>
                    <Bullet>
                      Applied business rules and genetic-algorithm optimization to allocate HCPs to sales
                      reps satisfying constraints
                    </Bullet>
                    <Bullet>
                      Automated CI/CD via GitHub Actions to run Databricks jobs, providing weekly allocations
                      affecting <span className="font-medium">100k+</span> HCPs
                    </Bullet>
                  </ul>
                  <div className="font-medium text-sm text-slate-700 mb-2">Technologies:</div>
                  <div className="flex flex-wrap">
                    <TechPill>Databricks</TechPill>
                    <TechPill>Spark</TechPill>
                    <TechPill>PyTorch</TechPill>
                    <TechPill>MLFlow</TechPill>
                    <TechPill>GitHub Actions</TechPill>
                  </div>

                  <div className="font-semibold mt-3">GenAI SQL Assistant (POC)</div>
                  <ul role="list" className="space-y-3 pl-0 list-none">
                    <Bullet>
                      Built a schema-aware NL→SQL engine using LLMs and hybrid RAG retrieval for reliable
                      database querying
                    </Bullet>
                    <Bullet>
                      Built a Streamlit UI with admin login for secure DB updates; integrated a KG checker
                      boosting accuracy by <span className="font-medium">30%</span>
                    </Bullet>
                  </ul>
                  <div className="font-medium text-sm text-slate-700 mt-3 mb-2">Technologies:</div>
                  <div className="flex flex-wrap">
                    <TechPill>LangChain</TechPill>
                    <TechPill>Streamlit</TechPill>
                    <TechPill>RAG</TechPill>
                    <TechPill>Knowledge Graph</TechPill>
                    <TechPill>SQLite</TechPill>
                  </div>
                </div>
              </article>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="flex flex-col items-center sm:w-16 w-full relative">
                <div className="hidden md:flex w-10 h-10 rounded-full bg-white border-2 border-sky-500 items-center justify-center shadow-sm">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-sky-600"
                  >
                    <circle cx="12" cy="12" r="5.2" fill="currentColor" />
                    <circle
                      cx="12"
                      cy="12"
                      r="8.4"
                      stroke="currentColor"
                      strokeWidth="0.6"
                      opacity="0.12"
                    />
                  </svg>
                </div>
              </div>

              <article className="reveal-item reveal-from-right w-[100%] sm:flex-1 mx-auto sm:mx-0 rounded-2xl p-6 sm:p-8 bg-white/70 backdrop-blur-sm border border-gray-100 shadow-sm hover:shadow-md transform hover:scale-[1.01] transition-all relative">
                <header className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-2 items-center text-center sm:text-left min-w-0">
                  <div className="w-full sm:flex-1 min-w-0">
                    <div className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight break-words">
                      <span className="block">Software Development Intern</span>
                      <span className="ml-0 sm:ml-3 text-lg font-semibold text-sky-600 block sm:inline">— Wager</span>
                    </div>

                    <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-slate-500 justify-center sm:justify-start w-full sm:w-auto whitespace-normal text-center sm:text-left">
                      <span className="inline-flex items-center gap-2 break-normal">📍 New York, USA (Remote)</span>
                      <span className="inline-flex items-center gap-2 px-2 py-0.5 bg-slate-200 rounded-full">Internship</span>
                    </div>
                  </div>

                  <div className="text-sm text-slate-500 mt-2 sm:mt-0 flex items-center gap-2 justify-center sm:justify-end w-full sm:w-auto flex-wrap sm:flex-nowrap">
                    <span className="text-lg">🗓️</span>
                    <time dateTime="2024-05" className="whitespace-nowrap">May 2024</time>
                    <span className="mx-1" aria-hidden>—</span>
                    <time dateTime="2024-07" className="whitespace-nowrap">July 2024</time>
                  </div>
                </header>
                <div className="mt-6 space-y-2 text-slate-700">
                  <ul role="list" className="space-y-3 pl-0 list-none">
                    <Bullet>
                      Architected backend for a Python Telegram bot using Bet365 API data for sports betting, scalable to 10k RPS
                    </Bullet>
                    <Bullet>
                      Centralized API calls, event fetching, and bet placement using runtime memory and caching to enhance efficiency
                    </Bullet>
                    <Bullet>
                      Designed a secure TON Wallet service in the bot using <code>ton-sdk</code>, managing deposits, withdrawals, and bet transactions
                    </Bullet>
                  </ul>
                  <div className="font-medium text-sm text-slate-700 mt-3 mb-2">Technologies:</div>
                  <div className="flex flex-wrap">
                    <TechPill>Python</TechPill>
                    <TechPill>Aiogram</TechPill>
                    <TechPill>TON SDK</TechPill>
                    <TechPill>AWS</TechPill>
                    <TechPill>Firebase</TechPill>
                  </div>
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
