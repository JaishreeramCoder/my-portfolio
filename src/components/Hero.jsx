import React, { useEffect, useState } from "react";
import { hero } from "../data/hero";

export default function Hero() {
  // Roles and timing
  const roles = ["Data Scientist", "Competitive Programmer"];
  const TYPING_SPEED = 80; // ms per character when typing
  const DELETING_SPEED = 40; // ms per character when deleting
  const PAUSE_AFTER_TYPING = 1200; // ms pause after a word is fully typed

  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timer;

    if (!isDeleting) {
      // Typing
      if (displayText.length < current.length) {
        timer = setTimeout(
          () => setDisplayText(current.slice(0, displayText.length + 1)),
          TYPING_SPEED
        );
      } else {
        timer = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPING);
      }
    } else {
      // Deleting
      if (displayText.length > 0) {
        timer = setTimeout(
          () => setDisplayText(current.slice(0, displayText.length - 1)),
          DELETING_SPEED
        );
      } else {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      aria-label="Home"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center text-center bg-gradient-to-br from-sky-50 via-white to-slate-50"
    >
      {/* Decorative blurred color blobs (continuous background, no box) */}
      <div
        aria-hidden
        className="absolute -left-20 -top-16 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-indigo-400 via-sky-500 to-cyan-400 opacity-30 blur-3xl transform rotate-12 animate-[pulse_6s_ease-in-out_infinite]"
      />
      <div
        aria-hidden
        className="absolute -right-24 top-1/4 w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-fuchsia-400 via-violet-500 to-indigo-600 opacity-25 blur-3xl transform -rotate-6 animate-[pulse_8s_ease-in-out_infinite]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-40 pointer-events-none bg-gradient-to-t from-white/60 via-transparent to-transparent"
      />

      {/* Main content - no white card, continuous look */}
      <div className="relative z-10 px-6 sm:px-10 lg:px-20 max-w-5xl w-full">
        {/* Name with gradient text */}
        <h1 className="mx-auto font-extrabold leading-tight tracking-tight text-[3.5rem] sm:text-[4.75rem] md:text-[6rem] lg:text-[6.5rem]">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-600 via-indigo-600 to-fuchsia-600 drop-shadow-lg">
            Adarsh Sharma
          </span>
        </h1>

        {/* Typewriter role line */}
        <div className="mt-4 sm:mt-6">
          <p className="mx-auto text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-700 flex items-center justify-center gap-3">
            <span className="text-sm sm:text-base opacity-80">I am a</span>

            <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-sky-600 to-emerald-500">
              {displayText}
            </span>

            {/* Blinking cursor */}
            <span
              aria-hidden
              className="inline-block ml-1 h-[1.15em] w-1 rounded-sm bg-slate-800 dark:bg-white animate-[blink_1s_steps(2,end)_infinite]"
            />
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={hero?.resume || "/resume.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 text-base sm:text-lg font-bold rounded-full shadow-lg transition-transform transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-sky-300 bg-gradient-to-r from-sky-600 to-indigo-600 text-white"
            aria-label="Download resume of Adarsh Sharma"
          >
            Download Resume
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 text-sm sm:text-base font-medium rounded-full border border-slate-200 bg-white/40 backdrop-blur-sm text-slate-900 shadow-sm hover:bg-white/60 transition"
          >
            Contact
          </a>
        </div>

        {/* Small hint / scroll indicator */}
        <div className="mt-14 flex items-center justify-center">
          <div className="flex flex-col items-center gap-2 text-slate-600 opacity-80">
            <span className="text-sm">Scroll down</span>
            <svg
              className="w-6 h-6 animate-bounce"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <path d="M12 5v14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M19 12l-7 7-7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* Decorative SVG wave at the bottom to make the section flow into the next one */}
      <svg
        className="absolute bottom-0 left-0 w-full h-28 md:h-36"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          fill="rgba(14,165,233,0.06)"
          d="M0,192L60,186.7C120,181,240,171,360,149.3C480,128,600,96,720,96C840,96,960,128,1080,154.7C1200,181,1320,203,1380,213.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
      </svg>
    </section>
  );
}
