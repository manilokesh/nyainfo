import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { site } from "@/data/site";

const TECH_IMG = "/globe1.png";
export default function Hero() {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative isolate overflow-hidden pt-28 md:pt-32 pb-20 md:pb-28 bg-white"
    >
      {/* Soft wavy background shapes (right-hand side) */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        className="absolute inset-0 -z-10 w-full h-full"
      >
        <defs>
          <linearGradient id="heroWave" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="hsl(var(--brand-soft))" />
            <stop
              offset="100%"
              stopColor="hsl(var(--brand-softer))"
              stopOpacity="0"
            />
          </linearGradient>
        </defs>
        <path
          fill="url(#heroWave)"
          d="M1440,0 L1440,820 C1240,860 1080,720 920,760 C760,800 620,900 420,860 C260,830 120,740 0,720 L0,0 Z"
        />
        <path
          fill="hsl(var(--brand-softer))"
          opacity="0.7"
          d="M1440,200 C1280,260 1140,180 980,260 C820,340 700,260 560,300 C440,335 280,310 80,360 L0,380 L0,0 L1440,0 Z"
        />
      </svg>

      {/* Soft Tamil "ஞ" (nya) watermark */}
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute right-[2vw] top-[14%] text-brand opacity-[0.05] font-bold leading-none"
        style={{
          fontFamily:
            '"Latha", "Nirmala UI", "Noto Sans Tamil", "Quicksand", sans-serif',
          fontSize: "clamp(280px, 46vw, 720px)",
        }}
      >
        ஞ
      </span>

      {/* Vertical social rail (desktop only) */}
      <aside
        data-testid="hero-social-rail"
        className="hidden lg:flex flex-col items-center gap-5 absolute left-0 top-1/2 -translate-y-1/2 bg-brand text-white px-3 py-7 rounded-r-3xl shadow-brand z-10"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] font-bold rotate-180 [writing-mode:vertical-rl]">
          Follow
        </span>
        {[
          { Icon: Facebook, href: "#", label: "Facebook" },
          { Icon: Twitter, href: "#", label: "Twitter" },
          { Icon: Instagram, href: "#", label: "Instagram" },
          { Icon: Linkedin, href: "#", label: "LinkedIn" },
        ].map(({ Icon, href, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="opacity-80 hover:opacity-100 transition"
          >
            <Icon className="h-4 w-4" />
          </a>
        ))}
      </aside>

      {/* Decorative top-left "hanging" line + dot */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-[8%] hidden md:block"
      >
        <div className="w-px h-32 bg-brand/40 mx-auto" />
        <div className="h-3 w-3 rounded-full bg-brand mx-auto mt-1 shadow-brand" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:pl-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center relative">
        {/* LEFT — copy */}
        <div className="lg:col-span-6 relative z-[1]">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-4 py-1.5 text-xs font-bold text-brand shadow-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            FULL-STACK · ENGINEERING · STUDIO
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-display mt-7 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-slate-900"
            data-testid="hero-heading"
          >
            <span className="text-brand">Production-Grade</span>
            <br />
            Full-Stack Products.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-7 max-w-xl text-base md:text-lg text-slate-500 leading-[1.9]"
          >
            {site.brand.name} is a senior engineering team that designs, ships
            and scales web applications end-to-end — from the React UI down to
            the SQL Server, Oracle or MongoDB it runs on.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              data-testid="hero-primary-cta"
              className="group inline-flex items-center gap-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold pl-7 pr-2 py-2 transition shadow-[0_18px_40px_-15px_rgba(15,23,42,0.5)]"
            >
              <span>Start a project</span>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand group-hover:bg-brand-strong transition">
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
            <a
              href="#projects"
              data-testid="hero-secondary-cta"
              className="inline-flex items-center gap-2 rounded-full text-slate-700 hover:text-brand font-semibold px-3 py-3 transition underline-offset-8 hover:underline decoration-2 decoration-brand"
            >
              See our work
            </a>
          </motion.div>

          {/* Mobile-only social row */}
          <div className="mt-10 flex lg:hidden items-center gap-4 text-slate-500 text-sm">
            <span className="font-semibold text-slate-600">Follow us</span>
            <span className="h-px w-8 bg-slate-300" />
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="hover:text-brand transition"
                aria-label="social"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT — big oval visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="lg:col-span-6 relative"
          data-testid="hero-visual"
        >
          <div className="relative mx-auto w-full max-w-[560px] aspect-[5/6]">
            {/* Outer halo */}
            <div
              className="absolute inset-4 rounded-[50%] bg-brand-soft"
              style={{
                boxShadow:
                  "inset 0 30px 80px rgba(255,255,255,0.6), 0 30px 80px -25px hsl(var(--brand) / 0.25)",
              }}
            />
            {/* Inner white egg */}
            <div className="absolute inset-10 rounded-[50%] bg-white shadow-[0_30px_70px_-20px_rgba(15,23,42,0.18)]" />
            {/* Tech "device" */}
            <div className="absolute inset-x-16 top-[18%] bottom-[16%] rounded-[2.4rem] overflow-hidden border-[10px] border-slate-900 shadow-[0_24px_60px_-15px_rgba(15,23,42,0.45)] bg-slate-900">
              <img
                src={TECH_IMG}
                alt="Abstract tech network visualisation"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Scanline accent */}
              <div
                className="absolute inset-0 opacity-25 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 0%, hsl(var(--brand) / 0.5) 50%, transparent 100%)",
                  maskImage:
                    "linear-gradient(180deg, transparent 0, #000 8%, #000 92%, transparent 100%)",
                }}
              />
            </div>
            {/* Floating chip — top right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -top-2 right-2 md:right-0 rounded-2xl bg-white border border-slate-200 px-4 py-2.5 shadow-[0_18px_40px_-18px_rgba(15,23,42,0.25)] animate-float"
            >
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-100" />
                <div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500 font-bold">
                    Live
                  </div>
                  <div className="font-display text-sm font-bold text-slate-900">
                    12 active builds
                  </div>
                </div>
              </div>
            </motion.div>
            {/* Floating chip — bottom left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute -bottom-3 left-0 md:left-2 rounded-2xl bg-brand text-white px-4 py-2.5 shadow-brand animate-float"
              style={{ animationDelay: "1.2s" }}
            >
              <div className="text-[10px] uppercase tracking-[0.18em] text-white/80 font-bold">
                Retention
              </div>
              <div className="font-display text-sm font-bold">
                98% · 120+ shipped
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Stat strip — kept, restyled to fit the new aesthetic */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:pl-24 mt-16 md:mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 rounded-3xl bg-white/80 backdrop-blur border border-slate-200 shadow-[0_18px_60px_-30px_rgba(15,23,42,0.18)] overflow-hidden divide-x divide-slate-100"
          data-testid="hero-stats"
        >
          {site.stats.map((s) => (
            <div key={s.label} className="px-6 py-7 md:py-9 text-center">
              <div className="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                {s.value}
              </div>
              <div className="mt-1 text-xs md:text-sm uppercase tracking-[0.18em] text-slate-500 font-bold">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
