import React from "react";
import Link from "next/link";
import {
  Phone,
  ArrowRight,
  ShieldCheck,
  FileCheck2,
  Building2,
  Landmark,
  CheckCircle2,
  MapPin,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { LogoIcon } from "./Logo";

export default function Hero() {
  const quickServices = [
    {
      title: "GST & Income Tax",
      desc: "Registration, monthly GSTR filings & income tax returns",
      icon: FileCheck2,
      href: "/services/gst-registration",
    },
    {
      title: "Accounts & Bookkeeping",
      desc: "Systematic ledger records, reconciliation & trial balance",
      icon: ShieldCheck,
      href: "/services/accounts",
    },
    {
      title: "Company & LLP Formation",
      desc: "Private Limited incorporation, LLP & Partnership Deeds",
      icon: Building2,
      href: "/services/company-llp-formation",
    },
    {
      title: "Bank Finance Reports",
      desc: "Comprehensive project reports & CMA data for funding",
      icon: Landmark,
      href: "/services/project-report",
    },
  ];

  return (
    <section className="relative min-h-[90vh] lg:min-h-[92vh] flex items-center justify-center pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-16 lg:pb-20 bg-navy-950 text-white overflow-hidden">
      {/* 1. Background Image with Rich Multi-Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(6, 15, 27, 0.97) 0%, rgba(11, 26, 46, 0.92) 50%, rgba(14, 30, 54, 0.85) 100%),
            linear-gradient(to top, rgba(6, 15, 27, 0.98) 0%, rgba(6, 15, 27, 0.40) 50%, rgba(6, 15, 27, 0.80) 100%),
            url('/images/hero-bg.jpg')
          `,
        }}
      />

      {/* Subtle Architectural Financial Grid Texture */}
      <div className="absolute inset-0 bg-financial-grid opacity-20 pointer-events-none" />

      {/* Ambient Warm Spotlights */}
      <div className="absolute -top-32 right-10 w-96 h-96 bg-gold-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-navy-800/40 rounded-full blur-3xl pointer-events-none" />

      {/* 2. Main Hero Grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Value Proposition & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            {/* Tagline / Location Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-navy-900/90 border border-gold-500/35 text-gold-300 text-xs sm:text-sm font-medium tracking-wide backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
              <span>Tax &amp; Management Consultants • Payangadi, Kerala</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white tracking-tight leading-[1.16]">
              One Stop Solutions for Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-gold-400 to-amber-300">
                Financial, Accounting
              </span>{" "}
              &amp; Taxation Needs
            </h1>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base md:text-lg text-slate-200/95 max-w-2xl leading-relaxed">
              Professional accounting, taxation, statutory compliance and corporate management consultancy for businesses, traders, and individuals. Clear, dependable financial advisory under one roof in Payangadi.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              <a
                href={COMPANY.primaryPhone.href}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:px-7 sm:py-4 bg-gradient-to-r from-gold-500 to-amber-400 hover:from-gold-400 hover:to-amber-300 text-navy-950 font-bold text-sm sm:text-base rounded-lg transition-all shadow-xl shadow-gold-500/25 active:scale-[0.99]"
              >
                <Phone className="w-4 h-4 fill-navy-950 text-navy-950" />
                <span>Call Us: {COMPANY.primaryPhone.display}</span>
              </a>

              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-7 sm:py-4 bg-navy-900/80 hover:bg-navy-800 text-white border border-slate-700/80 hover:border-gold-500/50 font-medium text-sm sm:text-base rounded-lg backdrop-blur-md transition-all active:scale-[0.99]"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 text-gold-300" />
              </Link>
            </div>

            {/* Trust Checkpoints Row */}
            <div className="pt-3 sm:pt-4 border-t border-white/10 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>GST &amp; Income Tax</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Company &amp; LLP Formation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Bank Project Reports</span>
              </div>
            </div>
          </div>

          {/* Right Column: Prestigious Floating Consultation Overview Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl p-5 sm:p-7 bg-gradient-to-b from-navy-900/95 to-navy-950/95 border border-slate-700/80 shadow-2xl backdrop-blur-xl">
              {/* Card Header with Brand Seal */}
              <div className="flex items-center justify-between pb-4 sm:pb-5 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-navy-950 border border-gold-500/30 flex items-center justify-center shadow-inner">
                    <LogoIcon size={30} variant="light" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white tracking-wide">
                      Accord Knowledge Group
                    </h3>
                    <p className="text-[10.5px] uppercase tracking-wider text-gold-400 font-semibold">
                      Tax &amp; Management Consultants
                    </p>
                  </div>
                </div>

                <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10.5px] font-semibold bg-gold-500/10 text-gold-300 border border-gold-500/30">
                  Payangadi Office
                </span>
              </div>

              {/* Core Practice Rows */}
              <div className="py-4 space-y-2.5">
                {quickServices.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={idx}
                      href={item.href}
                      className="group flex items-start gap-3 p-2.5 rounded-xl bg-navy-950/60 hover:bg-navy-800/80 border border-slate-800/80 hover:border-gold-500/40 transition-all duration-200"
                    >
                      <div className="w-8 h-8 rounded-lg bg-navy-900 text-gold-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs sm:text-sm font-semibold text-white group-hover:text-gold-300 transition-colors truncate">
                            {item.title}
                          </h4>
                          <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-gold-400 transition-colors shrink-0" />
                        </div>
                        <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1 leading-snug">
                          {item.desc}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>

              {/* Card Footer: Address & Direct Contact Lines */}
              <div className="pt-3.5 border-t border-slate-800/90 text-xs text-slate-300 space-y-2">
                <div className="flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                  <span className="text-[11.5px] text-slate-300 leading-snug">
                    2nd Floor, Writer&apos;s Building, Near Police Station, Eripuram, Payangadi – 670 303
                  </span>
                </div>

                <div className="pt-1.5 flex items-center justify-between text-[11.5px] border-t border-slate-800/60">
                  <span className="text-slate-400">Direct Desk:</span>
                  <div className="flex items-center gap-2 font-mono text-gold-300">
                    <a href="tel:+918547045170" className="hover:underline font-bold">
                      8547045170
                    </a>
                    <span>•</span>
                    <a href="tel:04972985517" className="hover:underline">
                      0497-2985517
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
