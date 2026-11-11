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

  const isHome = pathname === "/";

  // Throttled scroll listener using requestAnimationFrame to prevent high CPU / UI freeze
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

  // Determine appearance
  const isTransparent = isHome && !isScrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isTransparent
            ? "bg-navy-950/85 backdrop-blur-md border-b border-white/10 py-2.5 sm:py-3.5"
            : "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5 sm:py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* Logo */}
            <div className="min-w-0 shrink">
              <Logo
                variant={isTransparent ? "light" : "dark"}
                size="md"
                showTagline={true}
              />
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
                    className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                      isTransparent
                        ? isActive
                          ? "text-gold-400 bg-white/10"
                          : "text-slate-200 hover:text-white hover:bg-white/5"
                        : isActive
                        ? "text-navy-900 bg-slate-100 font-semibold"
                        : "text-slate-600 hover:text-navy-950 hover:bg-slate-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Right CTA Button */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={COMPANY.primaryPhone.href}
                className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-md transition-all shadow-sm ${
                  isTransparent
                    ? "bg-gold-500 hover:bg-gold-400 text-navy-950"
                    : "bg-navy-900 hover:bg-navy-800 text-white"
                }`}
              >
                <Phone className="w-3.5 h-3.5 text-gold-300" />
                <span>Call Now: {COMPANY.primaryPhone.display}</span>
              </a>
            </div>

            {/* Mobile Actions: Phone Pill + Hamburger Button (Always visible together) */}
            <div className="flex lg:hidden items-center gap-1.5 shrink-0">
              {/* Quick Call Pill */}
              <a
                href={COMPANY.primaryPhone.href}
                className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  isTransparent
                    ? "bg-gold-500/20 hover:bg-gold-500 text-gold-300 hover:text-navy-950 border border-gold-400/40"
                    : "bg-navy-900 text-white hover:bg-navy-800"
                }`}
                aria-label="Call 8547045170"
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="font-mono text-[11px] font-bold">Call</span>
              </a>

              {/* Hamburger Menu Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-1.5 rounded-md transition-colors ${
                  isTransparent
                    ? "text-slate-200 hover:text-white hover:bg-white/10"
                    : "text-slate-700 hover:text-navy-900 hover:bg-slate-100"
                }`}
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden bg-navy-950/80 backdrop-blur-sm transition-opacity"
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
                  className="p-2 text-slate-500 hover:text-navy-950 rounded-md"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
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
                      className={`flex items-center justify-between px-3.5 py-3 text-base rounded-md font-medium transition-colors ${
                        isActive
                          ? "bg-slate-100 text-navy-950 font-semibold border-l-4 border-gold-500 pl-3.5"
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
                  Core Consultancies
                </p>
                <div className="grid grid-cols-1 gap-2 text-sm text-slate-600">
                  <Link
                    href="/services/accounts"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-navy-900 py-1"
                  >
                    • Accounts &amp; Bookkeeping
                  </Link>
                  <Link
                    href="/services/gst-registration"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-navy-900 py-1"
                  >
                    • GST Registration &amp; Returns
                  </Link>
                  <Link
                    href="/services/income-tax"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-navy-900 py-1"
                  >
                    • Income Tax Returns
                  </Link>
                  <Link
                    href="/services/company-llp-formation"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-navy-900 py-1"
                  >
                    • Company &amp; LLP Formation
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Contact inside Mobile Menu */}
            <div className="pt-6 mt-6 border-t border-slate-100">
              <a
                href={COMPANY.primaryPhone.href}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-navy-900 hover:bg-navy-800 text-white font-semibold rounded-md shadow text-center"
              >
                <Phone className="w-4 h-4 text-gold-400" />
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
