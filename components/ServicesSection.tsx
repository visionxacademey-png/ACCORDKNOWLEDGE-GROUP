import React from "react";
import ServiceCard from "./ServiceCard";
import { SERVICES } from "@/lib/services";

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
            Our Services
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-950 tracking-tight">
            Financial &amp; Business Services
          </h2>
          <p className="text-sm text-slate-500">
            Accounting, taxation, and corporate consultancy solutions in Payangadi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
