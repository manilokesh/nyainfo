import React from "react";
import { site } from "@/data/site";
/**
 * NyaInfo Full Logo — LogoMark + Brand Name in single component
 */
type Size = "sm" | "md" | "lg";

interface LogoMarkProps {
  size?: Size;
  className?: string;
  href?: string;
  showText?: boolean; // Option to hide text if needed
}

const sizeMap: Record<Size, string> = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
};

const textSizeMap: Record<Size, string> = {
  sm: "text-lg",
  md: "text-xl",
  lg: "text-2xl",
};

export default function LogoMark({
  size = "md",
  className = "",
  href = "#top",
  showText = true,
}: LogoMarkProps) {
  const firstThree = site?.brand?.name?.slice(0, 3); // e.g., "Nya"
  const rest = site?.brand?.name?.slice(3);

  return (
    <a
      href={href}
      data-testid="navbar-logo"
      className={`flex items-center gap-3 group ${className}`}
    >
      {/* Logo Mark (Image) */}
      <span
        className={`relative inline-flex shrink-0 items-center justify-center rounded-full bg-slate-200 shadow-brand overflow-hidden ${sizeMap[size]}`}
        aria-hidden="true"
      >
        <img
          src="/nyainfo-logo.svg"
          alt="NyaInfo logo"
          className="h-[78%] w-[78%] object-contain"
          draggable={false}
        />
      </span>

      {/* Brand Name */}
      {showText && (
        <span
          style={{
            fontSize: "1.9rem",
            fontWeight: 700,
            letterSpacing: "0.06em",
            display: "inline-block",
            transform: "scale(1, 1)",
            textShadow:
              "0 0 8px rgba(255, 255, 255, 0.8), 0 0 2px rgba(255, 255, 255, 1)",
          }}
          className={`font-logo font-bold tracking-tight text-slate-900 ${textSizeMap[size]}`}
        >
          <span className="text-brand">{firstThree}</span>
          {rest}
        </span>
      )}
    </a>
  );
}
