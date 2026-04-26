import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
    return (
        <section
            id="projects"
            data-testid="projects-section"
            className="relative py-24 md:py-32"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
                    <div>
                        <p className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-blue-400">
                            Selected work
                        </p>
                        <h2 className="font-display mt-4 text-3xl md:text-5xl font-semibold tracking-tight leading-tight max-w-2xl">
                            Products our team has shipped.
                        </h2>
                    </div>
                    <p className="max-w-md text-base md:text-lg text-slate-400">
                        A snapshot of recent engagements across fintech, healthcare,
                        commerce and industry.
                    </p>
                </div>

                <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
                    data-testid="projects-grid"
                >
                    {projects.map((p, i) => (
                        <motion.a
                            key={p.id}
                            href={p.link || "#"}
                            target={p.link ? "_blank" : undefined}
                            rel={p.link ? "noopener noreferrer" : undefined}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.55, delay: i * 0.04 }}
                            data-testid={`project-card-${p.id}`}
                            className="group block overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-md hover:border-blue-500/40 transition-all"
                        >
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <img
                                    src={p.image}
                                    alt={p.title}
                                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                                <div className="absolute top-4 left-4 flex items-center gap-2">
                                    <span className="rounded-full bg-blue-600/90 text-white text-[11px] uppercase tracking-[0.16em] font-semibold px-2.5 py-1">
                                        {p.category}
                                    </span>
                                    <span className="rounded-full bg-slate-950/70 border border-white/10 text-slate-200 text-[11px] font-mono px-2.5 py-1">
                                        {p.year}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6 md:p-8">
                                <div className="flex items-start justify-between gap-4">
                                    <h3 className="font-display text-xl md:text-2xl font-semibold text-white group-hover:text-blue-300 transition">
                                        {p.title}
                                    </h3>
                                    <ArrowUpRight className="h-5 w-5 text-slate-400 group-hover:text-blue-400 transition" />
                                </div>
                                <p className="mt-3 text-slate-400 leading-relaxed">
                                    {p.description}
                                </p>
                                <ul className="mt-5 flex flex-wrap gap-2">
                                    {p.tags.map((t) => (
                                        <li
                                            key={t}
                                            className="rounded-md border border-white/10 bg-slate-950/60 px-2.5 py-1 text-xs text-slate-300 font-mono"
                                        >
                                            {t}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.a>
                    ))}
                </div>

                <p className="mt-10 text-sm text-slate-500 font-mono">
                    {/* Tip: edit /app/frontend/src/data/projects.js to manage this list. */}
                    Manage projects directly in <span className="text-slate-300">src/data/projects.js</span>.
                </p>
            </div>
        </section>
    );
}
