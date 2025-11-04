import React, { useEffect, useRef } from "react";
import iitkgpLogo from "../data/iitkgp.png";

export default function Education() {
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
      id="education"
      aria-label="Education"
      ref={rootRef}
      className="relative py-20 lg:py-28 bg-gradient-to-b from-transparent to-white/60"
    >
      {/* small reveal styles (respects prefers-reduced-motion) */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .reveal-item { transition: none !important; transform: none !important; opacity: 1 !important; }
        }
        .reveal-item { opacity: 0; transform: translateY(18px); transition: opacity 700ms cubic-bezier(.2,.9,.2,1), transform 700ms cubic-bezier(.2,.9,.2,1); will-change: transform, opacity; }
        .reveal-item.reveal-from-left { transform: translateX(-30px) translateY(6px); }
        .reveal-item.reveal-from-right { transform: translateX(30px) translateY(6px); }
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
              Education
            </span>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* minimal change: added reveal classes to article */}
          <article className="reveal-item reveal-from-left flex flex-col items-center sm:flex-row sm:items-start sm:justify-between gap-6 rounded-2xl p-8 sm:p-10 bg-white/70 backdrop-blur-sm border border-gray-100 shadow-sm hover:shadow-md transition-all relative">
            {/* left: logo + institute (stacked & centered on mobile) */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 w-full sm:w-auto">
              <img
                src={iitkgpLogo}
                alt="IIT Kharagpur logo"
                className="w-14 h-14 sm:w-16 sm:h-16 object-contain rounded-md shadow-sm"
                width={64}
                height={64}
              />

              <div className="w-full sm:w-auto">
                <header className="text-center sm:text-left">
                  <div className="text-lg sm:text-xl font-semibold text-slate-900">
                    Indian Institute of Technology, Kharagpur
                  </div>
                  <div className="text-sm text-slate-500 mt-1">
                    B.Tech. in Mechanical Engineering and M.Tech. in Artificial Intelligence
                  </div>
                </header>

                {/* ✅ CGPA (visible only on larger screens) */}
                <div className="hidden sm:block mt-6 space-y-3 text-slate-700">
                  <p className="text-sm text-slate-600">CGPA 8.11/10</p>
                </div>
              </div>
            </div>

            {/* ✅ CGPA (visible only on mobile, centered) */}
            <div className="block sm:hidden space-y-3 text-slate-700 text-center w-full">
              <p className="text-sm text-slate-600">CGPA 8.11/10</p>
            </div>

            {/* right: timeline — centered & stacked on mobile, right aligned on sm+ */}
            <div className="text-sm text-slate-500 flex items-center gap-2 sm:mt-0 w-full sm:w-auto justify-center sm:justify-start order-last sm:order-none">
              <span className="text-lg">🗓️</span>
              <time dateTime="2020-12">Dec 2020</time>
              <span className="mx-1">—</span>
              <span>June 2025</span>
            </div>
          </article>
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