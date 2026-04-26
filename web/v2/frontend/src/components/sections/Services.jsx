import React from "react";
import { motion } from "framer-motion";
import {
    Layers,
    MonitorSmartphone,
    ServerCog,
    Database,
    Cloud,
    ShieldCheck,
} from "lucide-react";
import { site } from "@/data/site";

const ICONS = [Layers, MonitorSmartphone, ServerCog, Database, Cloud, ShieldCheck];

export default function Services() {
    return (
        <section
            id="services"
            data-testid="services-section"
            className="relative py-24 md:py-32"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
                    <div>
                        <p className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-blue-400">
                            What we do
                        </p>
                        <h2 className="font-display mt-4 text-3xl md:text-5xl font-semibold tracking-tight leading-tight max-w-2xl">
                            One team. The whole stack.
                        </h2>
                    </div>
                    <p className="max-w-md text-base md:text-lg text-slate-400 leading-relaxed">
                        We focus exclusively on full-stack web applications — so every
                        layer, from pixels to persistence, is engineered with the same
                        senior craft.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
                    {site.services.map((s, i) => {
                        const Icon = ICONS[i % ICONS.length];
                        return (
                            <motion.div
                                key={s.title}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                data-testid={`service-card-${i}`}
                                className={`${s.span} group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-md hover:border-blue-500/40 transition-all duration-300 p-8`}
                            >
                                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-600/10 blur-3xl opacity-0 group-hover:opacity-100 transition" />
                                <Icon className="h-7 w-7 text-blue-400" />
                                <h3 className="font-display mt-6 text-xl md:text-2xl font-semibold text-white">
                                    {s.title}
                                </h3>
                                <p className="mt-3 text-slate-400 leading-relaxed">
                                    {s.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
