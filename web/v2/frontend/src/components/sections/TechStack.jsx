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
            { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
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
            { name: "Azure", Icon: TbBrandAzure, color: "#3B82F6" },
            { name: "GCP", Icon: SiGooglecloud, color: "#EA4335" },
            { name: "GH Actions", Icon: SiGithubactions, color: "#FFFFFF" },
        ],
    },
];

const allLogos = groups.flatMap((g) => g.items);

export default function TechStack() {
    return (
        <section
            id="stack"
            data-testid="techstack-section"
            className="relative py-24 md:py-32 border-y border-white/5 bg-slate-950"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="max-w-3xl">
                    <p className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-blue-400">
                        Tech we ship with
                    </p>
                    <h2 className="font-display mt-4 text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
                        A pragmatic, battle-tested stack.
                    </h2>
                    <p className="mt-5 text-base md:text-lg text-slate-400 leading-relaxed">
                        We pick the right tool for the job — never the trendiest. Below
                        is what powers most of our customer engagements.
                    </p>
                </div>

                <div className="mt-12 marquee-mask" data-testid="techstack-marquee">
                    <Marquee gradient={false} speed={36} pauseOnHover>
                        {allLogos.concat(allLogos).map((t, idx) => (
                            <div
                                key={idx}
                                className="mx-6 md:mx-10 flex items-center gap-3 text-slate-300"
                            >
                                <t.Icon
                                    className="h-7 w-7"
                                    style={{ color: t.color }}
                                />
                                <span className="font-display text-lg md:text-xl font-medium">
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
                            className="rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-md p-6 hover:border-blue-500/30 transition"
                        >
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-lg bg-blue-600/15 border border-blue-500/30 flex items-center justify-center">
                                    <g.Icon className="h-5 w-5 text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="font-display text-lg font-semibold text-white">
                                        {g.title}
                                    </h3>
                                    <p className="text-xs text-slate-400">{g.sub}</p>
                                </div>
                            </div>
                            <ul className="mt-5 flex flex-wrap gap-2">
                                {g.items.map((item) => (
                                    <li
                                        key={item.name}
                                        className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-slate-950/60 px-2.5 py-1.5 text-xs text-slate-300"
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
