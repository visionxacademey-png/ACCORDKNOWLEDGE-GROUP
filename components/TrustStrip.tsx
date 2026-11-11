import React from "react";
import { BookOpen, ShieldCheck, Building2, TrendingUp } from "lucide-react";

export default function TrustStrip() {
  const items = [
    { title: "Accounting Support", icon: BookOpen },
    { title: "Tax Compliance", icon: ShieldCheck },
    { title: "Business Formation", icon: Building2 },
    { title: "Management Consultancy", icon: TrendingUp },
  ];

  return (
    <div className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center justify-center gap-2.5 py-2 text-slate-800"
              >
                <Icon className="w-4 h-4 text-gold-600 shrink-0" />
                <span className="text-sm font-semibold text-navy-950">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
