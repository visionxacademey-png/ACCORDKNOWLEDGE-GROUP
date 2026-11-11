import React from "react";
import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark" | "navy-on-white";
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  iconOnly?: boolean;
  className?: string;
}

export function LogoIcon({
  size = 38,
  variant = "dark",
  className = "",
}: {
  size?: number;
  variant?: "light" | "dark" | "navy-on-white";
  className?: string;
}) {
  const isLight = variant === "light";
  // The arch and eye contour: crisp white for dark headers/footers, deep navy for white backgrounds
  const mainColor = isLight ? "#FFFFFF" : "#0B1A2E";
  // The iconic center pupil: Ruby Red as in the original logo!
  const pupilColor = "#D32F2F";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-label="Accord Knowledge Group Logo Symbol"
    >
      {/* 1. Outer Sweeping Arch (The stylized 'A' arch) */}
      <path
        d="M 14 96 C 18 58, 32 8, 50 8 C 68 8, 82 58, 86 96 C 77 62, 65 25, 50 25 C 35 25, 23 62, 14 96 Z"
        fill={mainColor}
      />

      {/* 2. Horizontal Eye Shape with Circular Aperture Cutout */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M 19 57 C 22 43, 34 38, 50 38 C 66 38, 78 43, 81 57 C 78 71, 66 76, 50 76 C 34 76, 22 71, 19 57 Z M 50 42 C 41.7 42, 35 48.7, 35 57 C 35 65.3, 41.7 72, 50 72 C 58.3 72, 65 65.3, 65 57 C 65 48.7, 58.3 42, 50 42 Z"
        fill={mainColor}
      />

      {/* 3. The Iconic Red Oval Pupil in the Center */}
      <ellipse
        cx="50"
        cy="57"
        rx="4.5"
        ry="7.2"
        fill={pupilColor}
      />
    </svg>
  );
}

export default function Logo({
  variant = "dark",
  size = "md",
  showTagline = true,
  iconOnly = false,
  className = "",
}: LogoProps) {
  const iconSizes = {
    sm: 30,
    md: 40,
    lg: 52,
  };

  const isLight = variant === "light";

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 transition-opacity hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-sm ${className}`}
      aria-label="Accord Knowledge Group Home"
    >
      <LogoIcon size={iconSizes[size]} variant={variant} />

      {!iconOnly && (
        <div className="flex flex-col leading-tight">
          <span
            className={`font-bold tracking-tight uppercase ${
              isLight ? "text-white" : "text-navy-900"
            } ${
              size === "sm"
                ? "text-sm tracking-wider"
                : size === "lg"
                ? "text-xl tracking-wide"
                : "text-base tracking-wide"
            }`}
          >
            ACCORD
            <span
              className={`ml-1.5 font-light tracking-widest ${
                isLight ? "text-gold-300" : "text-gold-600"
              }`}
            >
              KNOWLEDGE GROUP
            </span>
          </span>

          {showTagline && (
            <span
              className={`text-[9.5px] uppercase tracking-[0.2em] font-medium mt-0.5 ${
                isLight ? "text-navy-200" : "text-navy-600"
              }`}
            >
              Tax &amp; Management Consultants
            </span>
          )}
        </div>
      )}
    </Link>
  );
}
