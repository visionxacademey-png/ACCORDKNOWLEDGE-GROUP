import React from "react";
import type { Metadata } from "next";
import { SERVICES } from "@/lib/services";
import ServiceCard from "@/components/ServiceCard";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Services | Accord Knowledge Group – Payangadi",
  description:
    "Explore our accounting, GST, income tax, TDS, digital signature, company formation, and internal audit services in Payangadi.",
};

export default function ServicesPage() {
  return (
    <div className="pt-24">
      {/* Simple Header */}
      <section className="bg-navy-950 text-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
            Practice Directory
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Our Services
          </h1>
          <p className="text-sm text-slate-300">
            Accounting, taxation, and business consultancy solutions in Payangadi.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
