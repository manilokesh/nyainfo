import React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { site } from "@/data/site";

export default function Pricing() {
    return (
        <section
            id="pricing"
            data-testid="pricing-section"
            className="relative py-24 md:py-32"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="max-w-3xl">
                    <p className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-blue-400">
                        Engagement models
                    </p>
                    <h2 className="font-display mt-4 text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
                        Pricing that scales with you.
                    </h2>
                    <p className="mt-5 text-base md:text-lg text-slate-400 leading-relaxed">
                        Pick a discovery sprint, a senior delivery pod, or a full-blown
                        platform engagement. Everything is transparent and senior-led.
                    </p>
                </div>

                <div
                    className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8"
                    data-testid="pricing-grid"
                >
                    {site.pricing.map((p, i) => (
                        <motion.div
                            key={p.tier}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.55, delay: i * 0.05 }}
                            data-testid={`pricing-card-${p.tier.toLowerCase()}`}
                            className={`relative rounded-2xl border p-8 md:p-10 transition-all ${
                                p.highlighted
                                    ? "border-blue-500/60 bg-gradient-to-b from-blue-600/10 to-slate-900/60 lg:scale-[1.04] glow-blue"
                                    : "border-white/10 bg-slate-900/40"
                            } backdrop-blur-md hover:border-blue-500/50`}
                        >
                            {p.highlighted && (
                                <span className="absolute -top-3 left-8 inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-3 py-1 text-[11px] uppercase tracking-[0.18em] font-semibold text-white">
                                    <Sparkles className="h-3 w-3" /> Most popular
                                </span>
                            )}
                            <h3 className="font-display text-2xl font-semibold text-white">
                                {p.tier}
                            </h3>
                            <div className="mt-5 flex items-baseline gap-2">
                                <span className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white">
                                    {p.price}
                                </span>
                                <span className="text-sm text-slate-400">
                                    {p.cadence}
                                </span>
                            </div>
                            <p className="mt-4 text-slate-400 leading-relaxed">
                                {p.blurb}
                            </p>
                            <ul className="mt-7 space-y-3">
                                {p.features.map((f) => (
                                    <li
                                        key={f}
                                        className="flex items-start gap-3 text-sm text-slate-200"
                                    >
                                        <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600/20 border border-blue-500/40">
                                            <Check className="h-3 w-3 text-blue-300" />
                                        </span>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="#contact"
                                data-testid={`pricing-cta-${p.tier.toLowerCase()}`}
                                className={`mt-8 inline-flex w-full items-center justify-center rounded-lg px-5 py-3 text-sm font-medium transition ${
                                    p.highlighted
                                        ? "bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                                        : "border border-white/20 hover:border-white text-white"
                                }`}
                            >
                                {p.cta}
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
