import React from "react";
import { Quote } from "lucide-react";
import { site } from "@/data/site";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export default function Testimonials() {
    return (
        <section
            id="testimonials"
            data-testid="testimonials-section"
            className="relative py-24 md:py-32 bg-white"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
                    <div>
                        <p className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-brand">
                            Trusted by teams
                        </p>
                        <h2 className="font-display mt-4 text-3xl md:text-5xl font-bold tracking-tight leading-tight max-w-2xl text-slate-900">
                            What our clients say.
                        </h2>
                    </div>
                </div>

                <Carousel
                    opts={{ align: "start", loop: true }}
                    className="w-full"
                    data-testid="testimonials-carousel"
                >
                    <CarouselContent>
                        {site.testimonials.map((t, i) => (
                            <CarouselItem
                                key={i}
                                className="md:basis-1/2 lg:basis-1/2"
                            >
                                <div
                                    data-testid={`testimonial-card-${i}`}
                                    className="h-full rounded-3xl border border-slate-200 bg-white p-8 md:p-10 shadow-[0_18px_45px_-25px_rgba(15,23,42,0.18)] hover:shadow-[0_28px_70px_-30px_rgba(15,23,42,0.25)] transition"
                                >
                                    <Quote className="h-8 w-8 text-brand" />
                                    <p className="mt-6 text-lg md:text-xl text-slate-700 leading-relaxed">
                                        &ldquo;{t.quote}&rdquo;
                                    </p>
                                    <div className="mt-8 flex items-center gap-4">
                                        <img
                                            src={t.avatar}
                                            alt={t.name}
                                            className="h-12 w-12 rounded-full object-cover ring-2 ring-brand/20"
                                        />
                                        <div>
                                            <div className="text-slate-900 font-bold">
                                                {t.name}
                                            </div>
                                            <div className="text-sm text-slate-500">
                                                {t.role}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="mt-8 flex items-center gap-3 justify-end">
                        <CarouselPrevious
                            data-testid="testimonials-prev"
                            className="static translate-y-0 bg-white border-slate-200 text-slate-700 hover:bg-brand hover:text-white hover:border-brand"
                        />
                        <CarouselNext
                            data-testid="testimonials-next"
                            className="static translate-y-0 bg-white border-slate-200 text-slate-700 hover:bg-brand hover:text-white hover:border-brand"
                        />
                    </div>
                </Carousel>
            </div>
        </section>
    );
}
