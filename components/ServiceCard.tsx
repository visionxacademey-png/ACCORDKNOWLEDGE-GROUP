import React from "react";
import Link from "next/link";
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
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import { ServiceItem } from "@/lib/services";

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

export default function ServiceCard({ service }: { service: ServiceItem }) {
  const IconComponent = ICON_MAP[service.iconName] || BookOpen;

  return (
    <div className="group relative flex flex-col justify-between bg-white rounded-xl p-6 sm:p-7 border border-slate-200/90 shadow-card hover:shadow-card-hover hover:border-gold-500/40 transition-all duration-300">
      <div>
        {/* Top bar: Number & Icon */}
        <div className="flex items-center justify-between mb-5">
          <span className="font-mono text-xs font-bold tracking-wider px-2.5 py-1 rounded bg-slate-100 text-navy-800 group-hover:bg-gold-50 group-hover:text-gold-700 transition-colors">
            {service.number}
          </span>
          <div className="w-11 h-11 rounded-lg bg-navy-50 text-navy-900 group-hover:bg-navy-900 group-hover:text-gold-400 flex items-center justify-center transition-colors">
            <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
          </div>
        </div>

        {/* Category Pill */}
        <span className="text-[11px] font-semibold uppercase tracking-wider text-gold-600 block mb-1">
          {service.category}
        </span>

        {/* Title */}
        <h3 className="text-lg font-bold text-navy-950 group-hover:text-gold-700 transition-colors tracking-tight">
          <Link href={`/services/${service.slug}`} className="focus:outline-none">
            {service.title}
          </Link>
        </h3>

        {/* Short Description */}
        <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
          {service.shortDescription}
        </p>

        {/* Key Highlights list */}
        <ul className="mt-4 space-y-1.5 pt-4 border-t border-slate-100 text-xs text-slate-500">
          {service.keyHighlights.slice(0, 3).map((item, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Learn More link */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy-900 group-hover:text-gold-600 transition-colors"
          aria-label={`Learn more about ${service.title}`}
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
        <span className="text-[11px] text-slate-400">Accord Advisory</span>
      </div>
    </div>
  );
}

