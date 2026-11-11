import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | Accord Knowledge Group",
  description:
    "Privacy Policy for Accord Knowledge Group, detailing how client information and documents are handled with strict professional confidentiality.",
};

export default function PrivacyPolicyPage() {
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
            <span className="text-gold-400">Privacy Policy</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-300 mt-2">
            Last updated: January 2026 • Accord Knowledge Group
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-700 space-y-8 text-sm sm:text-base leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-navy-950 mb-3">
              1. Commitment to Client Confidentiality
            </h2>
            <p>
              Accord Knowledge Group (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;the firm&rdquo;) operates as a professional tax and management consultancy located at 2nd Floor, Writer&apos;s Building, Near Police Station, Eripuram, Payangadi – 670 303, Kerala. Because our practice involves financial records, tax returns, identity proofs, and corporate documents, we treat all client information with strict professional confidentiality.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy-950 mb-3">
              2. Information We Collect
            </h2>
            <p className="mb-2">
              In the course of providing accounting, taxation, and consultancy services, we may collect:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm text-slate-600">
              <li>Contact details such as name, phone numbers, and email addresses.</li>
              <li>Statutory identification documents including PAN, Aadhaar, TAN, and GSTIN.</li>
              <li>Financial records, invoices, bank statements, and trial balances provided for accounting and return filing.</li>
              <li>Corporate charter documents (Partnership Deeds, MOA, AOA) provided for registration or drafting.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy-950 mb-3">
              3. Use of Information
            </h2>
            <p>
              Client information is utilized exclusively to perform the agreed-upon accounting, taxation, filing, registration, and advisory tasks authorized by the client, and to interact with statutory governmental portals (such as GST, Income Tax, TRACES, and MCA) on behalf of the client.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy-950 mb-3">
              4. Non-Disclosure &amp; Third Parties
            </h2>
            <p>
              We do not sell, rent, trade, or disclose client information to external third parties or commercial marketing agencies. Information is shared only with statutory government authorities (Income Tax Department, GST Department, MCA) strictly as required to fulfill statutory filings authorized by the client.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy-950 mb-3">
              5. Contact Us Regarding Your Data
            </h2>
            <p>
              If you have any questions regarding your documentation or privacy, please contact Accord Knowledge Group at:
            </p>
            <address className="not-italic mt-3 p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm">
              <strong>Accord Knowledge Group – Tax &amp; Management Consultants</strong>
              <br />
              {COMPANY.address.full}
              <br />
              Phone: {COMPANY.phones.map((p) => p.number).join(", ")}
            </address>
          </div>
        </div>
      </section>
    </div>
  );
}

