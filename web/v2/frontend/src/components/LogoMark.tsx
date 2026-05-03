import React from "react";

/**
 * NyaInfo logo mark — circular brand-coloured tile that hosts the
 * supplied "ஞ"-stylised brand mark.
 */
type Size = "sm" | "md" | "lg";

interface LogoMarkProps {
    size?: Size;
    className?: string;
}

const sizeMap: Record<Size, string> = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
};

export default function LogoMark({ size = "md", className = "" }: LogoMarkProps) {
    return (
        <span
            className={`relative inline-flex shrink-0 items-center justify-center rounded-full bg-slate-900 shadow-brand overflow-hidden ${sizeMap[size]} ${className}`}
            aria-hidden="true"
        >
            <img
                src="/nyainfo-logo.png"
                alt="NyaInfo logo"
                className="h-[78%] w-[78%] object-contain"
                draggable={false}
            />
        </span>
    );
}
