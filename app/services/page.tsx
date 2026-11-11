import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { SERVICES } from "@/lib/services";
import ServiceCard from "@/components/ServiceCard";
import CTA from "@/components/CTA";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Professional Services | Accord Knowledge Group",
  description:
    "Explore our complete range of accounting, GST, income tax, TDS, digital signature, company formation, and internal audit services in Payangadi.",
};

export default function ServicesPage() {
  return (
    <div className="pt-24 lg:pt-28">
      {/* Subpage Header */}
      <section className="bg-navy-950 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-financial-grid opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-gold-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-gold-400 font-medium">Services</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
              Practice Directory
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Our Professional Services
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Comprehensive accounting, taxation, statutory compliance and business consultancy solutions tailored to your commercial and personal requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Services Listing Section */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Summary Strip */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-xl bg-white border border-slate-200 shadow-sm">
            <div>
              <h3 className="text-lg font-bold text-navy-950">
                Need Guidance on Which Service Fits Your Situation?
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Reach our team directly for practical clarification on statutory requirements and applicable due dates.
              </p>
            </div>
            <a
              href={COMPANY.primaryPhone.href}
              className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 hover:bg-navy-800 text-white font-semibold text-sm rounded-md transition-colors shrink-0 shadow-sm"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              <span>Call: {COMPANY.primaryPhone.display}</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </div>
  );
}

