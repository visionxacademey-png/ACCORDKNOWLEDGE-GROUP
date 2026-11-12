import React from "react";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function Hero() {
  return (
    /* 
      Hero container:
      On mobile: strictly fits 100% of the screen height (h-[100dvh] max-h-[100dvh]) with zero scrolling needed!
      On desktop: comfortably scales with min-h-[90vh] md:h-auto
    */
    <section className="relative h-[100dvh] max-h-[100dvh] md:h-auto md:min-h-[92vh] flex flex-col justify-between pt-16 xs:pt-18 sm:pt-24 lg:pt-32 pb-3 xs:pb-4 sm:pb-8 bg-slate-100 overflow-hidden">
      {/* 1. Background Photo: Accounting workspace with ledgers, balance sheet, calculator, and financial reports */}
      <div
        className="absolute inset-0 bg-cover bg-[center_bottom_8%] sm:bg-[center_center] bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, 
              rgba(255, 255, 255, 0.96) 0%, 
              rgba(255, 255, 255, 0.88) 22%, 
              rgba(255, 255, 255, 0.40) 45%, 
              rgba(255, 255, 255, 0.12) 62%, 
              rgba(11, 26, 46, 0.45) 82%,
              rgba(11, 26, 46, 0.75) 100%
            ),
            url('/images/accounting-hero.jpg')
          `,
        }}
      />

      {/* 2. Top Content Area: Tag Badge + 3-Line Punchy Headline + Tagline */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 pt-1 xs:pt-2 sm:pt-4">
        <div className="max-w-xl space-y-1.5 xs:space-y-2 sm:space-y-3">
          {/* Pill Tag (Using Global Gold & Corporate Navy) */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-50/95 border border-gold-300/80 text-navy-950 text-[11px] xs:text-xs font-bold shadow-xs">
            <span className="text-gold-600">🏛️</span>
            <span>Accounts • Taxation • Advisory</span>
          </div>

          {/* 3-Line Punchy Headline (Using Global Navy with Warm Gold Accent) */}
          <h1 className="text-[1.6rem] xs:text-[1.85rem] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy-950 leading-[1.12]">
            <span className="block">Accurate Accounts.</span>
            <span className="block">Timely Tax Filing.</span>
            <span className="block text-gold-600">Better Business.</span>
          </h1>

          {/* Concise Supporting Text */}
          <p className="text-[11.5px] xs:text-xs sm:text-base text-slate-700 font-medium max-w-sm sm:max-w-xl leading-snug">
            One stop solutions to all your Financial Accounting &amp; Taxation Needs in Payangadi, Kerala.
          </p>
        </div>
      </div>

      {/* Dynamic spacer to push buttons gracefully to the bottom of the viewport */}
      <div className="flex-1 min-h-[10px]" />

      {/* 3. Bottom Action Area (Matching Global Palette: Corporate Navy & Warm Gold) */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 pb-1 xs:pb-2">
        <div className="max-w-md mx-auto sm:mx-0 space-y-2 sm:space-y-2.5">
          {/* Primary Action: Corporate Navy Pill with Gold Accent */}
          <Link
            href="#services"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-2.5 xs:py-3 sm:py-3.5 rounded-full bg-navy-900 hover:bg-navy-850 text-white font-bold text-sm xs:text-base shadow-lg shadow-navy-950/25 active:scale-[0.98] transition-all"
          >
            <span>Explore Our Services</span>
            <ArrowRight className="w-4 h-4 text-gold-400" />
          </Link>

          {/* Secondary Action: Crisp White Pill with Gold Phone Badge */}
          <a
            href={COMPANY.primaryPhone.href}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-2.5 xs:py-3 sm:py-3.5 rounded-full bg-white/95 hover:bg-white text-navy-950 font-bold text-xs xs:text-sm shadow-md border border-slate-200/90 active:scale-[0.98] transition-all"
          >
            <div className="w-5 h-5 rounded-full bg-gold-50 border border-gold-200 flex items-center justify-center text-gold-700">
              <Phone className="w-3 h-3 text-gold-600" />
            </div>
            <span>Call Us: {COMPANY.primaryPhone.display}</span>
          </a>

          {/* Slider / Carousel Indicator Dots (Warm Gold Active Dot) */}
          <div className="flex items-center justify-center gap-1.5 pt-1.5 pb-0.5" aria-hidden="true">
            <span className="w-6 h-1 rounded-full bg-gold-500" />
            <span className="w-1.5 h-1 rounded-full bg-white/80 shadow-xs" />
            <span className="w-1.5 h-1 rounded-full bg-white/80 shadow-xs" />
          </div>
        </div>
      </div>
    </section>
  );
}
