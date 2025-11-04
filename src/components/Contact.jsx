// src/components/Contact.jsx
import React, { useEffect, useRef } from "react";
import { hero } from "../data/hero";

const IconLinkedIn = () => (
  <svg
    className="w-6 h-6"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M4.98 3.5C4.98 4.6 4.09 5.5 2.99 5.5 1.9 5.5 1 4.6 1 3.5 1 2.4 1.9 1.5 2.99 1.5 4.09 1.5 4.98 2.4 4.98 3.5zM.5 8.5h4.9V22H.5zM8.5 8.5h4.7v1.8h.1c.7-1.2 2.4-2.5 4.9-2.5 5.2 0 6.2 3.4 6.2 7.8V22h-4.9v-6.7c0-1.6 0-3.6-2.2-3.6-2.2 0-2.5 1.7-2.5 3.5V22H8.5z" />
  </svg>
);

const IconGitHub = () => (
  <svg
    className="w-6 h-6"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M12 .5C5.73.5.98 5.25.98 11.5c0 4.6 2.99 8.5 7.14 9.88.52.1.71-.23.71-.5 0-.25-.01-1.08-.02-1.96-2.9.63-3.51-1.4-3.51-1.4-.47-1.2-1.16-1.52-1.16-1.52-.95-.65.07-.64.07-.64 1.05.07 1.6 1.07 1.6 1.07.93 1.6 2.44 1.14 3.04.87.09-.68.36-1.14.66-1.4-2.32-.26-4.76-1.17-4.76-5.2 0-1.15.4-2.08 1.06-2.81-.11-.26-.46-1.3.1-2.7 0 0 .86-.28 2.8 1.06a9.66 9.66 0 012.55-.34c.87 0 1.75.12 2.55.34 1.94-1.34 2.8-1.06 2.8-1.06.56 1.4.21 2.44.10 2.7.66.73 1.06 1.66 1.06 2.81 0 4.04-2.45 4.94-4.78 5.2.37.33.7.98.7 1.98 0 1.43-.01 2.58-.01 2.93 0 .27.19.61.72.5C20.03 20 23 16.1 23 11.5 23 5.25 18.27.5 12 .5z"/>
  </svg>
);

export default function Contact() {
  // fallback safe-values (in case hero is missing)
  const phone = hero?.phone ?? "";
  const email = hero?.email ?? "";
  const linkedin = hero?.linkedin ?? "#";
  const github = hero?.github ?? "#";
  const resume = hero?.resume ?? "#";

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
      id="contact"
      ref={rootRef}
      className="relative py-20 lg:py-28 bg-gradient-to-br from-blue-600 to-indigo-600 text-white"
      aria-label="Contact"
    >
      {/* small reveal styles (respects prefers-reduced-motion) */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .reveal-item { transition: none !important; transform: none !important; opacity: 1 !important; }
        }
        .reveal-item { opacity: 0; transform: translateY(18px); transition: opacity 680ms cubic-bezier(.2,.9,.2,1), transform 680ms cubic-bezier(.2,.9,.2,1); will-change: transform, opacity }
        .reveal-item.reveal-from-left { transform: translateX(-28px) translateY(8px); }
        .reveal-item.reveal-from-right { transform: translateX(28px) translateY(8px); }
        .reveal-item.reveal-from-bottom { transform: translateY(28px); }
        .reveal-item.is-visible { opacity: 1; transform: translateX(0) translateY(0); }
      `}</style>

      {/* decorative blobs (consistent with other sections) */}
      <div
        aria-hidden
        className="absolute -left-36 top-4 w-[560px] h-[560px] rounded-full bg-gradient-to-br from-indigo-400 via-sky-500 to-cyan-400 opacity-18 blur-3xl transform -rotate-6"
      />
      <div
        aria-hidden
        className="absolute -right-36 -top-10 w-[460px] h-[460px] rounded-full bg-gradient-to-tr from-fuchsia-400 via-violet-500 to-indigo-600 opacity-16 blur-3xl transform rotate-12"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Let's Connect</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mt-3">
            I'm always interested in discussing new opportunities and challenging projects. Let’s talk about how we can work together.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {/* Phone */}
          <a
            href={`tel:${phone}`}
            aria-label={`Call ${phone}`}
            className="reveal-item reveal-from-left flex flex-col items-center justify-center gap-3 rounded-2xl p-6 bg-white/8 border border-white/20 backdrop-blur-sm hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/10 text-2xl">
              📞
            </div>
            <div className="text-sm text-blue-100">Phone</div>
            <div className="font-semibold text-white text-sm break-words text-center">{phone}</div>
          </a>

          {/* Email */}
          <a
            href={`mailto:${email}`}
            aria-label={`Email ${email}`}
            className="reveal-item reveal-from-right flex flex-col items-center justify-center gap-3 rounded-2xl p-6 bg-white/8 border border-white/20 backdrop-blur-sm hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/10 text-2xl">
              ✉️
            </div>
            <div className="text-sm text-blue-100">Email</div>
            <div className="font-semibold text-white text-sm break-words text-center max-w-full">{email}</div>
          </a>

          {/* LinkedIn */}
          <a
            href={linkedin}
            aria-label="LinkedIn profile"
            target="_blank"
            rel="noopener noreferrer"
            className="reveal-item reveal-from-left flex flex-col items-center justify-center gap-3 rounded-2xl p-6 bg-white/8 border border-white/20 backdrop-blur-sm hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/10">
              <IconLinkedIn />
            </div>
            <div className="text-sm text-blue-100">LinkedIn</div>
            <div className="font-semibold text-white text-sm truncate">
              {typeof linkedin === "string" ? linkedin.replace("https://www.linkedin.com/in/", "") : linkedin}
            </div>
          </a>

          {/* GitHub */}
          <a
            href={github}
            aria-label="GitHub profile"
            target="_blank"
            rel="noopener noreferrer"
            className="reveal-item reveal-from-right flex flex-col items-center justify-center gap-3 rounded-2xl p-6 bg-white/8 border border-white/20 backdrop-blur-sm hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/10">
              <IconGitHub />
            </div>
            <div className="text-sm text-blue-100">GitHub</div>
            <div className="font-semibold text-white text-sm truncate">
              {typeof github === "string" ? github.replace("https://github.com/", "") : github}
            </div>
          </a>
        </div>

        {/* Action Buttons */}
        <div className="reveal-item reveal-from-bottom flex flex-wrap justify-center gap-4">
          {/* Start a Conversation */}
          <a
            href="https://calendly.com/sharmaadarsh345678/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white text-blue-700 font-semibold hover:bg-blue-100 transition"
            aria-label="Start a conversation (Calendly)"
          >
            {/* Chat Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 9.75h6.75m-6.75 3h3.375M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4.08-.87l-4.17 1.11a.75.75 0 01-.93-.93l1.11-4.17A9.77 9.77 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span>Start a Conversation</span>
          </a>

          {/* Download Resume */}
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-white font-semibold hover:bg-white/10 transition"
            aria-label="Download resume"
          >
            {/* Download Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-9-12v12m0 0l3.75-3.75M12 16.5l-3.75-3.75"
              />
            </svg>
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
}
