import React, { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import LogoMark from "@/components/LogoMark";
import { site } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-slate-200 shadow-[0_4px_24px_-12px_rgba(15,23,42,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <LogoMark size="md" />

        <nav
          className="hidden md:flex items-center gap-8"
          data-testid="navbar-links"
        >
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-testid={`nav-link-${item.label.toLowerCase()}`}
              className="relative text-sm font-semibold text-slate-700 hover:text-brand transition-colors group"
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 right-0 mx-auto h-0.5 w-0 bg-brand rounded-full transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            data-testid="navbar-cta"
            className="group inline-flex items-center gap-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold pl-5 pr-1.5 py-1.5 transition shadow-[0_12px_30px_-12px_rgba(15,23,42,0.5)]"
          >
            <span>Start a project</span>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand group-hover:bg-brand-strong transition">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </a>
        </div>

        <button
          type="button"
          data-testid="navbar-mobile-toggle"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-full p-2 text-slate-700 border border-slate-200 bg-white"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div
          data-testid="navbar-mobile-menu"
          className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-xl"
        >
          <div className="px-6 py-6 flex flex-col gap-4">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-slate-700 hover:text-brand text-base font-medium"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand hover:bg-brand-strong text-white text-sm font-semibold px-5 py-3 shadow-brand"
            >
              Start a project <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
