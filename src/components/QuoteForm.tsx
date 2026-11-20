"use client";

import React, { useState } from "react";
import { BUSINESS_INFO, SERVICE_CATEGORIES } from "@/lib/mtech-data";

interface QuoteFormProps {
  defaultService?: string;
  compact?: boolean;
  onSubmitted?: () => void;
}

interface SubmittedEnquiry {
  referenceCode: string;
  fullName: string;
  contactMethod: string;
  postcode: string;
  serviceCategory: string;
  projectDescription: string;
  preferredTiming: string;
  photoFileName: string | null;
  customerType: string;
}

export function QuoteForm({
  defaultService = "",
  compact = false,
  onSubmitted,
}: QuoteFormProps) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [postcode, setPostcode] = useState("");
  const [customerType, setCustomerType] = useState("Homeowner");
  const [serviceCategory, setServiceCategory] = useState(
    defaultService || "Handyman Services"
  );
  const [preferredTiming, setPreferredTiming] = useState(
    "Within the next 1–2 weeks"
  );
  const [projectDescription, setProjectDescription] = useState("");
  const [photoFileName, setPhotoFileName] = useState<string | null>(null);
  const [photoPreviewUrl, setPhotoPreviewUrl] = useState<string | null>(null);

  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<SubmittedEnquiry | null>(
    null
  );

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setPhotoFileName(null);
      setPhotoPreviewUrl(null);
      return;
    }
    setPhotoFileName(file.name);
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setPhotoPreviewUrl(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!fullName.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }
    if (!phone.trim() && !email.trim()) {
      setErrorMessage(
        "Please provide either a telephone number or an email address so we can reply."
      );
      return;
    }
    if (!postcode.trim()) {
      setErrorMessage("Please enter the property postcode (e.g. TW1 3JZ).");
      return;
    }
    if (!projectDescription.trim()) {
      setErrorMessage("Please briefly describe the work or repairs needed.");
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          phone,
          email,
          postcode,
          customerType,
          serviceCategory,
          preferredTiming,
          projectDescription,
          photoFileName,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        setErrorMessage(data.error || "Please check your form details.");
      } else {
        setSubmittedData(data.enquiry);
        if (onSubmitted) onSubmitted();
      }
    } catch {
      setErrorMessage("Network error while recording demo enquiry.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submittedData) {
    const whatsappMessage = encodeURIComponent(
      `Hello M-Tech Property Solutions,\n\nI would like to request a quote:\n• Name: ${submittedData.fullName}\n• Postcode: ${submittedData.postcode}\n• Service: ${submittedData.serviceCategory}\n• Timing: ${submittedData.preferredTiming}\n• Details: ${submittedData.projectDescription}`
    );

    return (
      <div
        role="status"
        aria-live="polite"
        className="bg-white rounded-2xl border-2 border-amber-500/40 shadow-xl p-6 sm:p-8 space-y-6"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/40 flex items-center justify-center text-amber-600 shrink-0">
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 mb-1">
              Website Demo Mode • Reference {submittedData.referenceCode}
            </span>
            <h3 className="text-xl font-bold text-slate-900">
              Enquiry Preview Recorded
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              This is a <strong>demonstration interaction</strong> for the
              proposed M-Tech Property Solutions website. Your details have been
              validated and saved locally for preview purposes, and{" "}
              <strong>have not been sent</strong> to an external email inbox or
              CRM.
            </p>
          </div>
        </div>

        <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-sm space-y-2">
          <div className="font-semibold text-slate-900 border-b border-slate-200 pb-2">
            Captured Enquiry Summary
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
            <div>
              <span className="text-slate-500">Customer:</span>{" "}
              <span className="font-medium text-slate-900">
                {submittedData.fullName} ({submittedData.customerType})
              </span>
            </div>
            <div>
              <span className="text-slate-500">Contact:</span>{" "}
              <span className="font-medium text-slate-900">
                {submittedData.contactMethod}
              </span>
            </div>
            <div>
              <span className="text-slate-500">Postcode:</span>{" "}
              <span className="font-medium text-slate-900">
                {submittedData.postcode}
              </span>
            </div>
            <div>
              <span className="text-slate-500">Service:</span>{" "}
              <span className="font-medium text-slate-900">
                {submittedData.serviceCategory}
              </span>
            </div>
            <div>
              <span className="text-slate-500">Preferred Timing:</span>{" "}
              <span className="font-medium text-slate-900">
                {submittedData.preferredTiming}
              </span>
            </div>
            {submittedData.photoFileName && (
              <div>
                <span className="text-slate-500">Attached Photo:</span>{" "}
                <span className="font-medium text-slate-900">
                  {submittedData.photoFileName}
                </span>
              </div>
            )}
          </div>
          <div className="pt-2 border-t border-slate-200">
            <span className="text-slate-500 block text-xs uppercase tracking-wider">
              Project Description:
            </span>
            <p className="text-slate-800 mt-0.5">
              {submittedData.projectDescription}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Want to contact M-Tech Property Solutions directly right now?
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${BUSINESS_INFO.phone.whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-colors"
            >
              Send This Enquiry via WhatsApp ({BUSINESS_INFO.phone.display})
            </a>
            <a
              href={BUSINESS_INFO.phone.telHref}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-colors"
            >
              Call {BUSINESS_INFO.phone.display}
            </a>
            <button
              type="button"
              onClick={() => {
                setSubmittedData(null);
                setProjectDescription("");
                setPhotoFileName(null);
                setPhotoPreviewUrl(null);
              }}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-300 hover:bg-slate-100 text-slate-700 font-medium text-sm transition-colors"
            >
              Submit Another Demo Enquiry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl border border-slate-200/90 shadow-lg p-6 sm:p-8 space-y-5"
      noValidate
    >
      <div className="border-b border-slate-100 pb-4">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
            Free, No-Obligation Quotation
          </span>
          <span className="text-xs text-slate-500">
            Or call / WhatsApp{" "}
            <a
              href={BUSINESS_INFO.phone.telHref}
              className="font-semibold text-slate-900 underline"
            >
              {BUSINESS_INFO.phone.display}
            </a>
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
          Request a Quote or Discuss Your Job List
        </h3>
        <p className="text-sm text-slate-600 mt-1">
          Tell us what you need help with in Twickenham, South West London or
          Surrey.
        </p>
      </div>

      {errorMessage && (
        <div
          role="alert"
          className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-800 text-sm font-medium"
        >
          {errorMessage}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="quote-fullName"
            className="block text-sm font-semibold text-slate-800 mb-1"
          >
            Your Name <span className="text-red-600">*</span>
          </label>
          <input
            id="quote-fullName"
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="e.g. Sarah Jenkins"
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
          />
        </div>

        <div>
          <label
            htmlFor="quote-postcode"
            className="block text-sm font-semibold text-slate-800 mb-1"
          >
            Property Postcode <span className="text-red-600">*</span>
          </label>
          <input
            id="quote-postcode"
            type="text"
            required
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
            placeholder="e.g. TW1 3JZ"
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="quote-phone"
            className="block text-sm font-semibold text-slate-800 mb-1"
          >
            Telephone Number <span className="text-slate-400 font-normal">(or email)</span>
          </label>
          <input
            id="quote-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="e.g. 07700 900123"
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
          />
        </div>

        <div>
          <label
            htmlFor="quote-email"
            className="block text-sm font-semibold text-slate-800 mb-1"
          >
            Email Address <span className="text-slate-400 font-normal">(optional if phone given)</span>
          </label>
          <input
            id="quote-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.co.uk"
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="quote-service"
            className="block text-sm font-semibold text-slate-800 mb-1"
          >
            Service Required
          </label>
          <select
            id="quote-service"
            value={serviceCategory}
            onChange={(e) => setServiceCategory(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
          >
            {SERVICE_CATEGORIES.map((s) => (
              <option key={s.slug} value={s.navLabel}>
                {s.navLabel}
              </option>
            ))}
            <option value="Multiple Services / Job List">
              Multiple Services / General Job List
            </option>
            <option value="Landlord / End-of-Tenancy Turnaround">
              Landlord / End-of-Tenancy Turnaround
            </option>
            <option value="Commercial / Office Maintenance">
              Commercial / Office Maintenance
            </option>
            <option value="Urgent / Leak / Damage Repair">
              Urgent / Leak / Damage Repair
            </option>
          </select>
        </div>

        <div>
          <label
            htmlFor="quote-timing"
            className="block text-sm font-semibold text-slate-800 mb-1"
          >
            Preferred Timing
          </label>
          <select
            id="quote-timing"
            value={preferredTiming}
            onChange={(e) => setPreferredTiming(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
          >
            <option value="As soon as possible / Urgent">
              As soon as possible / Urgent
            </option>
            <option value="Within the next 1–2 weeks">
              Within the next 1–2 weeks
            </option>
            <option value="Within the next month">Within the next month</option>
            <option value="Flexible / Planning ahead">
              Flexible / Planning ahead
            </option>
          </select>
        </div>
      </div>

      {!compact && (
        <div>
          <span className="block text-sm font-semibold text-slate-800 mb-1.5">
            Enquiring As
          </span>
          <div className="flex flex-wrap gap-2">
            {[
              "Homeowner",
              "Landlord",
              "Letting Agent",
              "Tenant / Occupier",
              "Commercial / Business",
            ].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setCustomerType(type)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${
                  customerType === type
                    ? "bg-slate-900 text-amber-400 border-slate-900"
                    : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      )}

      <div>
        <label
          htmlFor="quote-description"
          className="block text-sm font-semibold text-slate-800 mb-1"
        >
          Project or Job Description <span className="text-red-600">*</span>
        </label>
        <textarea
          id="quote-description"
          rows={compact ? 3 : 4}
          required
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
          placeholder="Describe the repair, installation or improvement work you need (e.g. flat-pack wardrobe assembly, silicone replacement in shower, or garden patio paving)..."
          className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
        />
      </div>

      {/* Optional Photo Upload */}
      <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50/70 p-3.5">
        <label
          htmlFor="quote-photo"
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 cursor-pointer"
        >
          <div>
            <span className="block text-xs font-semibold text-slate-800">
              Optional: Attach a Photo of the Area or Job
            </span>
            <span className="block text-xs text-slate-500">
              Photos help us assess materials and provide a faster estimate.
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-100 shrink-0 self-start sm:self-auto">
            Choose Photo
          </span>
          <input
            id="quote-photo"
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="sr-only"
          />
        </label>

        {photoFileName && (
          <div className="mt-2.5 flex items-center gap-3 pt-2.5 border-t border-slate-200">
            {photoPreviewUrl && (
              <img
                src={photoPreviewUrl}
                alt="Selected job preview"
                className="w-12 h-12 rounded-md object-cover border border-slate-300"
              />
            )}
            <div className="text-xs text-slate-700 truncate flex-1">
              Selected: <span className="font-semibold">{photoFileName}</span>
            </div>
            <button
              type="button"
              onClick={() => {
                setPhotoFileName(null);
                setPhotoPreviewUrl(null);
              }}
              className="text-xs text-red-600 hover:underline font-medium"
            >
              Remove
            </button>
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-60 text-slate-950 font-bold text-base shadow-sm transition-colors cursor-pointer"
      >
        {submitting ? (
          <span>Recording Demo Enquiry...</span>
        ) : (
          <>
            <span>Request Your Free Quote</span>
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </>
        )}
      </button>

      <p className="text-[11px] text-slate-500 text-center leading-relaxed">
        Demo Preview Note: Submitting this form demonstrates the enquiry flow
        without sending external emails. For immediate assistance, call or
        WhatsApp{" "}
        <a
          href={BUSINESS_INFO.phone.telHref}
          className="font-semibold text-slate-700 underline"
        >
          {BUSINESS_INFO.phone.display}
        </a>
        .
      </p>
    </form>
  );
}
