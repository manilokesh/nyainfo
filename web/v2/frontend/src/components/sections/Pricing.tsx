import React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { site } from "@/data/site";

export default function Pricing() {
    return (
        <section
            id="pricing"
            data-testid="pricing-section"
            className="relative py-24 md:py-32 bg-white"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="max-w-3xl">
                    <p className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-brand">
                        Engagement models
                    </p>
                    <h2 className="font-display mt-4 text-3xl md:text-5xl font-bold tracking-tight leading-tight text-slate-900">
                        Pricing that scales with you.
                    </h2>
                    <p className="mt-5 text-base md:text-lg text-slate-600 leading-relaxed">
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
                            className={`relative rounded-3xl p-8 md:p-10 transition-all ${
                                p.highlighted
                                    ? "bg-brand text-white border-0 lg:scale-[1.04] shadow-brand-lg"
                                    : "bg-white border border-slate-200 hover:border-brand/40 hover:shadow-[0_24px_60px_-30px_rgba(15,23,42,0.18)]"
                            }`}
                        >
                            {p.highlighted && (
                                <span className="absolute -top-3 left-8 inline-flex items-center gap-1.5 rounded-full bg-white text-brand px-3 py-1 text-[11px] uppercase tracking-[0.18em] font-bold shadow-md">
                                    <Sparkles className="h-3 w-3" /> Most popular
                                </span>
                            )}
                            <h3
                                className={`font-display text-2xl font-bold ${p.highlighted ? "text-white" : "text-slate-900"}`}
                            >
                                {p.tier}
                            </h3>
                            <div className="mt-5 flex items-baseline gap-2">
                                <span
                                    className={`font-display text-4xl md:text-5xl font-bold tracking-tight ${p.highlighted ? "text-white" : "text-slate-900"}`}
                                >
                                    {p.price}
                                </span>
                                <span
                                    className={`text-sm ${p.highlighted ? "text-white/80" : "text-slate-500"}`}
                                >
                                    {p.cadence}
                                </span>
                            </div>
                            <p
                                className={`mt-4 leading-relaxed ${p.highlighted ? "text-white/90" : "text-slate-600"}`}
                            >
                                {p.blurb}
                            </p>
                            <ul className="mt-7 space-y-3">
                                {p.features.map((f) => (
                                    <li
                                        key={f}
                                        className={`flex items-start gap-3 text-sm ${p.highlighted ? "text-white" : "text-slate-700"}`}
                                    >
                                        <span
                                            className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                                                p.highlighted
                                                    ? "bg-white/20"
                                                    : "bg-brand-soft"
                                            }`}
                                        >
                                            <Check
                                                className={`h-3 w-3 ${p.highlighted ? "text-white" : "text-brand"}`}
                                            />
                                        </span>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="#contact"
                                data-testid={`pricing-cta-${p.tier.toLowerCase()}`}
                                className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-bold transition ${
                                    p.highlighted
                                        ? "bg-white text-brand-strong hover:bg-slate-50"
                                        : "border-2 border-slate-200 hover:border-brand text-slate-800 hover:text-brand bg-white"
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
