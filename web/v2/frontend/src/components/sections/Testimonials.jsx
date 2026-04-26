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
            className="relative py-24 md:py-32"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
                    <div>
                        <p className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-blue-400">
                            Trusted by teams
                        </p>
                        <h2 className="font-display mt-4 text-3xl md:text-5xl font-semibold tracking-tight leading-tight max-w-2xl">
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
                                    className="h-full rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-md p-8 md:p-10"
                                >
                                    <Quote className="h-8 w-8 text-blue-400" />
                                    <p className="mt-6 text-lg md:text-xl text-slate-200 leading-relaxed">
                                        "{t.quote}"
                                    </p>
                                    <div className="mt-8 flex items-center gap-4">
                                        <img
                                            src={t.avatar}
                                            alt={t.name}
                                            className="h-12 w-12 rounded-full object-cover ring-2 ring-blue-500/30"
                                        />
                                        <div>
                                            <div className="text-white font-semibold">
                                                {t.name}
                                            </div>
                                            <div className="text-sm text-slate-400">
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
                            className="static translate-y-0 bg-slate-900/60 border-white/10 text-white hover:bg-blue-600 hover:border-blue-500"
                        />
                        <CarouselNext
                            data-testid="testimonials-next"
                            className="static translate-y-0 bg-slate-900/60 border-white/10 text-white hover:bg-blue-600 hover:border-blue-500"
                        />
                    </div>
                </Carousel>
            </div>
        </section>
    );
}
