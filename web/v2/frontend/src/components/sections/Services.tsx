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
            className="relative py-24 md:py-32 bg-white"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
                    <div>
                        <p className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-brand">
                            What we do
                        </p>
                        <h2 className="font-display mt-4 text-3xl md:text-5xl font-bold tracking-tight leading-tight max-w-2xl text-slate-900">
                            One team. The whole stack.
                        </h2>
                    </div>
                    <p className="max-w-md text-base md:text-lg text-slate-600 leading-relaxed">
                        We focus exclusively on full-stack web applications — so every
                        layer, from pixels to persistence, is engineered with the same
                        senior craft.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-7">
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
                                className={`${s.span} group relative overflow-hidden rounded-3xl border border-slate-200 bg-white hover:border-brand/40 hover:shadow-[0_24px_60px_-30px_rgba(15,23,42,0.18)] transition-all duration-300 p-7 md:p-9`}
                            >
                                <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-brand-soft opacity-0 group-hover:opacity-100 transition" />
                                <div className="relative">
                                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                                        <Icon className="h-6 w-6" />
                                    </span>
                                    <h3 className="font-display mt-5 text-xl md:text-2xl font-bold text-slate-900">
                                        {s.title}
                                    </h3>
                                    <p className="mt-3 text-slate-600 leading-relaxed">
                                        {s.desc}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
