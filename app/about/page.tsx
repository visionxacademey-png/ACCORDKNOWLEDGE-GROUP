import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Check, Phone, MapPin } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "About Us | Accord Knowledge Group",
  description:
    "Accord Knowledge Group is a professional tax and management consultancy firm in Eripuram, Payangadi, Kerala.",
};

export default function AboutPage() {
  const points = [
    { title: "Statutory Tax Compliance", desc: "GST registration, monthly returns, income tax filing, and TDS compliance." },
    { title: "Accounting & Bookkeeping", desc: "Systematic ledger maintenance, bank reconciliation, and final accounts." },
    { title: "Business Formation", desc: "Private Limited company incorporation, LLP registration, and partnership deeds." },
    { title: "Financial Consultancy", desc: "Bank finance project reports, CMA data, and internal audit reviews." },
  ];

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-navy-950 text-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
            About Our Firm
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Accord Knowledge Group
          </h1>
          <p className="text-sm sm:text-base text-slate-300">
            Tax &amp; Management Consultants in Payangadi, Kerala
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            <h2 className="text-xl font-bold text-navy-950">
              Who We Are
            </h2>
            <p>
              Accord Knowledge Group is a professional financial, taxation, and management consultancy firm based in Eripuram, Payangadi. We provide one-stop solutions for all your accounting, taxation, company registration, and financial advisory needs.
            </p>
            <p>
              Our office handles routine bookkeeping, GST filings, income tax returns, digital signatures, bank loan project reports, and corporate incorporation under one roof—ensuring organized, dependable, and timely assistance for local businesses and individuals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {points.map((p, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 mb-1">
                  <Check className="w-4 h-4 text-gold-600" />
                  <h3 className="text-sm font-bold text-navy-950">{p.title}</h3>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed pl-6">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-lg bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-sm font-bold text-navy-950">Office in Payangadi</h3>
              <p className="text-xs text-slate-500 mt-0.5">{COMPANY.address.full}</p>
            </div>
            <a
              href={COMPANY.primaryPhone.href}
              className="px-4 py-2 bg-navy-900 text-white rounded text-xs font-semibold hover:bg-navy-800 shrink-0"
            >
              Call 8547045170
            </a>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
