import React from "react";
import Link from "next/link";
import { Phone, MapPin, ArrowRight, Mail } from "lucide-react";
import Logo from "./Logo";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  const footerServices = [
    { label: "Accounts & Bookkeeping", href: "/services/accounts" },
    { label: "GST Registration & Returns", href: "/services/gst-registration" },
    { label: "Income Tax Returns", href: "/services/income-tax" },
    { label: "TDS Filing", href: "/services/tds" },
    { label: "Digital Signature", href: "/services/digital-signature" },
    { label: "Project Report for Bank Finance", href: "/services/project-report" },
    { label: "Partnership Deed", href: "/services/partnership-deed" },
    { label: "Company & LLP Formation", href: "/services/company-llp-formation" },
    { label: "Internal Audit & Consultancy", href: "/services/internal-audit" },
  ];

  return (
    <footer className="bg-navy-950 text-white border-t border-slate-800">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Col 1: Brand & Description (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="light" size="md" showTagline={true} />

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm pt-2">
              Accord Knowledge Group is a dedicated tax and management consultancy firm in Payangadi, Kerala. We provide one-stop solutions for all your financial accounting, taxation, and corporate compliance needs.
            </p>

            <div className="pt-2 text-xs text-gold-400 font-semibold uppercase tracking-wider">
              {COMPANY.positioning}
            </div>
          </div>

          {/* Col 2: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold-400">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-gold-300 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-gold-300 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-gold-300 transition-colors"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold-400">
              Core Services
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              {footerServices.map((srv) => (
                <li key={srv.href}>
                  <Link
                    href={srv.href}
                    className="hover:text-gold-300 transition-colors inline-flex items-center gap-1.5 text-xs sm:text-sm"
                  >
                    <ArrowRight className="w-3 h-3 text-gold-500 shrink-0" />
                    <span>{srv.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Office (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold-400">
              Office &amp; Contact
            </h4>

            {/* Address */}
            <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
              <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
              <address className="not-italic leading-relaxed">
                2nd Floor, Writer&apos;s Building,
                <br />
                Near Police Station,
                <br />
                Eripuram, Payangadi – 670 303
                <br />
                Kerala, India
              </address>
            </div>

            {/* Direct Phone Numbers & Email */}
            <div className="pt-2 space-y-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a
                  href={COMPANY.primaryPhone.href}
                  className="font-mono hover:text-gold-300 transition-colors font-medium"
                >
                  {COMPANY.primaryPhone.display}
                </a>
              </div>
              <div className="flex items-center gap-2.5 pl-6">
                <a
                  href="tel:+919446489607"
                  className="font-mono hover:text-gold-300 transition-colors"
                >
                  9446489607
                </a>
              </div>
              <div className="flex items-center gap-2.5 pl-6">
                <span className="text-slate-400 text-xs">Landline:</span>
                <a
                  href="tel:04972985517"
                  className="font-mono hover:text-gold-300 transition-colors"
                >
                  0497-2985517
                </a>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="hover:text-gold-300 transition-colors break-all"
                >
                  {COMPANY.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; 2026 Accord Knowledge Group. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-slate-200 transition-colors">
              Terms &amp; Conditions
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-slate-200 transition-colors">
              Payangadi Office
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

