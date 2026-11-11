import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  FileText,
  Building2,
  Landmark,
  Phone,
  ArrowRight,
  MapPin,
} from "lucide-react";
import { COMPANY } from "@/lib/constants";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "About Us | Accord Knowledge Group – Tax & Management Consultants",
  description:
    "Learn about Accord Knowledge Group, our practice areas in Payangadi, and our structured approach to accounting, GST, income tax, and corporate consultancy.",
};

export default function AboutPage() {
  const practicePillars = [
    {
      title: "Statutory Tax & Regulatory Compliance",
      desc: "Specialized handling of Goods and Services Tax (GST), Income Tax computation, and Tax Deducted at Source (TDS) under Indian tax laws.",
      icon: FileText,
    },
    {
      title: "Commercial Accounting & Bookkeeping",
      desc: "Maintaining accurate, verifiable financial records, ledger balancing, and preparation of final accounts for businesses of all sizes.",
      icon: CheckCircle2,
    },
    {
      title: "Corporate & Legal Formation",
      desc: "Comprehensive support for Private Limited company incorporation, Limited Liability Partnership (LLP) registration, and Partnership Deed drafting.",
      icon: Building2,
    },
    {
      title: "Bank Finance & Management Advisory",
      desc: "Preparation of bank-standard project reports, CMA data structuring, and internal audit reviews to assist management in operational decisions.",
      icon: Landmark,
    },
  ];

  return (
    <div className="pt-24 lg:pt-28">
      {/* Subpage Hero Header */}
      <section className="bg-navy-950 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-financial-grid opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-gold-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-gold-400 font-medium">About</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
              Company Overview
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Trusted Financial &amp; Tax Consultancy
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Accord Knowledge Group is a professional financial, taxation, and management consultancy firm based in Eripuram, Payangadi. We provide one-stop solutions to all your financial accounting and taxation needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative Section */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7 space-y-6 text-slate-600 leading-relaxed text-base">
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-950 tracking-tight">
                Our Practice &amp; Professional Philosophy
              </h2>
              <p>
                In today&apos;s dynamic regulatory landscape, businesses and individual taxpayers face increasingly complex compliance obligations across Goods and Services Tax (GST), Income Tax, TDS, and corporate governance. Meeting these statutory deadlines demands precision, structured record-keeping, and thorough procedural knowledge.
              </p>
              <p>
                <strong>Accord Knowledge Group</strong> was founded with a clear objective: to offer businesses, traders, contractors, and individuals in northern Kerala dependable, professional financial and taxation services under a single roof. Rather than navigating separate advisors for routine bookkeeping, annual tax filing, bank project reports, and company registration, our clients benefit from unified, cohesive guidance.
              </p>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="text-sm font-bold text-navy-950 uppercase tracking-wider text-gold-700">
                  Our Core Positioning
                </h3>
                <p className="text-base font-semibold text-navy-900 italic">
                  &ldquo;{COMPANY.positioning}&rdquo;
                </p>
                <p className="text-xs text-slate-500 pt-1">
                  We strive to provide clear, actionable advisory grounded in statutory reality and professional integrity.
                </p>
              </div>

              <h3 className="text-xl font-bold text-navy-950 pt-4">
                Serving Businesses in Payangadi &amp; Kannur
              </h3>
              <p>
                Located conveniently at 2nd Floor, Writer&apos;s Building, Near Police Station in Eripuram, Payangadi, our office provides accessible face-to-face consultation as well as responsive telephone support. We work closely with local enterprises, retail stores, wholesale distributors, contractors, and aspiring entrepreneurs to ensure their statutory filings are accurate and on time.
              </p>
            </div>

            {/* Sidebar Credentials Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-navy-900 text-gold-400 flex items-center justify-center font-bold">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-navy-950">
                      Accord Knowledge Group
                    </h3>
                    <p className="text-xs text-slate-500">
                      Tax &amp; Management Consultants
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-navy-950">Office Address:</strong>
                      <p className="mt-0.5">{COMPANY.address.full}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-navy-950">Contact Numbers:</strong>
                      <div className="mt-1 space-y-1 font-mono">
                        <p><a href="tel:+918547045170" className="hover:text-gold-600">+91 85470 45170</a></p>
                        <p><a href="tel:+919446489607" className="hover:text-gold-600">+91 94464 89607</a></p>
                        <p><a href="tel:04972985517" className="hover:text-gold-600">0497-2985517</a></p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-navy-900 hover:bg-navy-800 text-white font-semibold text-xs rounded-md transition-colors"
                  >
                    <span>Schedule an Office Visit</span>
                    <ArrowRight className="w-3.5 h-3.5 text-gold-400" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Pillars Grid */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
              Areas of Focus
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-950 tracking-tight">
              Four Core Pillars of Advisory
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Structured assistance covering individual, commercial, and statutory compliance needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {practicePillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-7 rounded-xl border border-slate-200 shadow-card flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-navy-50 text-navy-900 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-navy-950 mb-1.5">
                      {p.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </div>
  );
}

