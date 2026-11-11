import React from "react";
import ServiceCard from "./ServiceCard";
import { SERVICES } from "@/lib/services";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
            Professional Practice Areas
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-950 tracking-tight">
            Our Professional Services
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Comprehensive accounting, taxation and business consultancy solutions tailored to your requirements.
          </p>
        </div>

        {/* 9 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

