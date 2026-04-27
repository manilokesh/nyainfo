import React from "react";
import { motion } from "framer-motion";
import Blob from "@/components/Blob";
import { site } from "@/data/site";

export default function Process() {
    return (
        <section
            id="process"
            data-testid="process-section"
            className="relative py-24 md:py-32 overflow-hidden bg-brand-softer"
        >
            <Blob
                variant={2}
                soft
                className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] opacity-70"
            />
            <Blob
                variant={1}
                className="absolute bottom-0 -right-32 w-[400px] opacity-15"
            />

            <div className="relative max-w-7xl mx-auto px-6 md:px-10">
                <div className="max-w-3xl">
                    <p className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-brand">
                        How we work
                    </p>
                    <h2 className="font-display mt-4 text-3xl md:text-5xl font-bold tracking-tight leading-tight text-slate-900">
                        A clear path from idea to production.
                    </h2>
                    <p className="mt-5 text-base md:text-lg text-slate-600 leading-relaxed">
                        Every engagement runs on the same five-step rhythm —
                        predictable, transparent and built around demoable progress
                        every week.
                    </p>
                </div>

                <ol
                    className="relative mt-16 grid grid-cols-1 md:grid-cols-5 gap-6"
                    data-testid="process-steps"
                >
                    {site.process.map((step, i) => (
                        <motion.li
                            key={step.step}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.5, delay: i * 0.06 }}
                            data-testid={`process-step-${i}`}
                            className="relative rounded-3xl border border-slate-200 bg-white p-6 md:p-7 hover:border-brand/40 hover:shadow-[0_18px_45px_-20px_rgba(15,23,42,0.2)] transition"
                        >
                            <div className="font-mono text-xs text-brand tracking-[0.2em] font-bold">
                                STEP {step.step}
                            </div>
                            <h3 className="font-display mt-3 text-xl font-bold text-slate-900">
                                {step.title}
                            </h3>
                            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                                {step.desc}
                            </p>
                            <div className="absolute top-4 right-4 h-9 w-9 rounded-full bg-brand text-white flex items-center justify-center font-display font-bold text-sm shadow-brand">
                                {i + 1}
                            </div>
                        </motion.li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
