import React from "react";
import Link from "next/link";
import { Check, ArrowRight, ShieldCheck, FileText, Landmark, Users } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function AboutSection() {
  const points = [
    {
      title: "Professional Accounting Support",
      desc: "Structured bookkeeping, ledger reconciliation, and balance sheet preparation for clear financial visibility.",
    },
    {
      title: "Tax & GST Compliance",
      desc: "Comprehensive GST registration, timely return filing (GSTR-1, 3B), income tax computation, and TDS compliance.",
    },
    {
      title: "Business Formation Assistance",
      desc: "End-to-end documentation for Private Limited Companies, LLPs, and legally sound Partnership Deeds.",
    },
    {
      title: "Financial & Management Consultancy",
      desc: "Bank finance project reports, CMA structuring, and internal audit reviews designed to strengthen controls.",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Refined Corporate Graphic / Architectural Visual Card */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl bg-white p-6 sm:p-8 border border-slate-200/90 shadow-card">
              {/* Decorative Header Accent */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-navy-900 text-gold-400 flex items-center justify-center font-bold text-sm">
                    AKG
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy-950">
                      Accord Knowledge Group
                    </h4>
                    <p className="text-xs text-slate-500">
                      Tax &amp; Management Consultants
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-gold-50 text-gold-700 border border-gold-200">
                  Payangadi, Kerala
                </span>
              </div>

              {/* Four Strategic Pillars Visual Grid */}
              <div className="py-6 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <FileText className="w-5 h-5 text-navy-800 mb-2" />
                  <p className="text-xs font-bold text-navy-950">Statutory Tax</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">GST, Income Tax &amp; TDS</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <Landmark className="w-5 h-5 text-gold-600 mb-2" />
                  <p className="text-xs font-bold text-navy-950">Bank Finance</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Project Reports &amp; CMA</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <Users className="w-5 h-5 text-navy-800 mb-2" />
                  <p className="text-xs font-bold text-navy-950">Formation</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Company, LLP &amp; Deeds</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <ShieldCheck className="w-5 h-5 text-gold-600 mb-2" />
                  <p className="text-xs font-bold text-navy-950">Audit &amp; Review</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Internal Controls &amp; Checks</p>
                </div>
              </div>

              {/* Trust Badge at bottom of card */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Compliance &amp; Advisory Under One Roof</span>
                <span className="font-semibold text-navy-900">Eripuram Office</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
                About Our Firm
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-950 tracking-tight leading-tight">
                Trusted Financial &amp; Tax Consultancy
              </h2>
            </div>

            <p className="text-base text-slate-600 leading-relaxed">
              Accord Knowledge Group is a professional taxation and business consultancy firm based in Eripuram, Payangadi. We provide comprehensive accounting, taxation, statutory compliance, corporate formation, and financial advisory services tailored to sole proprietors, partnerships, trading enterprises, and growing institutions across Kerala.
            </p>

            <p className="text-base text-slate-600 leading-relaxed">
              By consolidating vital business requirements—from routine bookkeeping and monthly GST filing to partnership deed drafting, company incorporation, and bank finance project reports—we ensure our clients experience organized, dependable, and timely financial guidance without having to coordinate across multiple disconnected agencies.
            </p>

            {/* 4 Feature Points with Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {points.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-navy-900 text-gold-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy-950">
                      {pt.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      {pt.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Talk to an Expert */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 hover:bg-navy-800 text-white font-semibold text-sm rounded-md transition-colors shadow-sm"
              >
                <span>Talk to an Expert</span>
                <ArrowRight className="w-4 h-4 text-gold-400" />
              </Link>
              <a
                href={COMPANY.primaryPhone.href}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-navy-900 hover:text-gold-600 transition-colors"
              >
                <span>Or Call: {COMPANY.primaryPhone.display}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

