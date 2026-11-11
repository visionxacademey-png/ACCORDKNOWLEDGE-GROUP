import React from "react";
import Link from "next/link";
import { Phone, ArrowDown } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-24 pb-16 bg-navy-950 text-white overflow-hidden">
      {/* Background Image with Dark Navy Gradient */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(6, 15, 27, 0.95), rgba(11, 26, 46, 0.88), rgba(14, 30, 54, 0.80)),
            linear-gradient(to top, rgba(6, 15, 27, 0.98), rgba(6, 15, 27, 0.40) 50%, rgba(6, 15, 27, 0.85)),
            url('/images/hero-bg.jpg')
          `,
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 space-y-6">
        {/* Simple Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-gold-300 text-xs font-medium tracking-wide backdrop-blur-sm">
          <span>Payangadi, Kerala • Tax &amp; Management Consultants</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
          One Stop Solutions for Your{" "}
          <span className="text-gold-400">Financial, Accounting</span> &amp; Taxation Needs
        </h1>

        {/* Short 1-line Subtitle */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal">
          Professional accounting, taxation, and business consultancy services for individuals, businesses, and organizations.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href={COMPANY.primaryPhone.href}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-base rounded-md transition-all shadow-md"
          >
            <Phone className="w-4 h-4 text-navy-950" />
            <span>Call 8547045170</span>
          </a>

          <Link
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/15 text-white border border-white/20 font-medium text-base rounded-md transition-all"
          >
            <span>Our Services</span>
            <ArrowDown className="w-4 h-4 text-gold-400" />
          </Link>
        </div>
      </div>
    </section>
  );
}
