import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github } from "lucide-react";
import { site } from "@/data/site";

export default function Team() {
    return (
        <section
            id="team"
            data-testid="team-section"
            className="relative py-24 md:py-32 border-t border-white/5"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="max-w-3xl">
                    <p className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-blue-400">
                        The team
                    </p>
                    <h2 className="font-display mt-4 text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
                        Senior engineers, hands on the keyboard.
                    </h2>
                    <p className="mt-5 text-base md:text-lg text-slate-400 leading-relaxed">
                        No layered account managers. You work directly with the people
                        building your product.
                    </p>
                </div>

                <div
                    className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
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
                            className="group rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-md overflow-hidden hover:border-blue-500/40 transition"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden">
                                <img
                                    src={m.avatar}
                                    alt={m.name}
                                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                                    <span className="text-xs uppercase tracking-[0.18em] text-blue-300 font-semibold">
                                        {m.role}
                                    </span>
                                    <div className="flex gap-2">
                                        <span className="h-7 w-7 rounded-full bg-slate-950/70 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white">
                                            <Linkedin className="h-3.5 w-3.5" />
                                        </span>
                                        <span className="h-7 w-7 rounded-full bg-slate-950/70 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white">
                                            <Github className="h-3.5 w-3.5" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-5">
                                <h3 className="font-display text-lg font-semibold text-white">
                                    {m.name}
                                </h3>
                                <p className="mt-1 text-sm text-slate-400">{m.bio}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
