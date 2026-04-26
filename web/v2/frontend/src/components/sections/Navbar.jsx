import React, { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            data-testid="navbar"
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/10"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
                <a
                    href="#top"
                    data-testid="navbar-logo"
                    className="flex items-center gap-2 group"
                >
                    <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600/20 border border-blue-500/40">
                        <span className="absolute inset-0 rounded-lg bg-blue-500/30 blur-md opacity-60 group-hover:opacity-100 transition" />
                        <span className="relative font-display font-black text-blue-300 text-sm">
                            N
                        </span>
                    </span>
                    <span className="font-display text-lg font-semibold tracking-tight text-white">
                        {site.brand.name}
                    </span>
                </a>

                <nav className="hidden md:flex items-center gap-8" data-testid="navbar-links">
                    {site.nav.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            data-testid={`nav-link-${item.label.toLowerCase()}`}
                            className="text-sm text-slate-300 hover:text-white transition-colors"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-3">
                    <a
                        href="#contact"
                        data-testid="navbar-cta"
                        className="inline-flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 transition shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:shadow-[0_0_30px_rgba(59,130,246,0.55)]"
                    >
                        Start a project <ArrowUpRight className="h-4 w-4" />
                    </a>
                </div>

                <button
                    type="button"
                    data-testid="navbar-mobile-toggle"
                    onClick={() => setOpen((v) => !v)}
                    className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white border border-white/10"
                    aria-label="Toggle menu"
                >
                    {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </div>

            {open && (
                <div
                    data-testid="navbar-mobile-menu"
                    className="md:hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-xl"
                >
                    <div className="px-6 py-6 flex flex-col gap-4">
                        {site.nav.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="text-slate-300 hover:text-white text-base"
                            >
                                {item.label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={() => setOpen(false)}
                            className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-3"
                        >
                            Start a project <ArrowUpRight className="h-4 w-4" />
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
