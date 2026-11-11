import React from "react";
import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import Logo from "./Logo";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  const services = [
    { label: "Accounts", href: "/services/accounts" },
    { label: "GST Registration & Returns", href: "/services/gst-registration" },
    { label: "Income Tax Returns", href: "/services/income-tax" },
    { label: "TDS Filing", href: "/services/tds" },
    { label: "Digital Signature", href: "/services/digital-signature" },
    { label: "Project Reports", href: "/services/project-report" },
    { label: "Company & LLP Formation", href: "/services/company-llp-formation" },
    { label: "Internal Audit", href: "/services/internal-audit" },
  ];

  return (
    <footer className="bg-navy-950 text-white border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Brand */}
          <div className="space-y-3">
            <Logo variant="light" size="sm" showTagline={true} />
            <p className="text-xs text-slate-400 leading-relaxed">
              {COMPANY.positioning}
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold-400 mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-gold-300">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/privacy-policy" className="hover:text-gold-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-gold-300">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold-400 mb-3">
              Services
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="hover:text-gold-300">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Office */}
          <div className="space-y-3 text-xs text-slate-300">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold-400 mb-3">
              Office
            </h4>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
              <address className="not-italic leading-relaxed">
                2nd Floor, Writer&apos;s Building, Near Police Station, Eripuram, Payangadi – 670 303
              </address>
            </div>
            <div className="space-y-1 pt-1 font-mono">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                <a href="tel:+918547045170" className="hover:text-gold-300">
                  8547045170
                </a>
              </div>
              <div className="pl-5">
                <a href="tel:+919446489607" className="hover:text-gold-300">
                  9446489607
                </a>
              </div>
              <div className="pl-5">
                <a href="tel:04972985517" className="hover:text-gold-300">
                  0497-2985517
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
          &copy; 2026 Accord Knowledge Group. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
