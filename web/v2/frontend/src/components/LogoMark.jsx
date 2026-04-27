import React from "react";

/**
 * NyaInfo logo mark — uses the Tamil letter "ஞ" (nya) inside a soft brand circle.
 */
export default function LogoMark({ size = "md" }) {
    const sizes = {
        sm: "h-8 w-8 text-base",
        md: "h-10 w-10 text-xl",
        lg: "h-12 w-12 text-2xl",
    };
    return (
        <span
            className={`relative inline-flex shrink-0 items-center justify-center rounded-full bg-brand text-white shadow-brand ${sizes[size] || sizes.md}`}
            aria-hidden="true"
        >
            <span
                className="font-display font-bold leading-none"
                style={{ fontFamily: '"Latha", "Nirmala UI", "Quicksand", sans-serif' }}
            >
                ஞ
            </span>
        </span>
    );
}
