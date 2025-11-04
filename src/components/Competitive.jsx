// src/components/Competitive.jsx
import React, { useEffect, useRef } from "react";
import cfLogo from "../data/cf.png";
import ccLogo from "../data/cc.jpeg";

function InlineBullet({ children }) {
  return (
    <li className="flex items-start gap-3">
      <svg
        aria-hidden
        width="10"
        height="10"
        viewBox="0 0 24 24"
        className="mt-1 flex-shrink-0 text-sky-600 sm:w-[12px] sm:h-[12px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10" fill="currentColor" />
      </svg>
      <span className="text-sm sm:text-base leading-relaxed text-slate-700">
        {children}
      </span>
    </li>
  );
}

export default function Competitive() {
  const rootRef = useRef(null);
  const codeforcesUrl = "https://codeforces.com/profile/JaishreeramCoder";
  const codechefUrl = "https://www.codechef.com/users/Adarsh_iitkgp";
  const grimoireInsta = "https://www.instagram.com/p/C48DfCFxXb0/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D";

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
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
    );

    items.forEach((el, i) => {
      el.dataset.index = String(i);
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="cp"
      aria-label="Competitive Programming"
      ref={rootRef}
      className="relative py-20 lg:py-28 bg-gradient-to-b from-transparent to-white/60"
    >
      {/* small reveal styles (respects prefers-reduced-motion) */}
      <style>{`@media (prefers-reduced-motion: reduce) { .reveal-item { transition: none !important; transform: none !important; opacity: 1 !important; } }
        .reveal-item{ opacity: 0; transform: translateY(20px); transition: opacity 640ms cubic-bezier(.2,.9,.2,1), transform 640ms cubic-bezier(.2,.9,.2,1); will-change: transform, opacity }
        .reveal-item.reveal-from-left { transform: translateX(-28px) translateY(6px); }
        .reveal-item.reveal-from-right { transform: translateX(28px) translateY(6px); }
        .reveal-item.reveal-from-bottom { transform: translateY(28px); }
        .reveal-item.is-visible { opacity: 1; transform: translateX(0) translateY(0); }
      `}</style>

      {/* Decorative blobs to match other sections */}
      <div
        aria-hidden
        className="absolute -left-36 top-4 w-[560px] h-[560px] rounded-full bg-gradient-to-br from-indigo-400 via-sky-500 to-cyan-400 opacity-18 blur-3xl transform -rotate-6"
      />
      <div
        aria-hidden
        className="absolute -right-36 -top-10 w-[460px] h-[460px] rounded-full bg-gradient-to-tr from-fuchsia-400 via-violet-500 to-indigo-600 opacity-16 blur-3xl transform rotate-12"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 text-center sm:text-left">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mx-auto sm:mx-0">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-600 via-indigo-600 to-fuchsia-600">
              Competitive Programming
            </span>
          </h2>
        </div>

        {/* widened card container to fit long lines */}
        <div className="max-w-7xl mx-auto">
          {/* made minimal change: added reveal classes to this card */}
          <div className="reveal-item reveal-from-bottom bg-white/70 backdrop-blur-sm border border-gray-100 rounded-2xl shadow-sm p-6 sm:p-8" role="group">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center justify-between w-full sm:w-auto gap-3">
                <a
                  href={codeforcesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Codeforces profile"
                  title="Codeforces — JaishreeramCoder"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center p-1 rounded-lg bg-white shadow-sm border border-gray-100 hover:scale-105 transition-transform"
                >
                  <img
                    src={cfLogo}
                    alt="Codeforces logo"
                    className="w-full max-w-[60px] h-auto sm:w-10 sm:h-10 object-contain"
                  />
                </a>

                <a
                  href={codechefUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open CodeChef profile"
                  title="CodeChef — Adarsh iitkgp"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center p-1 rounded-lg bg-white shadow-sm border border-gray-100 hover:scale-105 transition-transform"
                >
                  <img
                    src={ccLogo}
                    alt="CodeChef logo"
                    className="w-full max-w-[60px] h-auto sm:w-10 sm:h-10 object-cover rounded-sm"
                  />
                </a>
              </div>

              {/* Hidden on small screens */}
              <div className="hidden sm:block">
                <div className="text-lg sm:text-xl font-semibold text-slate-900">
                  Competitive Programming
                </div>
                <div className="text-sm text-slate-500">
                  Profiles • Achievements • Global ranks
                </div>
              </div>
            </div>

            <div className="text-slate-800">
              <ul className="space-y-3 text-sm sm:text-base leading-relaxed">
                <InlineBullet>
                  Codeforces Expert (Rating: 1662) (
                  <a
                    href={codeforcesUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 hover:underline break-all"
                  >
                    @JaishreeramCoder
                  </a>
                  ); CodeChef 5-Star (Rating: 2013) (
                  <a
                    href={codechefUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 hover:underline break-all"
                  >
                    @Adarsh_iitkgp
                  </a>
                  )
                </InlineBullet>

                <InlineBullet>
                  Codeforces global ranks: {" "}
                  <strong>365</strong> (
                  <a
                    href="https://codeforces.com/contest/1857/standings/participant/160732915"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 hover:underline break-all"
                  >
                    Round 891
                  </a>
                  ), <strong>486</strong> (
                  <a
                    href="https://codeforces.com/contest/1873/standings/participant/163988884"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 hover:underline break-all"
                  >
                    Round 898
                  </a>
                  ), <strong>511</strong> (
                  <a
                    href="https://codeforces.com/contest/1899/standings/participant/167923829"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 hover:underline break-all"
                  >
                    Round 909
                  </a>
                  ) out of <strong>40k+</strong> total participants
                </InlineBullet>

                <InlineBullet>
                  CodeChef global ranks: {" "}
                  <strong>38</strong> (
                  <a
                    href="https://www.codechef.com/rankings/START133B?itemsPerPage=100&order=asc&page=1&search=Adarsh_iitkgp&sortBy=rank"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 hover:underline break-all"
                  >
                    Starter 133 Division 2
                  </a>
                  ), <strong>55</strong> (
                  <a
                    href="https://www.codechef.com/rankings/START131B?itemsPerPage=100&order=asc&page=1&search=Adarsh_iitkgp&sortBy=rank"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 hover:underline break-all"
                  >
                    Starter 131 Division 2
                  </a>
                  ), <strong>60</strong> (
                  <a
                    href="https://www.codechef.com/rankings/START129B?itemsPerPage=100&order=asc&page=1&search=Adarsh_iitkgp&sortBy=rank"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 hover:underline break-all"
                  >
                    Starter 129 Division 2
                  </a>
                  )
                </InlineBullet>

                <InlineBullet>
                  <a
                    href={grimoireInsta}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 hover:underline break-all"
                  >
                    Quarter-finalist
                  </a>{" "}
                  in Grimoire of Code Lockout Contest organized by IIT KGP’s Competitive Programming Club
                </InlineBullet>
              </ul>
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
