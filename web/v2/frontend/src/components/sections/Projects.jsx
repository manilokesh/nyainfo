import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
    return (
        <section
            id="projects"
            data-testid="projects-section"
            className="relative py-24 md:py-32 bg-white"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
                    <div>
                        <p className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-brand">
                            Selected work
                        </p>
                        <h2 className="font-display mt-4 text-3xl md:text-5xl font-bold tracking-tight leading-tight max-w-2xl text-slate-900">
                            Products our team has shipped.
                        </h2>
                    </div>
                    <p className="max-w-md text-base md:text-lg text-slate-600">
                        A snapshot of recent engagements across fintech, healthcare,
                        commerce and industry.
                    </p>
                </div>

                <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-8"
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
                            className="group block overflow-hidden rounded-3xl border border-slate-200 bg-white hover:border-brand/40 hover:shadow-[0_30px_70px_-30px_rgba(15,23,42,0.22)] transition-all"
                        >
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <img
                                    src={p.image}
                                    alt={p.title}
                                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4 flex items-center gap-2">
                                    <span className="rounded-full bg-brand text-white text-[11px] uppercase tracking-[0.16em] font-semibold px-3 py-1 shadow-brand">
                                        {p.category}
                                    </span>
                                    <span className="rounded-full bg-white/95 border border-slate-200 text-slate-700 text-[11px] font-mono px-2.5 py-1">
                                        {p.year}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6 md:p-8">
                                <div className="flex items-start justify-between gap-4">
                                    <h3 className="font-display text-xl md:text-2xl font-bold text-slate-900 group-hover:text-brand transition">
                                        {p.title}
                                    </h3>
                                    <ArrowUpRight className="h-5 w-5 text-slate-400 group-hover:text-brand transition" />
                                </div>
                                <p className="mt-3 text-slate-600 leading-relaxed">
                                    {p.description}
                                </p>
                                <ul className="mt-5 flex flex-wrap gap-2">
                                    {p.tags.map((t) => (
                                        <li
                                            key={t}
                                            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600 font-mono"
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
                    Manage projects directly in{" "}
                    <span className="text-slate-800 font-semibold">
                        src/data/projects.js
                    </span>
                    .
                </p>
            </div>
        </section>
    );
}
