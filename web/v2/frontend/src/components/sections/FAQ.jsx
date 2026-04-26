import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { site } from "@/data/site";

export default function FAQ() {
    return (
        <section
            id="faq"
            data-testid="faq-section"
            className="relative py-24 md:py-32 border-t border-white/5"
        >
            <div className="max-w-3xl mx-auto px-6 md:px-10">
                <p className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-blue-400">
                    FAQ
                </p>
                <h2 className="font-display mt-4 text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
                    Questions, answered.
                </h2>

                <Accordion
                    type="single"
                    collapsible
                    className="mt-12 w-full"
                    data-testid="faq-accordion"
                >
                    {site.faqs.map((f, i) => (
                        <AccordionItem
                            key={i}
                            value={`item-${i}`}
                            data-testid={`faq-item-${i}`}
                            className="border-b border-white/10"
                        >
                            <AccordionTrigger className="text-left text-base md:text-lg font-medium text-white hover:text-blue-300 hover:no-underline py-5">
                                {f.q}
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-400 leading-relaxed text-base">
                                {f.a}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
