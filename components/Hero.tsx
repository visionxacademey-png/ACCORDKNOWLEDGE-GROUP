import React from "react";
import Link from "next/link";
import { Phone, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function Hero() {
  return (
    <>
      <section className="relative min-h-[92vh] sm:min-h-[90vh] flex flex-col justify-between pt-24 sm:pt-28 lg:pt-36 pb-8 sm:pb-12 bg-slate-100 overflow-hidden">
        {/* 1. Background Photo: Friendly consultant working on laptop at desk */}
        <div
          className="absolute inset-0 bg-cover bg-center sm:bg-[center_top_15%] bg-no-repeat pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to bottom, 
                rgba(255, 255, 255, 0.94) 0%, 
                rgba(255, 255, 255, 0.88) 22%, 
                rgba(255, 255, 255, 0.45) 45%, 
                rgba(255, 255, 255, 0.10) 65%, 
                rgba(11, 26, 46, 0.25) 85%,
                rgba(11, 26, 46, 0.55) 100%
              ),
              url('/images/consultant-man.jpg')
            `,
          }}
        />

        {/* 2. Top Content Area: Tag Badge + 3-Line Punchy Headline + Tagline */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 pt-2 sm:pt-4">
          <div className="max-w-xl space-y-3 sm:space-y-4">
            {/* Pill Tag (Matching Reference Pill) */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-50/95 border border-amber-200/90 text-amber-900 text-xs font-bold shadow-xs">
              <span className="text-amber-600">🏛️</span>
              <span>Accounts • Taxation • Advisory</span>
            </div>

            {/* 3-Line Punchy Headline (Exact Rhythm from Reference Screenshot) */}
            <h1 className="text-[2rem] xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              <span className="block">Accurate Accounts.</span>
              <span className="block">Timely Tax Filing.</span>
              <span className="block text-[#E86025]">Better Business.</span>
            </h1>

            {/* Concise Supporting Text */}
            <p className="text-xs sm:text-base text-slate-700 font-medium max-w-md sm:max-w-xl leading-relaxed">
              One stop solutions for all your financial accounting, GST, income tax &amp; management consultancy needs in Payangadi, Kerala.
            </p>
          </div>
        </div>

        {/* 3. Bottom Action Area (Floating over lower photo / desk) */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 pt-16 sm:pt-24 pb-2">
          <div className="max-w-md mx-auto sm:mx-0 space-y-2.5">
            {/* Primary Action: Solid Vibrant Pill with Arrow (Matching Reference Orange Button) */}
            <Link
              href="#services"
              className="w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#E86025] hover:bg-[#d4521a] text-white font-bold text-base shadow-lg shadow-[#E86025]/30 active:scale-[0.98] transition-all"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Secondary Action: White Pill with Left Icon & Shadow (Matching Reference White Button) */}
            <a
              href={COMPANY.primaryPhone.href}
              className="w-full inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white/95 hover:bg-white text-navy-950 font-bold text-sm shadow-md border border-slate-200/80 active:scale-[0.98] transition-all"
            >
              <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-700">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span>Call Us: {COMPANY.primaryPhone.display}</span>
            </a>

            {/* Slider / Carousel Indicator Dots (Matching Reference [ — ] [ • ] [ • ]) */}
            <div className="flex items-center justify-center gap-1.5 pt-3 pb-1" aria-hidden="true">
              <span className="w-6 h-1.5 rounded-full bg-[#E86025]" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/80 shadow-xs" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/80 shadow-xs" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Floating Quick Call Button (Matching Reference Bottom Right Floating Widget) */}
      <a
        href={COMPANY.primaryPhone.href}
        className="fixed bottom-5 right-4 z-40 w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#E86025] to-[#d4521a] text-white p-3.5 shadow-2xl flex items-center justify-center border-2 border-white active:scale-95 transition-transform"
        aria-label="Direct Phone Line: 8547045170"
      >
        <Phone className="w-6 h-6 fill-white/20 text-white" />
        {/* Active Online Status Dot */}
        <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white" />
      </a>
    </>
  );
}
