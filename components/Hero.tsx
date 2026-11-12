import React from "react";
import Link from "next/link";
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function Hero() {
  return (
    /* 
      Hero container:
      - Mobile: strictly fits 100% of the viewport (h-[100dvh] max-h-[100dvh]) with zero scrolling needed.
      - Desktop: strictly fits 100% of the screen height (md:h-screen md:max-h-screen md:min-h-screen) with edge-to-edge accounting visual.
    */
    <section className="relative h-[100dvh] max-h-[100dvh] md:h-screen md:max-h-screen md:min-h-screen flex flex-col justify-between md:justify-center pt-16 xs:pt-18 sm:pt-24 md:pt-0 pb-3 xs:pb-4 sm:pb-8 md:pb-0 bg-slate-100 overflow-hidden">
      {/* 1. Mobile Background: specifically styled with vertical gradient for mobile screens */}
      <div
        className="block md:hidden absolute inset-0 bg-cover bg-[center_bottom_8%] bg-no-repeat pointer-events-none"
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

      {/* 2. Desktop Background: fits the desktop screen edge-to-edge with soft horizontal gradient */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, 
              rgba(255, 255, 255, 0.98) 0%, 
              rgba(255, 255, 255, 0.92) 32%, 
              rgba(255, 255, 255, 0.65) 48%, 
              rgba(255, 255, 255, 0.20) 65%, 
              rgba(255, 255, 255, 0.0) 85%
            ),
            url('/images/accounting-hero.jpg')
          `,
        }}
      />

      {/* Main Content Area */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 pt-1 xs:pt-2 sm:pt-4 md:pt-12 lg:pt-16">
        <div className="max-w-xl lg:max-w-2xl space-y-2 sm:space-y-3 md:space-y-5">
          {/* Pill Tag (Global Warm Gold & Corporate Navy) */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-gold-50/95 border border-gold-300/80 text-navy-950 text-[11px] xs:text-xs md:text-sm font-bold shadow-xs">
            <span className="text-gold-600">🏛️</span>
            <span>Accounts • Taxation • Advisory</span>
          </div>

          {/* 3-Line Punchy Headline */}
          <h1 className="text-[1.6rem] xs:text-[1.85rem] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy-950 leading-[1.12]">
            <span className="block">Accurate Accounts.</span>
            <span className="block">Timely Tax Filing.</span>
            <span className="block text-gold-600">Better Business.</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-[11.5px] xs:text-xs sm:text-base md:text-lg text-slate-700 font-medium max-w-sm sm:max-w-xl leading-snug md:leading-relaxed">
            One stop solutions to all your Financial Accounting &amp; Taxation Needs in Payangadi, Kerala. Delivering accurate compliance and dependable financial advisory.
          </p>

          {/* Desktop Direct CTA Buttons (Visible on desktop) */}
          <div className="hidden md:flex flex-row items-center gap-3.5 pt-2">
            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-navy-900 hover:bg-navy-850 text-white font-bold text-sm md:text-base shadow-lg shadow-navy-950/25 active:scale-[0.98] transition-all"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4 text-gold-400" />
            </Link>

            <a
              href={COMPANY.primaryPhone.href}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-navy-950 font-bold text-sm md:text-base shadow-md border border-slate-200 active:scale-[0.98] transition-all"
            >
              <div className="w-5 h-5 rounded-full bg-gold-50 border border-gold-200 flex items-center justify-center text-gold-700">
                <Phone className="w-3 h-3 text-gold-600" />
              </div>
              <span>Call Us: {COMPANY.primaryPhone.display}</span>
            </a>
          </div>

          {/* Desktop Trust Checkmarks */}
          <div className="hidden md:flex items-center gap-6 pt-2 text-xs md:text-sm font-semibold text-slate-700">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-gold-600" />
              GST &amp; Income Tax
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-gold-600" />
              Accounting &amp; Bookkeeping
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-gold-600" />
              Company Formation
            </span>
          </div>
        </div>
      </div>

      {/* Dynamic spacer for mobile to push buttons gracefully to the bottom */}
      <div className="flex-1 min-h-[10px] md:hidden" />

      {/* Mobile-Only Bottom Action Area (Single Clean Action Pill) */}
      <div className="md:hidden relative max-w-7xl mx-auto px-4 sm:px-6 w-full z-10 pb-3 xs:pb-4">
        <div className="max-w-md mx-auto">
          {/* Primary Action */}
          <Link
            href="#services"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-navy-900 hover:bg-navy-850 text-white font-bold text-sm xs:text-base shadow-lg shadow-navy-950/25 active:scale-[0.98] transition-all"
          >
            <span>Explore Our Services</span>
            <ArrowRight className="w-4 h-4 text-gold-400" />
          </Link>
        </div>
      </div>
    </section>
  );
}
