import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms & Conditions | Accord Knowledge Group",
  description:
    "Terms and Conditions governing professional consultancy, accounting, and tax compliance engagements with Accord Knowledge Group, Payangadi.",
};

export default function TermsPage() {
  return (
    <div className="pt-24 lg:pt-28">
      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-14 lg:py-18 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-gold-400">
              Home
            </Link>
            <span>/</span>
            <span className="text-gold-400">Terms &amp; Conditions</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Terms &amp; Conditions
          </h1>
          <p className="text-sm text-slate-300 mt-2">
            Last updated: January 2026 • Accord Knowledge Group
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-700 space-y-8 text-sm sm:text-base leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-navy-950 mb-3">
              1. Engagement &amp; Scope of Services
            </h2>
            <p>
              Accord Knowledge Group provides professional assistance in accounting, taxation (GST, Income Tax, TDS), digital signature issuance, partnership deed drafting, company formation, and financial project report preparation. The scope of each engagement is determined based on the specific services requested by the client and relevant statutory requirements.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy-950 mb-3">
              2. Accuracy of Client Information
            </h2>
            <p>
              Statutory filings, computations, and project reports are prepared based upon the books of account, statements, invoices, and documents provided by the client. Clients are responsible for ensuring that all data, invoices, turnover declarations, and underlying transaction documents furnished to us are genuine, accurate, and complete.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy-950 mb-3">
              3. Statutory Due Dates &amp; Compliance Timelines
            </h2>
            <p>
              While Accord Knowledge Group endeavors to complete all filings within statutory timelines, clients must provide relevant books, bank statements, OTP verifications, and digital signature authorizations in sufficient time before statutory cut-off dates.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy-950 mb-3">
              4. Website Content &amp; Disclaimer
            </h2>
            <p>
              The information presented on this website is provided for general informational purposes and does not constitute formal legal or binding financial advice for any specific commercial transaction without an individual professional engagement.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy-950 mb-3">
              5. Office Jurisdiction
            </h2>
            <p>
              All professional engagements and consultations are subject to the laws of India, with jurisdiction centered at Kannur District, Kerala.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy-950 mb-3">
              6. Queries &amp; Office Contact
            </h2>
            <p>
              For any clarification regarding these terms, please contact our office at:
            </p>
            <address className="not-italic mt-3 p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm">
              <strong>Accord Knowledge Group – Tax &amp; Management Consultants</strong>
              <br />
              {COMPANY.address.full}
              <br />
              Direct Lines: 9072908710 / 9446489607 / 0497-2985517
              <br />
              Email: accorderipuram@gmail.com
            </address>
          </div>
        </div>
      </section>
    </div>
  );
}

