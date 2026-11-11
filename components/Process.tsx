import React from "react";
import { Search, Compass, CheckCircle2, Headphones } from "lucide-react";

export default function Process() {
  const steps = [
    {
      step: "01",
      name: "Understand",
      icon: Search,
      desc: "Discuss your accounting, tax, or business requirement.",
    },
    {
      step: "02",
      name: "Plan",
      icon: Compass,
      desc: "Identify the documents and statutory process needed.",
    },
    {
      step: "03",
      name: "Execute",
      icon: CheckCircle2,
      desc: "Complete the filing, registration, or accounting work.",
    },
    {
      step: "04",
      name: "Support",
      icon: Headphones,
      desc: "Guidance for ongoing compliance and future queries.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
            Our Process
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-950 tracking-tight">
            How We Work
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 p-5 rounded-xl border border-slate-200/80"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-navy-900 text-gold-400 flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-xs font-bold text-gold-700 bg-gold-50 px-2 py-0.5 rounded border border-gold-200">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-navy-950 mb-1">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
