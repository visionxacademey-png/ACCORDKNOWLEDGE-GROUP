import React from "react";
import { Search, Compass, CheckCircle2, Headphones } from "lucide-react";

export default function Process() {
  const steps = [
    {
      step: "01",
      name: "Understand",
      icon: Search,
      description: "We understand your accounting, taxation or business requirement through a clear initial discussion.",
    },
    {
      step: "02",
      name: "Plan",
      icon: Compass,
      description: "We identify the appropriate documentation, statutory checklist, and procedural steps needed.",
    },
    {
      step: "03",
      name: "Execute",
      icon: CheckCircle2,
      description: "We assist with the required accounting records, statutory filing, or consultancy execution.",
    },
    {
      step: "04",
      name: "Support",
      icon: Headphones,
      description: "We provide guidance for ongoing compliance, queries, and future regulatory requirements.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
            Methodical Engagement
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-950 tracking-tight">
            How We Help
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            A structured, 4-step workflow that ensures clarity, thoroughness, and statutory precision at every stage.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="relative flex flex-col items-start bg-slate-50 lg:bg-white p-6 lg:p-4 rounded-xl border border-slate-200/80 lg:border-none"
                >
                  {/* Step Badge with icon */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center font-bold text-base shadow-sm ring-4 ring-white">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-sm font-bold text-gold-600 bg-gold-50 px-2.5 py-0.5 rounded border border-gold-200">
                      STEP {item.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-navy-950 tracking-tight mb-2">
                    {item.name}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

