import React from "react";
import { Layers, Briefcase, Target, PhoneCall } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      icon: Layers,
      title: "Comprehensive Support",
      description: "Accounting, taxation, and registration under one roof.",
    },
    {
      icon: Briefcase,
      title: "Professional Handling",
      description: "Clear and organized handling of compliance and statutory filing.",
    },
    {
      icon: Target,
      title: "Practical Solutions",
      description: "Services tailored around everyday business and commercial needs.",
    },
    {
      icon: PhoneCall,
      title: "Direct Consultation",
      description: "Fast assistance via phone or in person at our Payangadi office.",
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
            Why Accord
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-950 tracking-tight">
            Why Choose Accord Knowledge Group?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm text-center sm:text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-navy-900 text-gold-400 flex items-center justify-center mb-3 mx-auto sm:mx-0">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-navy-950 mb-1">
                  {pt.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {pt.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
