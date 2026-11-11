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
    <div className="group flex flex-col justify-between bg-white rounded-xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-gold-500/40 transition-all">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-lg bg-navy-50 text-navy-900 group-hover:bg-navy-900 group-hover:text-gold-400 flex items-center justify-center transition-colors">
            <IconComponent className="w-5 h-5" />
          </div>
          <span className="font-mono text-xs font-semibold text-slate-400">
            {service.number}
          </span>
        </div>

        <h3 className="text-base font-bold text-navy-950 group-hover:text-gold-700 transition-colors">
          <Link href={`/services/${service.slug}`}>
            {service.title}
          </Link>
        </h3>

        <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
          {service.shortDescription}
        </p>
      </div>

      <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-1 text-xs font-semibold text-navy-900 group-hover:text-gold-600 transition-colors"
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <a
          href="tel:+918547045170"
          className="text-xs font-medium text-slate-400 hover:text-navy-900"
          title="Call for enquiry"
        >
          Call
        </a>
      </div>
    </div>
  );
}
