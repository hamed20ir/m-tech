import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO } from "@/lib/mtech-data";
import { ContactPageClient } from "@/components/ContactPageClient";

export const metadata: Metadata = {
  title:
    "Contact & Request a Free Quote | Twickenham & South West London | M-Tech Property Solutions",
  description:
    "Contact M-Tech Property Solutions in Twickenham (TW1 3JZ). Call or WhatsApp 07586 254347, email michael.mtech.solutions@gmail.com or request a free quotation online.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="bg-[#F8FAFC]">
      {/* Hero */}
      <section className="bg-[#0F172A] text-white border-b border-slate-800 py-14 lg:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <nav
            aria-label="Breadcrumb"
            className="text-xs text-slate-400 flex items-center gap-2"
          >
            <Link href="/" className="hover:text-amber-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-amber-400 font-semibold">
              Contact &amp; Request a Quote
            </span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 rounded-md bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
              Free Quotes • 7 Days a Week
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Contact {BUSINESS_INFO.name}
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Get in touch to discuss handyman tasks, ongoing property
              maintenance, landlord turnarounds or home improvement work across
              Twickenham, South West London and Surrey.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Direct Contact Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {/* Telephone Card */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                      Telephone
                    </span>
                    <span className="text-xs text-slate-400">Direct Line</span>
                  </div>
                  <a
                    href={BUSINESS_INFO.phone.telHref}
                    className="block text-2xl font-extrabold text-slate-900 hover:text-amber-700 transition-colors"
                  >
                    {BUSINESS_INFO.phone.display}
                  </a>
                  <p className="text-xs text-slate-600">
                    Click to call directly from your mobile or desktop device.
                  </p>
                </div>

                {/* WhatsApp Card */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                      WhatsApp Enquiries
                    </span>
                    <span className="text-xs text-slate-400">
                      Photos Welcome
                    </span>
                  </div>
                  <a
                    href={BUSINESS_INFO.phone.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-lg font-extrabold text-emerald-700 hover:text-emerald-600"
                  >
                    <span>Message {BUSINESS_INFO.phone.display}</span>
                    <span>&rarr;</span>
                  </a>
                  <p className="text-xs text-slate-600">
                    Send photographs or a quick list of jobs on WhatsApp for a
                    fast, practical assessment.
                  </p>
                </div>
              </div>

              {/* Email, Address & Hours Card */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Email Address
                  </div>
                  <a
                    href={BUSINESS_INFO.email.mailtoHref}
                    className="text-base font-bold text-slate-900 hover:text-amber-700 break-all"
                  >
                    {BUSINESS_INFO.email.display}
                  </a>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Publicly Listed Address
                  </div>
                  <p className="text-base font-bold text-slate-900 mt-0.5">
                    {BUSINESS_INFO.address.full}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Covering Twickenham, South West London and Surrey.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Published Opening Hours
                  </div>
                  <p className="text-base font-bold text-slate-900 mt-0.5">
                    {BUSINESS_INFO.hours.primaryDisplay}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    {BUSINESS_INFO.hours.extendedNote}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Public Business Profiles
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={BUSINESS_INFO.profiles.nextdoor}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-800"
                    >
                      Nextdoor Profile
                    </a>
                    <a
                      href={BUSINESS_INFO.profiles.yell}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-800"
                    >
                      Yell Listing
                    </a>
                    <a
                      href={BUSINESS_INFO.profiles.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-800"
                    >
                      Instagram
                    </a>
                    <a
                      href={BUSINESS_INFO.profiles.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-800"
                    >
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Quote Form + Demo Preview Log */}
            <div className="lg:col-span-7">
              <ContactPageClient />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
