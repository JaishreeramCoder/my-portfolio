// src/components/Header.jsx
import React, { useEffect, useState } from "react";
import adarshDp from "../data/adarsh_dp.jpg";
import hamburgerIcon from "../data/hamburger.png";
import crossIcon from "../data/cross.png";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "research", label: "Research" },
  { id: "cp", label: "Competitive" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const headerRef = React.useRef(null);
  const [activeId, setActiveId] = useState("home");
  const [isTop, setIsTop] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -55% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, observerOptions);

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function onScroll() {
      setIsTop(window.scrollY < 6);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // prevent layout jump when switching between absolute (overlay) and sticky (in-flow)
  useEffect(() => {
    const hdr = headerRef.current;
    if (!hdr) return;
    const prev = document.body.style.paddingTop;
    if (!isTop) {
      document.body.style.paddingTop = `${hdr.getBoundingClientRect().height}px`;
    } else {
      document.body.style.paddingTop = "0px";
    }

    return () => {
      document.body.style.paddingTop = prev;
    };
  }, [isTop]);

  // prevent body scroll when modal is open (existing modal behavior)
  useEffect(() => {
    if (modalOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [modalOpen]);

  // prevent body scroll when mobile menu is open + restore when closed
  useEffect(() => {
    if (mobileOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [mobileOpen]);

  // close modal on ESC
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") {
        setModalOpen(false);
        setMobileOpen(false);
      }
    }
    if (modalOpen || mobileOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalOpen, mobileOpen]);

  // smooth scroll handler
  function handleNavClick(e, id) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `#${id}`);
      setActiveId(id);
      setMobileOpen(false); // close mobile menu if open
    }
  }

  // measure header height to offset the fixed overlay content (so header stays visible)
  const headerHeight =
    headerRef.current?.getBoundingClientRect().height ?? 0;

  return (
    <>
      <header
        className={`fixed z-50 transition-colors duration-200 ${
          isTop
            ? "top-0 left-0 w-full bg-transparent border-transparent backdrop-blur-0 shadow-none"
            : "top-0 w-full bg-white/60 backdrop-blur-md border-b border-gray-200 shadow-sm"
        }`}
        role="banner"
        ref={headerRef}
      >
        <div className="max-w-7xl mx-auto flex items-center px-4 md:px-6 py-2">
          {/* Left: avatar + name (shorter height: smaller image and smaller text) */}
          <div className="flex items-center gap-3">
            {/* clickable image launches modal */}
            <button
              onClick={() => setModalOpen(true)}
              aria-label="Open profile image"
              className="p-0 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 cursor-pointer"
            >
              <img
                src={adarshDp}
                alt="Adarsh DP"
                className="w-9 h-9 rounded-full object-cover shadow-sm border-1 border-sky-500"
              />
            </button>

            <div
              className="text-xl md:text-2xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-600 via-indigo-600 to-fuchsia-600"
              style={{ fontWeight: 800 }}
            >
              Adarsh Sharma
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="ml-auto hidden sm:flex items-center gap-2 md:gap-4"
            role="navigation"
            aria-label="Main navigation"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`relative group text-sm font-medium px-3 py-1.5 rounded-md transition-colors flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white/70 ${
                    isActive ? "text-sky-600" : "text-gray-700 hover:text-sky-600"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span className="relative z-10">{item.label}</span>

                  {/* animated underline that grows on hover / stays visible when active */}
                  <span
                    className={`absolute left-1/2 -bottom-2 h-0.5 rounded-full bg-sky-600 transform -translate-x-1/2 transition-all duration-300 ${
                      isActive ? "w-8" : "w-0 group-hover:w-8"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Mobile: hamburger */}
          <div className="ml-auto sm:hidden flex items-center">
            <button
              onClick={() => setMobileOpen((s) => !s)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 transition-transform ${
                mobileOpen ? "rotate-90" : ""
              }`}
            >
              <span className="sr-only">Open main menu</span>
              <img
                src={mobileOpen ? crossIcon : hamburgerIcon}
                alt=""
                aria-hidden="true"
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay (fixed) */}
      {/*
        When mobileOpen is true:
        - We render a fixed overlay that covers the viewport with a blurred/dim backdrop.
        - The menu panel itself is scrollable (if many items).
        - Body scrolling is disabled (useEffect above) so only the menu scrolls.
      */}
      {mobileOpen && (
        <div
          className="sm:hidden fixed inset-0 z-40 flex items-start justify-center"
          aria-hidden={!mobileOpen ? "true" : "false"}
        >
          {/* backdrop: clicking it closes menu. Backdrop blurs background content */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />

          {/* menu panel: sits above backdrop; allow internal scrolling */}
          <div
            className="relative w-full max-w-md mx-4 mt-0 max-h-screen overflow-auto"
            style={{
              // push content below the header so header remains visible on top
              paddingTop: headerHeight ? `${headerHeight + 8}px` : "64px",
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
          >
            <div
              className={`rounded-md overflow-hidden shadow-xl ${
                isTop ? "bg-transparent" : "bg-white/95"
              }`}
            >
              <nav className="flex flex-col gap-1 p-4">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeId === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => handleNavClick(e, item.id)}
                      className={`block px-3 py-3 rounded-md text-base font-medium transition-all duration-200 ${
                        isActive
                          ? "text-sky-400 underline underline-offset-4"
                          : mobileOpen
                          ? "text-gray-300 hover:text-sky-300 hover:underline hover:underline-offset-4"
                          : "text-gray-700 hover:text-sky-600 hover:underline hover:underline-offset-4"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      )}

      {/* Image modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-60 flex items-center justify-center">
          {/* backdrop: clicking it closes modal */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setModalOpen(false)}
          />

          <div className="relative z-50 max-w-[90%] max-h-[90%]">
            {/* close button */}
            <button
              onClick={() => setModalOpen(false)}
              aria-label="Close image modal"
              className="absolute -top-3 -right-3 bg-white rounded-full p-2 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <div className="rounded-md overflow-hidden">
              <img
                src={adarshDp}
                alt="Adarsh DP large"
                className="max-w-full max-h-[80vh] object-contain block"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
