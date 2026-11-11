import React from "react";
import { Layers, Briefcase, Target, PhoneCall } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      icon: Layers,
      title: "Comprehensive Support",
      description:
        "Accounting, taxation, compliance and consultancy services under one roof. Eliminate the friction of engaging multiple disparate consultants.",
    },
    {
      icon: Briefcase,
      title: "Professional Approach",
      description:
        "Clear and organized handling of financial and business requirements with strict adherence to statutory timelines and documentation standards.",
    },
    {
      icon: Target,
      title: "Business-Focused Solutions",
      description:
        "Services designed around practical business and compliance needs, ensuring feasible workflows for local commercial firms and entrepreneurs.",
    },
    {
      icon: PhoneCall,
      title: "Convenient Consultation",
      description:
        "Easy access through direct phone numbers and accessible in-person consultation right at our Payangadi office.",
    },
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
            Dedicated Advisory
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-950 tracking-tight">
            Why Choose Accord Knowledge Group?
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            A disciplined, practical approach to financial management, statutory compliance, and corporate documentation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white rounded-xl p-7 border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-navy-900 text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950 flex items-center justify-center transition-colors mb-5 shadow-sm">
                    <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-950 tracking-tight mb-2.5">
                    {pt.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pt.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                  <span>Accord Principle 0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

