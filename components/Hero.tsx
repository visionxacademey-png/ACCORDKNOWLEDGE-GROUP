import React from "react";
import Link from "next/link";
import { Phone, ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function Hero() {
  const highlights = [
    { title: "GST & Income Tax", subtitle: "Registration & Regular Returns" },
    { title: "Accounts Support", subtitle: "Systematic Bookkeeping & Audit" },
    { title: "Company Formation", subtitle: "Private Limited, LLP & Deeds" },
    { title: "Bank Finance", subtitle: "Project Reports & CMA Data" },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 bg-navy-950 text-white overflow-hidden">
      {/* 1. High-Performance Background Image with Native CSS Multi-Gradient (Zero-overhead, zero-crash) */}
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
      <div className="absolute -top-32 right-0 w-96 h-96 bg-gold-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* 2. Main Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="max-w-4xl space-y-6 sm:space-y-8">
          {/* Tagline / Location Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-900/90 border border-gold-500/40 text-gold-300 text-xs sm:text-sm font-medium tracking-wide backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span>Tax &amp; Management Consultants • Payangadi, Kerala</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15]">
            One Stop Solutions for Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-amber-200">
              Financial, Accounting
            </span>{" "}
            &amp; Taxation Needs
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl leading-relaxed">
            Professional accounting, taxation and management consultancy services for individuals, businesses and organizations. Delivering accurate compliance and dependable financial advisory under one roof.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <a
              href={COMPANY.primaryPhone.href}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-base rounded-md transition-all shadow-xl shadow-gold-500/20 hover:shadow-gold-500/30"
            >
              <Phone className="w-5 h-5 text-navy-950" />
              <span>Call Us: {COMPANY.primaryPhone.display}</span>
            </a>

            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 hover:bg-white/15 text-white border border-white/20 font-medium text-base rounded-md backdrop-blur-md transition-all"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4 text-gold-300" />
            </Link>
          </div>

          {/* Bottom Quick-Feature Strip */}
          <div className="pt-8 sm:pt-10 border-t border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-white tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-slate-300 mt-0.5 leading-snug">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Address & Contact Footer */}
            <div className="mt-8 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>2nd Floor, Writer&apos;s Building, Near Police Station, Eripuram, Payangadi – 670 303</span>
              </div>
              <div className="flex items-center gap-3 font-mono text-gold-300">
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
