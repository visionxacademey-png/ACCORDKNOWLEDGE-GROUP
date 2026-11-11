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
  CheckCircle2,
  ArrowRight,
  Phone,
  HelpCircle,
  Users,
  ChevronRight,
  LucideIcon,
} from "lucide-react";
import { SERVICES, ServiceItem } from "@/lib/services";
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
    openGraph: {
      title: `${service.title} | Accord Knowledge Group`,
      description: service.shortDescription,
      url: `https://accordknowledgegroup.com/services/${service.slug}`,
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

  // Other related services for the sidebar
  const otherServices = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <div className="pt-24 lg:pt-28">
      {/* Subpage Header Banner */}
      <section className="bg-navy-950 text-white py-14 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-financial-grid opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav
            className="flex items-center gap-2 text-xs text-slate-400 mb-6"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-gold-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <Link
              href="/services"
              className="hover:text-gold-400 transition-colors"
            >
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-gold-400 font-medium">{service.title}</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-navy-900 border border-gold-500/30 text-gold-400 text-xs font-mono font-bold tracking-wider">
              <span>SERVICE {service.number}</span>
              <span>•</span>
              <span>{service.category}</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0">
                <IconComponent className="w-7 h-7" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                {service.title}
              </h1>
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed pt-2">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar Layout */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Main Article Body (8 cols) */}
            <div className="lg:col-span-8 space-y-12">
              {/* Detailed Overview */}
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
                  Service Overview
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-navy-950 tracking-tight">
                  Professional Guidance for {service.title}
                </h2>
                <p className="text-base text-slate-600 leading-relaxed">
                  {service.fullDescription}
                </p>
              </div>

              {/* What the Service Involves */}
              <div className="space-y-5 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-navy-900 text-gold-400 flex items-center justify-center font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-950 tracking-tight">
                    What This Service Involves
                  </h3>
                </div>

                <ul className="space-y-3.5 text-sm text-slate-700">
                  {service.whatItInvolves.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-gold-100 text-gold-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Who It Is For */}
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-navy-900 text-gold-400 flex items-center justify-center font-bold text-sm">
                    <Users className="w-4 h-4" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-950 tracking-tight">
                    Who This Service Is For
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {service.whoItIsFor.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-2.5"
                    >
                      <span className="w-2 h-2 rounded-full bg-navy-900 shrink-0 mt-1.5" />
                      <span className="text-sm text-slate-700 leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Professional Assistance Matters */}
              <div className="space-y-4 p-6 sm:p-8 rounded-2xl bg-navy-950 text-white border border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gold-500/20 text-gold-400 flex items-center justify-center font-bold text-sm">
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Why Professional Assistance Matters
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {service.whyItMatters}
                </p>
                <div className="pt-2 text-xs text-gold-300 font-semibold tracking-wide flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-400" />
                  <span>Accord Knowledge Group • Regulatory Practice Standards</span>
                </div>
              </div>

              {/* Action Callout */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-xl bg-slate-50 border border-slate-200">
                <div>
                  <h4 className="text-base font-bold text-navy-950">
                    Ready to proceed with {service.title}?
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Discuss your documents or schedule a consultation with our consultants in Payangadi.
                  </p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href={COMPANY.primaryPhone.href}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs rounded-md shadow-sm transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call 8547045170</span>
                  </a>
                  <a
                    href="#contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-navy-900 hover:bg-navy-800 text-white font-semibold text-xs rounded-md transition-colors"
                  >
                    <span>Enquire</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Direct Assistance Card */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm space-y-5">
                <h3 className="text-base font-bold text-navy-950 border-b border-slate-200 pb-3">
                  Direct Consultancy Support
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Have specific queries regarding required documents, deadlines, or registration procedures?
                </p>

                <div className="space-y-3 font-mono text-xs text-navy-950">
                  <div className="p-3 bg-white rounded border border-slate-200">
                    <span className="block text-[10px] text-slate-400 uppercase font-sans">
                      Primary Contact
                    </span>
                    <a
                      href="tel:+918547045170"
                      className="font-bold text-sm text-navy-950 hover:text-gold-600"
                    >
                      +91 85470 45170
                    </a>
                  </div>

                  <div className="p-3 bg-white rounded border border-slate-200">
                    <span className="block text-[10px] text-slate-400 uppercase font-sans">
                      Alternative Desk
                    </span>
                    <a
                      href="tel:+919446489607"
                      className="font-bold text-sm text-navy-950 hover:text-gold-600"
                    >
                      +91 94464 89607
                    </a>
                  </div>

                  <div className="p-3 bg-white rounded border border-slate-200">
                    <span className="block text-[10px] text-slate-400 uppercase font-sans">
                      Landline (Office)
                    </span>
                    <a
                      href="tel:04972985517"
                      className="font-bold text-sm text-navy-950 hover:text-gold-600"
                    >
                      0497-2985517
                    </a>
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-slate-500 leading-snug">
                  <strong>Office:</strong> 2nd Floor, Writer&apos;s Building, Near Police Station, Eripuram, Payangadi – 670 303
                </div>
              </div>

              {/* Other Services Navigation List */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-sm font-bold text-navy-950 uppercase tracking-wider text-slate-500">
                  Other Services
                </h3>
                <nav className="space-y-1.5" aria-label="Related Services">
                  {otherServices.map((item) => (
                    <Link
                      key={item.id}
                      href={`/services/${item.slug}`}
                      className="flex items-center justify-between p-2.5 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-navy-950 border border-transparent hover:border-slate-200 transition-colors"
                    >
                      <span className="truncate pr-2">
                        {item.number} — {item.title}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Contact Section */}
      <ContactSection />
    </div>
  );
}

