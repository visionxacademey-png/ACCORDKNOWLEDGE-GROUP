import React from "react";
import { BookOpen, ShieldCheck, Building2, TrendingUp } from "lucide-react";

export default function TrustStrip() {
  const trustItems = [
    {
      title: "Accounting Support",
      description: "Accurate ledger & financial record-keeping",
      icon: BookOpen,
    },
    {
      title: "Tax Compliance",
      description: "GST, Income Tax & statutory TDS filings",
      icon: ShieldCheck,
    },
    {
      title: "Business Formation",
      description: "Company, LLP & Partnership deed documentation",
      icon: Building2,
    },
    {
      title: "Management Consultancy",
      description: "Internal audit & bank finance project reports",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="relative z-20 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 py-6 sm:py-8">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-4 py-3 sm:py-2 px-3 sm:px-4 lg:px-6 first:pl-0 last:pr-0"
              >
                <div className="w-12 h-12 rounded-lg bg-navy-50 border border-navy-100 flex items-center justify-center text-navy-800 shrink-0">
                  <Icon className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-navy-950 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

