import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us | Accord Knowledge Group – Payangadi Office",
  description:
    "Contact Accord Knowledge Group for professional accounting, GST, income tax, and corporate consultancy in Eripuram, Payangadi, Kerala. Call 8547045170.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 lg:pt-28">
      {/* Subpage Header Banner */}
      <section className="bg-navy-950 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-financial-grid opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-gold-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-gold-400 font-medium">Contact</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
              Consultation &amp; Enquiries
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Get in Touch with Accord Knowledge Group
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We welcome your phone enquiries and in-person consultations at our office in Eripuram, Payangadi.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Experience */}
      <ContactSection />
    </div>
  );
}

