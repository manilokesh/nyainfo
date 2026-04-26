import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { site } from "@/data/site";

const heroBg =
    "https://static.prod-images.emergentagent.com/jobs/db8d8998-f459-41df-a2a1-eafb97a1d167/images/65302197e2caa47cc89c4e54851f2999a073f0540e41781deed2f2e8988b861b.png";

export default function Hero() {
    return (
        <section
            id="top"
            data-testid="hero-section"
            className="relative isolate min-h-[100vh] overflow-hidden pt-28 md:pt-36 pb-20 md:pb-28"
        >
            {/* Background image with overlays */}
            <div className="absolute inset-0 -z-20">
                <img
                    src={heroBg}
                    alt=""
                    className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/80 to-slate-950" />
            </div>
            <div className="absolute inset-0 -z-10 bg-grid-slate opacity-50" />
            <div className="absolute -top-20 -left-20 w-[480px] h-[480px] bg-blue-600/20 rounded-full blur-3xl animate-blob -z-10" />
            <div className="absolute top-40 -right-24 w-[380px] h-[380px] bg-cyan-500/15 rounded-full blur-3xl animate-blob -z-10" />

            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-300"
                >
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>
                        Full-stack engineering studio — React · Python · Java · .NET
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.05 }}
                    className="font-display mt-6 text-5xl md:text-7xl lg:text-[88px] font-bold tracking-tighter leading-[1.02] max-w-5xl"
                    data-testid="hero-heading"
                >
                    We build{" "}
                    <span className="text-gradient-steel">production-grade</span>{" "}
                    full-stack products.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="mt-6 max-w-2xl text-lg md:text-xl text-slate-400 leading-relaxed"
                >
                    {site.brand.name} is a senior engineering team that designs, ships
                    and scales web applications end-to-end — from the React UI down to
                    the SQL Server, Oracle or MongoDB it runs on.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                    className="mt-10 flex flex-wrap items-center gap-4"
                >
                    <a
                        href="#contact"
                        data-testid="hero-primary-cta"
                        className="inline-flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-3 transition shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:shadow-[0_0_40px_rgba(59,130,246,0.65)]"
                    >
                        Start a project <ArrowUpRight className="h-4 w-4" />
                    </a>
                    <a
                        href="#projects"
                        data-testid="hero-secondary-cta"
                        className="inline-flex items-center gap-2 rounded-lg border border-white/20 hover:border-white text-white font-medium px-6 py-3 transition"
                    >
                        See our work
                    </a>
                </motion.div>

                {/* Stat strip */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.35 }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden bg-white/10 border border-white/10"
                    data-testid="hero-stats"
                >
                    {site.stats.map((s) => (
                        <div
                            key={s.label}
                            className="bg-slate-950/80 backdrop-blur-xl px-6 py-6 md:py-8"
                        >
                            <div className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white">
                                {s.value}
                            </div>
                            <div className="mt-1 text-xs md:text-sm uppercase tracking-[0.18em] text-slate-400">
                                {s.label}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
