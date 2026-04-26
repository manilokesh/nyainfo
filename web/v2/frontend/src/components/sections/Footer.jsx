import React from "react";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer
            data-testid="footer"
            className="relative bg-black border-t border-white/10 pt-20 pb-10"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
                    <div className="md:col-span-5">
                        <div className="flex items-center gap-3">
                            <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600/20 border border-blue-500/40">
                                <span className="font-display font-black text-blue-300">
                                    N
                                </span>
                            </span>
                            <span className="font-display text-xl font-semibold tracking-tight text-white">
                                {site.brand.name}
                            </span>
                        </div>
                        <p className="mt-5 text-slate-400 max-w-md leading-relaxed">
                            {site.brand.tagline} A senior team that ships full-stack
                            web applications, end to end.
                        </p>
                        <a
                            href="#contact"
                            data-testid="footer-cta"
                            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-5 py-2.5 transition shadow-[0_0_20px_rgba(59,130,246,0.35)]"
                        >
                            Start a project <ArrowUpRight className="h-4 w-4" />
                        </a>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                            Explore
                        </h4>
                        <ul className="mt-5 space-y-3">
                            {site.nav.map((n) => (
                                <li key={n.href}>
                                    <a
                                        href={n.href}
                                        className="text-slate-300 hover:text-white text-sm"
                                    >
                                        {n.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                            Stack
                        </h4>
                        <ul className="mt-5 space-y-3 text-sm text-slate-300">
                            <li>React · Next.js</li>
                            <li>Python · Java · .NET</li>
                            <li>MySQL · SQL Server</li>
                            <li>Oracle · MongoDB</li>
                        </ul>
                    </div>

                    <div className="md:col-span-3">
                        <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                            Reach us
                        </h4>
                        <ul className="mt-5 space-y-3 text-sm text-slate-300">
                            <li>{site.brand.email}</li>
                            <li>{site.brand.phone}</li>
                            <li>{site.brand.address}</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 mb-8 select-none">
                    <div className="font-display font-black text-[18vw] md:text-[14vw] leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/15 to-white/0">
                        NYAINFO
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-6 border-t border-white/10">
                    <p className="text-xs text-slate-500">
                        © {year} {site.brand.name}. All rights reserved.
                    </p>
                    <p className="text-xs text-slate-500 font-mono">
                        Built with React · FastAPI · MongoDB
                    </p>
                </div>
            </div>
        </footer>
    );
}
