"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Scroll listener throttled with requestAnimationFrame
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY > 20;
          setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll safely when mobile menu is open
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
    }
    return () => {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "unset";
      }
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Floating Pill Navbar matching the modern reference design */}
      <header className="fixed top-2.5 sm:top-4 inset-x-3 sm:inset-x-6 z-40 max-w-7xl mx-auto transition-all duration-300">
        <div
          className={`w-full rounded-full px-3.5 sm:px-6 py-2 sm:py-2.5 transition-all duration-300 flex items-center justify-between shadow-lg shadow-black/[0.04] border ${
            isScrolled
              ? "bg-white/95 backdrop-blur-md border-slate-200/90 shadow-card"
              : "bg-white/90 backdrop-blur-md border-white/80"
          }`}
        >
          {/* Left: Brand Logo */}
          <div className="min-w-0 shrink">
            <Logo variant="dark" size="md" showTagline={false} />
          </div>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center space-x-1"
            aria-label="Main Navigation"
          >
            {NAV_LINKS.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-sm font-medium rounded-full transition-colors ${
                    isActive
                      ? "text-navy-950 bg-slate-100 font-semibold"
                      : "text-slate-600 hover:text-navy-950 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA Pill */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={COMPANY.primaryPhone.href}
              className="inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold rounded-full bg-[#E86025] hover:bg-[#d4521a] text-white shadow-sm transition-all"
            >
              <Phone className="w-3.5 h-3.5 fill-white/20 text-white" />
              <span>Call: {COMPANY.primaryPhone.display}</span>
            </a>
          </div>

          {/* Mobile Right Circular Controls (Matching Reference: Circular Call Icon + Circular Menu Icon) */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            {/* Circular Call Button */}
            <a
              href={COMPANY.primaryPhone.href}
              className="w-9 h-9 rounded-full bg-slate-50 hover:bg-amber-50 border border-slate-200 flex items-center justify-center text-slate-700 hover:text-amber-600 shadow-xs transition-colors"
              aria-label="Call 8547045170"
            >
              <Phone className="w-4 h-4 text-[#E86025]" />
            </a>

            {/* Circular Hamburger Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800 shadow-xs transition-colors focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden bg-navy-950/70 backdrop-blur-sm transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col justify-between p-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Header inside mobile menu */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                <Logo variant="dark" size="sm" showTagline={true} />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:text-navy-950"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-6 flex flex-col space-y-1.5" aria-label="Mobile Navigation">
                {NAV_LINKS.map((link) => {
                  const isActive =
                    pathname === link.href ||
                    (link.href !== "/" && pathname.startsWith(link.href));

                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-3.5 py-3 text-base rounded-xl font-medium transition-colors ${
                        isActive
                          ? "bg-amber-50 text-amber-950 font-semibold border-l-4 border-[#E86025] pl-3.5"
                          : "text-slate-700 hover:bg-slate-50 hover:text-navy-900"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-400" />
                    </Link>
                  );
                })}
              </nav>

              {/* Quick Services List */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  Core Practice Areas
                </p>
                <div className="grid grid-cols-1 gap-2 text-sm text-slate-600">
                  <Link
                    href="/services/accounts"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-amber-600 py-1"
                  >
                    • Accounts &amp; Bookkeeping
                  </Link>
                  <Link
                    href="/services/gst-registration"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-amber-600 py-1"
                  >
                    • GST Registration &amp; Returns
                  </Link>
                  <Link
                    href="/services/income-tax"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-amber-600 py-1"
                  >
                    • Income Tax Returns
                  </Link>
                  <Link
                    href="/services/company-llp-formation"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-amber-600 py-1"
                  >
                    • Company &amp; LLP Formation
                  </Link>
                  <Link
                    href="/services/project-report"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-amber-600 py-1"
                  >
                    • Project Report for Bank Finance
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Contact inside Mobile Menu */}
            <div className="pt-6 mt-6 border-t border-slate-100">
              <a
                href={COMPANY.primaryPhone.href}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#E86025] hover:bg-[#d4521a] text-white font-semibold rounded-full shadow text-center text-sm"
              >
                <Phone className="w-4 h-4 fill-white/20 text-white" />
                <span>Call {COMPANY.primaryPhone.display}</span>
              </a>
              <p className="mt-3 text-xs text-center text-slate-500 leading-relaxed">
                2nd Floor, Writer&apos;s Building, Near Police Station, Eripuram, Payangadi
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
