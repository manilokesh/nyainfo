import React from "react";
import { ArrowUpRight } from "lucide-react";
import LogoMark from "@/components/LogoMark";
import { site } from "@/data/site";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer
            data-testid="footer"
            className="relative bg-slate-50 border-t border-slate-200 pt-20 pb-10"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
                    <div className="md:col-span-5">
                        <div className="flex items-center gap-3">
                            <LogoMark size="md" />
                            <span className="font-display text-xl font-bold tracking-tight text-slate-900">
                                {site.brand.name}
                                <span className="text-brand">.</span>
                            </span>
                        </div>
                        <p className="mt-5 text-slate-600 max-w-md leading-relaxed">
                            {site.brand.tagline} A senior team that ships full-stack
                            web applications, end to end.
                        </p>
                        <a
                            href="#contact"
                            data-testid="footer-cta"
                            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand hover:bg-brand-strong text-white text-sm font-semibold px-5 py-2.5 transition shadow-brand"
                        >
                            Start a project <ArrowUpRight className="h-4 w-4" />
                        </a>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                            Explore
                        </h4>
                        <ul className="mt-5 space-y-3">
                            {site.nav.map((n) => (
                                <li key={n.href}>
                                    <a
                                        href={n.href}
                                        className="text-slate-700 hover:text-brand text-sm font-medium"
                                    >
                                        {n.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                            Stack
                        </h4>
                        <ul className="mt-5 space-y-3 text-sm text-slate-700 font-medium">
                            <li>React · Next.js</li>
                            <li>Python · Java · .NET</li>
                            <li>MySQL · SQL Server</li>
                            <li>Oracle · MongoDB</li>
                        </ul>
                    </div>

                    <div className="md:col-span-3">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                            Reach us
                        </h4>
                        <ul className="mt-5 space-y-3 text-sm text-slate-700 font-medium">
                            <li>{site.brand.email}</li>
                            <li>{site.brand.phone}</li>
                            <li>{site.brand.address}</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 mb-8 select-none text-center">
                    <div className="font-display font-bold text-[18vw] md:text-[14vw] leading-none tracking-tighter text-gradient-brand opacity-25">
                        NYAINFO
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-6 border-t border-slate-200">
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
