import React from "react";
import Link from "next/link";
import { Phone, ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function Hero() {
  const highlights = [
    { title: "GST & Returns", subtitle: "Registration & Regular Returns" },
    { title: "Accounts Support", subtitle: "Systematic Bookkeeping" },
    { title: "Company Formation", subtitle: "Private Limited & LLP" },
    { title: "Bank Finance", subtitle: "Project Reports & CMA" },
  ];

  return (
    <section className="relative min-h-[88vh] sm:min-h-[90vh] flex items-center justify-center pt-20 sm:pt-28 lg:pt-36 pb-10 sm:pb-16 lg:pb-24 bg-navy-950 text-white overflow-hidden">
      {/* 1. High-Performance Background Image with Native CSS Multi-Gradient */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(6, 15, 27, 0.96), rgba(11, 26, 46, 0.90), rgba(14, 30, 54, 0.82)),
            linear-gradient(to top, rgba(6, 15, 27, 0.98), rgba(6, 15, 27, 0.45) 50%, rgba(6, 15, 27, 0.75)),
            url('/images/hero-bg.jpg')
          `,
        }}
      />

      {/* Subtle architectural financial grid texture overlay */}
      <div className="absolute inset-0 bg-financial-grid opacity-20 pointer-events-none" />

      {/* Ambient gold glow highlight */}
      <div className="absolute -top-32 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-gold-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* 2. Main Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="max-w-4xl space-y-4 sm:space-y-6 lg:space-y-8">
          {/* Tagline / Location Pill (Clean single line on mobile) */}
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy-900/90 border border-gold-500/35 text-gold-300 text-[11px] sm:text-xs font-medium tracking-wide backdrop-blur-md shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0 animate-pulse" />
              <span className="truncate">Tax &amp; Management Consultants • Payangadi</span>
            </div>
          </div>

          {/* Headline (Balanced mobile line-height and font sizes) */}
          <h1 className="text-[1.75rem] xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.2] sm:leading-[1.15]">
            One Stop Solutions for Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-amber-200">
              Financial, Accounting
            </span>{" "}
            &amp; Taxation Needs
          </h1>

          {/* Supporting Text (Concise and readable on mobile) */}
          <p className="text-xs sm:text-base md:text-lg text-slate-200/95 max-w-2xl leading-relaxed">
            Professional accounting, taxation and management consultancy services for individuals, businesses and organizations across Kerala. Accurate compliance and dependable financial advisory under one roof.
          </p>

          {/* Action Buttons (Refined touch-ergonomics for mobile) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 pt-1 sm:pt-2">
            <a
              href={COMPANY.primaryPhone.href}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-3.5 bg-gradient-to-r from-gold-500 to-amber-400 hover:from-gold-400 hover:to-amber-300 text-navy-950 font-bold text-sm sm:text-base rounded-lg transition-all shadow-lg shadow-gold-500/25 active:scale-[0.99]"
            >
              <Phone className="w-4 h-4 fill-navy-950/20 text-navy-950" />
              <span>Call Us: {COMPANY.primaryPhone.display}</span>
            </a>

            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-3.5 bg-navy-900/70 hover:bg-navy-800 text-white border border-white/20 font-medium text-sm sm:text-base rounded-lg backdrop-blur-md transition-all active:scale-[0.99]"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4 text-gold-300" />
            </Link>
          </div>

          {/* Bottom Quick-Feature Strip (Clean 2x2 grid on mobile) */}
          <div className="pt-6 sm:pt-8 border-t border-white/10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center sm:items-start gap-2 p-2 sm:p-2.5 rounded-lg bg-navy-900/60 border border-white/10 backdrop-blur-sm"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-400 shrink-0" />
                  <div className="min-w-0">
                    <h3 className="text-xs sm:text-sm font-semibold text-white tracking-tight truncate">
                      {item.title}
                    </h3>
                    <p className="text-[10px] sm:text-[11px] text-slate-300 hidden sm:block truncate">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Address & Contact Footer inside Hero */}
            <div className="mt-5 sm:mt-8 pt-3 sm:pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] sm:text-xs text-slate-300">
              <div className="flex items-center gap-1.5 truncate">
                <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span className="truncate">2nd Floor, Writer&apos;s Building, Near Police Station, Eripuram, Payangadi</span>
              </div>
              <div className="flex items-center gap-2.5 font-mono text-gold-300">
                <a href="tel:+919446489607" className="hover:underline">9446489607</a>
                <span>•</span>
                <a href="tel:04972985517" className="hover:underline">0497-2985517</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
