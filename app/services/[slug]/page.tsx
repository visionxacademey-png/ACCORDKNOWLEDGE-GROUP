import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BookOpen,
  Receipt,
  FileSpreadsheet,
  Percent,
  KeyRound,
  Landmark,
  FileSignature,
  Building2,
  ShieldCheck,
  Check,
  Phone,
  ChevronRight,
  LucideIcon,
} from "lucide-react";
import { SERVICES } from "@/lib/services";
import { COMPANY } from "@/lib/constants";
import ContactSection from "@/components/ContactSection";

const ICON_MAP: Record<string, LucideIcon> = {
  BookOpen,
  Receipt,
  FileSpreadsheet,
  Percent,
  KeyRound,
  Landmark,
  FileSignature,
  Building2,
  ShieldCheck,
};

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const slug = params?.slug;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) {
    return {
      title: "Service Not Found | Accord Knowledge Group",
    };
  }

  return {
    title: `${service.title} | Accord Knowledge Group – Payangadi`,
    description: service.shortDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
  };
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params?.slug;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const IconComponent = ICON_MAP[service.iconName] || BookOpen;
  const otherServices = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-navy-950 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-gold-400">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-500" />
            <Link href="/services" className="hover:text-gold-400">Services</Link>
            <ChevronRight className="w-3 h-3 text-slate-500" />
            <span className="text-gold-400">{service.title}</span>
          </nav>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0">
              <IconComponent className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono font-semibold text-gold-400">
                SERVICE {service.number} • {service.category}
              </span>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-0.5">
                {service.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 space-y-8">
              <div className="space-y-3">
                <h2 className="text-lg font-bold text-navy-950">Overview</h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {service.fullDescription}
                </p>
              </div>

              {/* Scope */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <h3 className="text-sm font-bold text-navy-950">What We Handle</h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {service.whatItInvolves.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Who It Is For */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-navy-950">Who This Is For</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {service.whoItIsFor.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-navy-900 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why It Matters */}
              <div className="p-4 rounded-lg bg-navy-950 text-white space-y-1.5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gold-400">
                  Why Professional Assistance Matters
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {service.whyItMatters}
                </p>
              </div>

              {/* Fast CTA */}
              <div className="p-4 rounded-xl bg-gold-50 border border-gold-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <h4 className="text-sm font-bold text-navy-950">Need assistance with {service.title}?</h4>
                  <p className="text-xs text-slate-600">Reach our consultants directly in Payangadi.</p>
                </div>
                <a
                  href={COMPANY.primaryPhone.href}
                  className="px-4 py-2 bg-navy-900 hover:bg-navy-800 text-white font-semibold text-xs rounded transition-colors shrink-0 flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-400" />
                  <span>Call 8547045170</span>
                </a>
              </div>
            </div>

            {/* Right Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-5">
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <h3 className="text-sm font-bold text-navy-950">Office Contact</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  2nd Floor, Writer&apos;s Building, Near Police Station, Eripuram, Payangadi – 670 303
                </p>
                <div className="pt-2 border-t border-slate-200 space-y-1.5 text-xs font-mono">
                  <p><a href="tel:+918547045170" className="hover:text-gold-600 font-bold">8547045170</a></p>
                  <p><a href="tel:+919446489607" className="hover:text-gold-600 font-bold">9446489607</a></p>
                  <p><a href="tel:04972985517" className="hover:text-gold-600 font-bold">0497-2985517</a></p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  All Services
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {otherServices.map((s) => (
                    <li key={s.id}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="hover:text-gold-700 block py-1 border-b border-slate-100 last:border-0"
                      >
                        {s.number} — {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
