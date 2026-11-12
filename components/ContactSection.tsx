"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Building,
  CheckCircle,
  AlertCircle,
  Send,
  ExternalLink,
} from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { SERVICES } from "@/lib/services";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim()) {
      errs.name = "Please enter your full name.";
    }

    if (!formData.phone.trim()) {
      errs.phone = "Please enter your phone number.";
    } else {
      const cleanPhone = formData.phone.replace(/[\s\-+]/g, "");
      if (cleanPhone.length < 10) {
        errs.phone = "Please enter a valid 10-digit phone number.";
      }
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errs.email = "Please enter a valid email address.";
      }
    }

    if (!formData.service) {
      errs.service = "Please select the service required.";
    }

    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate clean form processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    });
    setSubmitted(false);
    setErrors({});
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
            Reach Our Office
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-950 tracking-tight">
            Get in Touch
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Visit our office in Eripuram, Payangadi or call our direct phone lines for immediate assistance with your taxation and accounting requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Column: Contact Cards & Phone Numbers */}
          <div className="lg:col-span-5 space-y-6">
            {/* Office Address Card */}
            <div className="bg-white rounded-xl p-6 sm:p-7 border border-slate-200 shadow-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-navy-900 text-gold-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gold-600">
                    Office Location
                  </span>
                  <h3 className="text-lg font-bold text-navy-950 mt-1">
                    Payangadi Office
                  </h3>
                  <address className="not-italic mt-2 text-sm text-slate-600 leading-relaxed">
                    <strong>2nd Floor, Writer&apos;s Building</strong>
                    <br />
                    Near Police Station
                    <br />
                    Eripuram, Payangadi
                    <br />
                    Kerala – 670 303
                  </address>
                </div>
              </div>
            </div>

            {/* Direct Phone Lines Card */}
            <div className="bg-white rounded-xl p-6 sm:p-7 border border-slate-200 shadow-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-navy-900 text-gold-400 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="w-full">
                  <span className="text-xs font-bold uppercase tracking-wider text-gold-600">
                    Direct Contact Lines
                  </span>
                  <h3 className="text-lg font-bold text-navy-950 mt-1 mb-3">
                    Call Accord Consultants
                  </h3>

                  <div className="space-y-3 divide-y divide-slate-100 text-sm">
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-slate-500">Mobile (Primary):</span>
                      <a
                        href={COMPANY.primaryPhone.href}
                        className="font-mono font-bold text-navy-950 hover:text-gold-600 transition-colors"
                      >
                        {COMPANY.primaryPhone.display}
                      </a>
                    </div>

                    <div className="flex items-center justify-between pt-3">
                      <span className="text-slate-500">Mobile (Alternative):</span>
                      <a
                        href="tel:+919446489607"
                        className="font-mono font-bold text-navy-950 hover:text-gold-600 transition-colors"
                      >
                        9446489607
                      </a>
                    </div>

                    <div className="flex items-center justify-between pt-3">
                      <span className="text-slate-500">Landline:</span>
                      <a
                        href="tel:04972985517"
                        className="font-mono font-bold text-navy-950 hover:text-gold-600 transition-colors"
                      >
                        0497-2985517
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Official Email Card */}
            <div className="bg-white rounded-xl p-6 sm:p-7 border border-slate-200 shadow-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-navy-900 text-gold-400 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="w-full">
                  <span className="text-xs font-bold uppercase tracking-wider text-gold-600">
                    Email Correspondence
                  </span>
                  <h3 className="text-lg font-bold text-navy-950 mt-1 mb-2">
                    Official Email
                  </h3>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="font-medium text-navy-950 hover:text-gold-600 transition-colors text-sm break-all font-mono"
                  >
                    {COMPANY.email}
                  </a>
                  <p className="text-xs text-slate-500 mt-2">
                    Send documents, statements, or formal consultation queries directly to our office.
                  </p>
                </div>
              </div>
            </div>

            {/* Business Positioning Notice */}
            <div className="bg-navy-950 rounded-xl p-6 text-white border border-slate-800">
              <div className="flex items-center gap-2 text-gold-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Building className="w-4 h-4" />
                <span>One-Stop Solutions</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Whether you need assistance with urgent GST returns, income tax filings, business incorporation, or a project report for bank finance, our office is ready to assist you.
              </p>
            </div>
          </div>

          {/* Right Column: Professional Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl p-6 sm:p-8 md:p-10 border border-slate-200 shadow-card">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-navy-950 tracking-tight">
                  Send an Enquiry
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  Fill out the details below and specify the service you require.
                </p>
              </div>

              {submitted ? (
                <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-6 text-emerald-950 space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0" />
                    <h4 className="font-bold text-base">
                      Enquiry Submitted Successfully
                    </h4>
                  </div>
                  <p className="text-sm text-emerald-800 leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Your consultation request regarding <strong>{formData.service}</strong> has been logged.
                  </p>
                  <div className="p-4 rounded-md bg-white border border-emerald-200 text-xs text-slate-700 space-y-1">
                    <p className="font-semibold text-navy-950">
                      Need immediate attention for compliance deadlines?
                    </p>
                    <p>
                      Please call our direct desk at{" "}
                      <a
                        href={COMPANY.primaryPhone.href}
                        className="font-bold text-navy-900 underline hover:text-gold-600"
                      >
                        {COMPANY.primaryPhone.display}
                      </a>{" "}
                      or{" "}
                      <a
                        href="tel:04972985517"
                        className="font-bold text-navy-900 underline hover:text-gold-600"
                      >
                        0497-2985517
                      </a>
                      .
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-xs font-semibold text-emerald-700 hover:text-emerald-900 underline pt-2"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="form-name"
                      className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className={`w-full px-4 py-2.5 rounded-md border text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-colors ${
                        errors.name
                          ? "border-red-400 bg-red-50/50"
                          : "border-slate-300 focus:border-navy-900"
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="form-phone"
                        className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5"
                      >
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="form-phone"
                        type="tel"
                        placeholder="e.g. 9847012345"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className={`w-full px-4 py-2.5 rounded-md border text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-colors ${
                          errors.phone
                            ? "border-red-400 bg-red-50/50"
                            : "border-slate-300 focus:border-navy-900"
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="form-email"
                        className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5"
                      >
                        Email Address (Optional)
                      </label>
                      <input
                        id="form-email"
                        type="email"
                        placeholder="e.g. name@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={`w-full px-4 py-2.5 rounded-md border text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-colors ${
                          errors.email
                            ? "border-red-400 bg-red-50/50"
                            : "border-slate-300 focus:border-navy-900"
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label
                      htmlFor="form-service"
                      className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5"
                    >
                      Service Required <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="form-service"
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className={`w-full px-4 py-2.5 rounded-md border text-sm text-slate-900 bg-white focus:outline-none transition-colors ${
                        errors.service
                          ? "border-red-400 bg-red-50/50"
                          : "border-slate-300 focus:border-navy-900"
                      }`}
                    >
                      <option value="">-- Please select a service --</option>
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.number} — {s.title}
                        </option>
                      ))}
                      <option value="General Financial Consultancy">
                        General Financial &amp; Management Consultancy
                      </option>
                    </select>
                    {errors.service && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.service}</span>
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="form-message"
                      className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5"
                    >
                      Brief Requirement Details (Optional)
                    </label>
                    <textarea
                      id="form-message"
                      rows={4}
                      placeholder="Share brief notes on your business, current filing status, or specific question..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-md border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-navy-900 transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-navy-900 hover:bg-navy-800 text-white font-semibold text-sm rounded-md transition-colors shadow-sm disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span>Processing...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-gold-400" />
                          <span>Submit Enquiry</span>
                        </>
                      )}
                    </button>
                    <p className="mt-2.5 text-[11px] text-center text-slate-400">
                      Your details remain strictly confidential and will be used solely to respond to your enquiry.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Map Section for Eripuram, Payangadi, Kerala – 670303 */}
        <div className="mt-16 bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-card">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
                Location Map
              </span>
              <h3 className="text-lg font-bold text-navy-950 mt-0.5">
                Visit Us at Eripuram, Payangadi
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                2nd Floor, Writer&apos;s Building, Near Police Station, Eripuram, Payangadi – 670 303
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Eripuram,+Payangadi,+Kerala+670303"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-navy-900 bg-slate-100 hover:bg-gold-50 hover:text-gold-800 rounded border border-slate-200 transition-colors self-start sm:self-auto"
            >
              <span>View Location on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Interactive Google Map iframe with resilient background fallback */}
          <div className="relative w-full h-80 sm:h-96 rounded-lg overflow-hidden border border-slate-200 bg-slate-100 flex items-center justify-center">
            {/* Fallback card visible if iframe takes time or is offline */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-slate-50 z-0">
              <MapPin className="w-8 h-8 text-gold-600 mb-2" />
              <p className="text-sm font-bold text-navy-950">Accord Knowledge Group Office</p>
              <p className="text-xs text-slate-500 mt-1 max-w-sm">
                2nd Floor, Writer&apos;s Building, Near Police Station, Eripuram, Payangadi – 670 303
              </p>
              <a
                href="https://maps.google.com/?q=Eripuram,+Payangadi,+Kerala+670303"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 px-4 py-2 bg-navy-900 text-white rounded text-xs font-semibold hover:bg-navy-800 transition-colors"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-gold-400" />
              </a>
            </div>

            {/* Google Maps Embed iframe on top */}
            <iframe
              title="Accord Knowledge Group Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15609.529068032545!2d75.2678!3d12.0152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba46a6f695f2d71%3A0x6b4f706d3d95c52c!2sEripuram%2C%20Payangadi%2C%20Kerala%20670303!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="relative z-10 w-full h-full grayscale-[20%] contrast-[1.05]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

