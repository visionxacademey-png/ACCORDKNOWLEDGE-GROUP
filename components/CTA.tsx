import React from "react";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function CTA() {
  return (
    <section className="py-16 bg-navy-950 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          Need Help With Accounting, Taxation, or Compliance?
        </h2>
        <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
          Speak with Accord Knowledge Group and discuss your requirements.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href={COMPANY.primaryPhone.href}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-sm rounded-md transition-all shadow"
          >
            <Phone className="w-4 h-4" />
            <span>Call 8547045170</span>
          </a>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/15 text-white border border-white/20 font-medium text-sm rounded-md transition-all"
          >
            <Mail className="w-4 h-4 text-gold-400" />
            <span>Send Enquiry</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
