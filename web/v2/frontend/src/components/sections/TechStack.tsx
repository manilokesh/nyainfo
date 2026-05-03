import React from "react";
import Marquee from "react-fast-marquee";
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiVite,
    SiPython,
    SiSpringboot,
    SiDotnet,
    SiNodedotjs,
    SiFastapi,
    SiMysql,
    SiMongodb,
    SiPostgresql,
    SiRedis,
    SiDocker,
    SiKubernetes,
    SiGooglecloud,
    SiGithubactions,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { TbBrandAzure } from "react-icons/tb";
import { Code2, Server, Database as DbIcon, Cloud, Layers3 } from "lucide-react";

const groups = [
    {
        title: "Frontend",
        sub: "React-first interfaces",
        Icon: Code2,
        items: [
            { name: "React", Icon: SiReact, color: "#61DAFB" },
            { name: "Next.js", Icon: SiNextdotjs, color: "#0F172A" },
            { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
            { name: "Tailwind", Icon: SiTailwindcss, color: "#38BDF8" },
            { name: "Vite", Icon: SiVite, color: "#A78BFA" },
        ],
    },
    {
        title: "Middle Tier",
        sub: "Python · Java · .NET",
        Icon: Server,
        items: [
            { name: "Python", Icon: SiPython, color: "#FFD43B" },
            { name: "FastAPI", Icon: SiFastapi, color: "#22C55E" },
            { name: "Java / Spring", Icon: SiSpringboot, color: "#6DB33F" },
            { name: ".NET 8", Icon: SiDotnet, color: "#8B5CF6" },
            { name: "Node.js", Icon: SiNodedotjs, color: "#84CC16" },
        ],
    },
    {
        title: "Databases",
        sub: "SQL & NoSQL at scale",
        Icon: DbIcon,
        items: [
            { name: "MySQL", Icon: SiMysql, color: "#00758F" },
            { name: "SQL Server", Icon: DbIcon, color: "#CC2927" },
            { name: "Oracle", Icon: Layers3, color: "#F80000" },
            { name: "MongoDB", Icon: SiMongodb, color: "#10B981" },
            { name: "PostgreSQL", Icon: SiPostgresql, color: "#336791" },
            { name: "Redis", Icon: SiRedis, color: "#EF4444" },
        ],
    },
    {
        title: "Cloud & DevOps",
        sub: "Ship safely, observe everything",
        Icon: Cloud,
        items: [
            { name: "Docker", Icon: SiDocker, color: "#2496ED" },
            { name: "Kubernetes", Icon: SiKubernetes, color: "#326CE5" },
            { name: "AWS", Icon: FaAws, color: "#FF9900" },
            { name: "Azure", Icon: TbBrandAzure, color: "#0078D4" },
            { name: "GCP", Icon: SiGooglecloud, color: "#EA4335" },
            { name: "GH Actions", Icon: SiGithubactions, color: "#0F172A" },
        ],
    },
];

const allLogos = groups.flatMap((g) => g.items);

export default function TechStack() {
    return (
        <section
            id="stack"
            data-testid="techstack-section"
            className="relative py-24 md:py-32 bg-brand-softer"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="max-w-3xl">
                    <p className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-brand">
                        Tech we ship with
                    </p>
                    <h2 className="font-display mt-4 text-3xl md:text-5xl font-bold tracking-tight leading-tight text-slate-900">
                        A pragmatic, battle-tested stack.
                    </h2>
                    <p className="mt-5 text-base md:text-lg text-slate-600 leading-relaxed">
                        We pick the right tool for the job — never the trendiest. Below
                        is what powers most of our customer engagements.
                    </p>
                </div>

                <div className="mt-12 marquee-mask" data-testid="techstack-marquee">
                    <Marquee gradient={false} speed={36} pauseOnHover>
                        {allLogos.concat(allLogos).map((t, idx) => (
                            <div
                                key={idx}
                                className="mx-6 md:mx-10 flex items-center gap-3 text-slate-700"
                            >
                                <t.Icon
                                    className="h-7 w-7"
                                    style={{ color: t.color }}
                                />
                                <span className="font-display text-lg md:text-xl font-bold">
                                    {t.name}
                                </span>
                            </div>
                        ))}
                    </Marquee>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {groups.map((g) => (
                        <div
                            key={g.title}
                            data-testid={`stack-group-${g.title.toLowerCase().replace(/\s+/g, "-")}`}
                            className="rounded-3xl border border-slate-200 bg-white p-6 hover:border-brand/40 hover:shadow-[0_18px_50px_-25px_rgba(15,23,42,0.2)] transition"
                        >
                            <div className="flex items-center gap-3">
                                <div className="h-11 w-11 rounded-2xl bg-brand-soft flex items-center justify-center">
                                    <g.Icon className="h-5 w-5 text-brand" />
                                </div>
                                <div>
                                    <h3 className="font-display text-lg font-bold text-slate-900">
                                        {g.title}
                                    </h3>
                                    <p className="text-xs text-slate-500">{g.sub}</p>
                                </div>
                            </div>
                            <ul className="mt-5 flex flex-wrap gap-2">
                                {g.items.map((item) => (
                                    <li
                                        key={item.name}
                                        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700"
                                    >
                                        <item.Icon
                                            className="h-3.5 w-3.5"
                                            style={{ color: item.color }}
                                        />
                                        {item.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
