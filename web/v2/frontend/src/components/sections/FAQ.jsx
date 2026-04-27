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
            className="relative py-24 md:py-32 bg-brand-softer"
        >
            <div className="max-w-3xl mx-auto px-6 md:px-10">
                <p className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-brand">
                    FAQ
                </p>
                <h2 className="font-display mt-4 text-3xl md:text-5xl font-bold tracking-tight leading-tight text-slate-900">
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
                            className="border-b border-slate-200"
                        >
                            <AccordionTrigger className="text-left text-base md:text-lg font-bold text-slate-900 hover:text-brand hover:no-underline py-5">
                                {f.q}
                            </AccordionTrigger>
                            <AccordionContent className="text-slate-600 leading-relaxed text-base">
                                {f.a}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
