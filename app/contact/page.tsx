import React from "react";
import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us | Accord Knowledge Group – Payangadi Office",
  description:
    "Contact Accord Knowledge Group for professional accounting, GST, income tax, and corporate consultancy in Eripuram, Payangadi, Kerala. Call 8547045170.",
};

export default function ContactPage() {
  return (
    <div className="pt-24">
      {/* Simple Header */}
      <section className="bg-navy-950 text-white py-14 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
            Get in Touch
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Contact Our Office
          </h1>
          <p className="text-sm text-slate-300">
            2nd Floor, Writer&apos;s Building, Near Police Station, Eripuram, Payangadi
          </p>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
