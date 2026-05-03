import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github } from "lucide-react";
import { site } from "@/data/site";

export default function Team() {
    return (
        <section
            id="team"
            data-testid="team-section"
            className="relative py-24 md:py-32 bg-brand-softer"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="max-w-3xl">
                    <p className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-brand">
                        The team
                    </p>
                    <h2 className="font-display mt-4 text-3xl md:text-5xl font-bold tracking-tight leading-tight text-slate-900">
                        Senior engineers, hands on the keyboard.
                    </h2>
                    <p className="mt-5 text-base md:text-lg text-slate-600 leading-relaxed">
                        No layered account managers. You work directly with the people
                        building your product.
                    </p>
                </div>

                <div
                    className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7"
                    data-testid="team-grid"
                >
                    {site.team.map((m, i) => (
                        <motion.div
                            key={m.name}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                            data-testid={`team-card-${i}`}
                            className="group rounded-3xl border border-slate-200 bg-white overflow-hidden hover:border-brand/40 hover:shadow-[0_24px_60px_-30px_rgba(15,23,42,0.22)] transition"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden bg-brand-soft">
                                <img
                                    src={m.avatar}
                                    alt={m.name}
                                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/60 to-transparent" />
                                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                                    <span className="text-[11px] uppercase tracking-[0.18em] text-brand-strong font-bold bg-white/90 rounded-full px-3 py-1">
                                        {m.role}
                                    </span>
                                    <div className="flex gap-1.5">
                                        <span className="h-7 w-7 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-brand">
                                            <Linkedin className="h-3.5 w-3.5" />
                                        </span>
                                        <span className="h-7 w-7 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-brand">
                                            <Github className="h-3.5 w-3.5" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-5">
                                <h3 className="font-display text-lg font-bold text-slate-900">
                                    {m.name}
                                </h3>
                                <p className="mt-1 text-sm text-slate-600">{m.bio}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
