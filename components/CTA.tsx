import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function CTA() {
  return (
    <section className="relative py-20 lg:py-24 bg-navy-950 text-white overflow-hidden">
      {/* Background Subtle Financial Grid */}
      <div className="absolute inset-0 bg-financial-grid opacity-25 pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy-900 border border-gold-500/30 text-gold-400 text-xs font-semibold tracking-wider uppercase">
            Direct Professional Advisory
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Need Help With Accounting, Taxation or Business Compliance?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Speak with Accord Knowledge Group and discuss your requirements. We provide clear, confidential, and practical financial guidance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={COMPANY.primaryPhone.href}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold text-base rounded-md transition-all shadow-lg shadow-gold-500/20"
            >
              <Phone className="w-5 h-5" />
              <span>Call {COMPANY.primaryPhone.display}</span>
            </a>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-navy-900 hover:bg-navy-800 text-white border border-slate-700 font-medium text-base rounded-md transition-all"
            >
              <Mail className="w-4 h-4 text-gold-400" />
              <span>Send an Enquiry</span>
            </Link>
          </div>

          {/* Location note */}
          <div className="pt-8 border-t border-slate-800 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gold-400" />
              <span>{COMPANY.address.line1}, {COMPANY.address.area} – {COMPANY.address.pincode}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white font-medium">Alternative Mobile:</span>
              <a href="tel:+919446489607" className="hover:text-gold-400 font-mono">9446489607</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white font-medium">Landline:</span>
              <a href="tel:04972985517" className="hover:text-gold-400 font-mono">0497-2985517</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

