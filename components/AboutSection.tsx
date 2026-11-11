import React from "react";
import Link from "next/link";
import { Check, Phone, MapPin } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function AboutSection() {
  const points = [
    "Professional Accounting & Bookkeeping",
    "GST Registration & Tax Returns",
    "Company, LLP & Partnership Formation",
    "Project Reports for Bank Finance & Internal Audit",
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
              About Us
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-950 tracking-tight">
              Trusted Financial &amp; Tax Consultancy in Payangadi
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Accord Knowledge Group is a tax and management consultancy firm based in Eripuram, Payangadi. We provide complete solutions for all your accounting, taxation, company registration, and business advisory needs under one roof.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {points.map((pt, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-navy-900 text-gold-400 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-sm font-medium text-navy-950">{pt}</span>
                </div>
              ))}
            </div>

            <div className="pt-3 flex items-center gap-4">
              <Link
                href="/contact"
                className="px-5 py-2.5 bg-navy-900 hover:bg-navy-800 text-white font-semibold text-sm rounded-md transition-colors"
              >
                Contact Office
              </Link>
              <a
                href={COMPANY.primaryPhone.href}
                className="text-sm font-semibold text-navy-900 hover:text-gold-600 flex items-center gap-1.5"
              >
                <Phone className="w-4 h-4 text-gold-600" />
                <span>8547045170</span>
              </a>
            </div>
          </div>

          {/* Right Clean Office Card */}
          <div className="lg:col-span-5">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-navy-950">Payangadi Office</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    2nd Floor, Writer&apos;s Building, Near Police Station, Eripuram, Payangadi – 670 303
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500">Call Us:</span>
                <span className="font-mono font-bold text-navy-950">
                  <a href="tel:+918547045170" className="hover:text-gold-600">8547045170</a>
                  {" • "}
                  <a href="tel:04972985517" className="hover:text-gold-600">0497-2985517</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
