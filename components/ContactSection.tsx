"use client";

import React, { useState } from "react";
import {
  Phone,
  MapPin,
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
      errs.name = "Enter your name.";
    }

    if (!formData.phone.trim()) {
      errs.phone = "Enter your phone number.";
    } else {
      const cleanPhone = formData.phone.replace(/[\s\-+]/g, "");
      if (cleanPhone.length < 10) {
        errs.phone = "Enter a valid 10-digit number.";
      }
    }

    if (!formData.service) {
      errs.service = "Select a service.";
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

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600">
            Contact
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-950 tracking-tight">
            Get in Touch
          </h2>
          <p className="text-sm text-slate-500">
            Visit our office in Payangadi or call us directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Office & Phone */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-navy-950">Payangadi Office</h3>
                  <address className="not-italic text-xs text-slate-600 leading-relaxed mt-1">
                    2nd Floor, Writer&apos;s Building,
                    <br />
                    Near Police Station, Eripuram,
                    <br />
                    Payangadi, Kerala – 670 303
                  </address>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                <div className="w-full">
                  <h3 className="text-sm font-bold text-navy-950 mb-2">Phone Numbers</h3>
                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-sans">Primary Mobile:</span>
                      <a href="tel:+918547045170" className="font-bold text-navy-950 hover:text-gold-600">
                        8547045170
                      </a>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-sans">Alternative:</span>
                      <a href="tel:+919446489607" className="font-bold text-navy-950 hover:text-gold-600">
                        9446489607
                      </a>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-sans">Landline:</span>
                      <a href="tel:04972985517" className="font-bold text-navy-950 hover:text-gold-600">
                        0497-2985517
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Clean Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h3 className="text-base font-bold text-navy-950 mb-4">
                Send an Enquiry
              </h3>

              {submitted ? (
                <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-5 text-emerald-950 space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                    <h4 className="font-bold text-sm">Enquiry Received</h4>
                  </div>
                  <p className="text-xs text-emerald-800">
                    Thank you, {formData.name}. For urgent requirements, call{" "}
                    <a href="tel:+918547045170" className="font-bold underline">
                      8547045170
                    </a>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", phone: "", email: "", service: "", message: "" });
                    }}
                    className="text-xs text-emerald-700 underline pt-2 block"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="f-name" className="block text-xs font-medium text-slate-700 mb-1">
                        Name *
                      </label>
                      <input
                        id="f-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-3 py-2 rounded border text-sm text-slate-900 ${
                          errors.name ? "border-red-400 bg-red-50" : "border-slate-300"
                        }`}
                        placeholder="Your Name"
                      />
                      {errors.name && <p className="text-[11px] text-red-600 mt-0.5">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="f-phone" className="block text-xs font-medium text-slate-700 mb-1">
                        Phone *
                      </label>
                      <input
                        id="f-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-3 py-2 rounded border text-sm text-slate-900 ${
                          errors.phone ? "border-red-400 bg-red-50" : "border-slate-300"
                        }`}
                        placeholder="Phone Number"
                      />
                      {errors.phone && <p className="text-[11px] text-red-600 mt-0.5">{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="f-service" className="block text-xs font-medium text-slate-700 mb-1">
                      Service Required *
                    </label>
                    <select
                      id="f-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className={`w-full px-3 py-2 rounded border text-sm text-slate-900 bg-white ${
                        errors.service ? "border-red-400 bg-red-50" : "border-slate-300"
                      }`}
                    >
                      <option value="">Select a service...</option>
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.number} — {s.title}
                        </option>
                      ))}
                      <option value="General Consultancy">General Consultancy</option>
                    </select>
                    {errors.service && <p className="text-[11px] text-red-600 mt-0.5">{errors.service}</p>}
                  </div>

                  <div>
                    <label htmlFor="f-msg" className="block text-xs font-medium text-slate-700 mb-1">
                      Message (Optional)
                    </label>
                    <textarea
                      id="f-msg"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2 rounded border border-slate-300 text-sm text-slate-900"
                      placeholder="Brief note on your requirement..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2.5 bg-navy-900 hover:bg-navy-800 text-white font-semibold text-sm rounded transition-colors"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-bold text-navy-950">Office Location Map</h3>
              <p className="text-xs text-slate-500">Eripuram, Payangadi, Kerala – 670 303</p>
            </div>
            <a
              href="https://maps.google.com/?q=Eripuram,+Payangadi,+Kerala+670303"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-navy-900 hover:text-gold-600 inline-flex items-center gap-1"
            >
              <span>Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="w-full h-64 sm:h-80 rounded-lg overflow-hidden border border-slate-200">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15609.529068032545!2d75.2678!3d12.0152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba46a6f695f2d71%3A0x6b4f706d3d95c52c!2sEripuram%2C%20Payangadi%2C%20Kerala%20670303!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
