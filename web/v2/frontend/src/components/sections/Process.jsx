import React from "react";
import { motion } from "framer-motion";
import { site } from "@/data/site";

const processBg =
    "https://static.prod-images.emergentagent.com/jobs/db8d8998-f459-41df-a2a1-eafb97a1d167/images/83fcc02706e0b280281c2d825c851010674cc9cf59308c138c4b94540be87850.png";

export default function Process() {
    return (
        <section
            id="process"
            data-testid="process-section"
            className="relative py-24 md:py-32 overflow-hidden"
        >
            <div className="absolute inset-0 -z-10">
                <img
                    src={processBg}
                    alt=""
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/85 to-slate-950" />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="max-w-3xl">
                    <p className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-blue-400">
                        How we work
                    </p>
                    <h2 className="font-display mt-4 text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
                        A clear path from idea to production.
                    </h2>
                    <p className="mt-5 text-base md:text-lg text-slate-400 leading-relaxed">
                        Every engagement runs on the same five-step rhythm — predictable,
                        transparent and built around demoable progress every week.
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
                            className="relative rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-md p-6 md:p-7 hover:border-blue-500/40 transition"
                        >
                            <div className="font-mono text-xs text-blue-400 tracking-[0.2em]">
                                STEP {step.step}
                            </div>
                            <h3 className="font-display mt-3 text-xl font-semibold text-white">
                                {step.title}
                            </h3>
                            <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                                {step.desc}
                            </p>
                            <div className="absolute top-4 right-4 h-8 w-8 rounded-full bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-300 font-mono text-xs">
                                {i + 1}
                            </div>
                        </motion.li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
