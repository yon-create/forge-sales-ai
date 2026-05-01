"use client";

import { useState, useEffect } from "react";

const ForgeLogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16 2L4 10V22L16 30L28 22V10L16 2Z"
      fill="rgba(255,69,0,0.15)"
      stroke="#FF4500"
      strokeWidth="1.5"
    />
    <path
      d="M20 9H13L10 16H15L12 23L22 14H17L20 9Z"
      fill="#FF4500"
    />
  </svg>
);

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <ForgeLogo />
          <span className="font-syne font-800 text-xl tracking-widest text-white group-hover:text-accent transition-colors">
            FORGE
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {["Features", "How It Works", "Results", "Pricing"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className="font-syne text-sm font-500 text-white/50 hover:text-white transition-colors tracking-wide"
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#demo"
            className="btn-ghost px-5 py-2 text-sm rounded"
          >
            Log In
          </a>
          <a
            href="#demo"
            className="btn-primary px-5 py-2 text-sm rounded"
          >
            Book Demo
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface border-b border-white/5 px-6 py-4 flex flex-col gap-4">
          {["Features", "How It Works", "Results", "Pricing"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className="font-syne text-sm font-500 text-white/60 hover:text-white transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
          <a href="#demo" className="btn-primary px-5 py-2.5 text-sm rounded text-center mt-2">
            Book Demo
          </a>
        </div>
      )}
    </nav>
  );
}
