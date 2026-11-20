import React from "react";
import Link from "next/link";
import { BUSINESS_INFO, SERVICE_CATEGORIES } from "@/lib/mtech-data";

export function Footer() {
  return (
    <>
      <footer className="bg-[#090E1A] text-slate-300 border-t border-slate-800 pb-20 md:pb-0">
        {/* Top Conversion Banner */}
        <div className="border-b border-slate-800/80 bg-[#0F172A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-400 mb-1">
                Free Quotes • Twickenham &amp; South West London
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Have a list of property jobs or an upcoming renovation?
              </h2>
              <p className="text-slate-300 mt-1 text-sm sm:text-base max-w-2xl">
                Send photos or project details via our quote form, WhatsApp or
                telephone to discuss the work you need.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={BUSINESS_INFO.phone.telHref}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-colors"
              >
                <svg
                  className="w-4 h-4 text-amber-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call {BUSINESS_INFO.phone.display}
              </a>
              <a
                href={BUSINESS_INFO.phone.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-colors"
              >
                WhatsApp Photos / Details
              </a>
              <Link
                href="/contact#quote-form"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-colors"
              >
                Request a Free Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
            {/* Col 1: Brand & Overview */}
            <div className="lg:col-span-4 space-y-4">
              <Link href="/" className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg overflow-hidden border border-amber-500/40 bg-slate-950 shrink-0">
                  <img
                    src={BUSINESS_INFO.logoUrl}
                    alt="M-Tech Property Solutions logo"
                    className="w-full h-full object-cover"
                    width={48}
                    height={48}
                  />
                </div>
                <div>
                  <span className="block text-lg font-bold text-white">
                    M-TECH{" "}
                    <span className="text-amber-400">PROPERTY SOLUTIONS</span>
                  </span>
                  <span className="block text-xs text-slate-400">
                    Twickenham • South West London &amp; Surrey
                  </span>
                </div>
              </Link>

              <p className="text-sm text-slate-400 leading-relaxed">
                A local property maintenance, handyman and home improvement
                service associated with Twickenham, helping homeowners,
                landlords, letting agents and commercial premises with practical
                repairs, installations and refurbishment projects.
              </p>

              <div className="pt-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
                  Public Profiles &amp; Directories
                </div>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={BUSINESS_INFO.profiles.nextdoor}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-md bg-slate-800/90 hover:bg-slate-700 text-xs font-medium text-slate-200 border border-slate-700 transition-colors"
                  >
                    Nextdoor
                  </a>
                  <a
                    href={BUSINESS_INFO.profiles.yell}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-md bg-slate-800/90 hover:bg-slate-700 text-xs font-medium text-slate-200 border border-slate-700 transition-colors"
                  >
                    Yell.com
                  </a>
                  <a
                    href={BUSINESS_INFO.profiles.googleBusiness}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-md bg-slate-800/90 hover:bg-slate-700 text-xs font-medium text-slate-200 border border-slate-700 transition-colors"
                  >
                    Google Business
                  </a>
                  <a
                    href={BUSINESS_INFO.profiles.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-md bg-slate-800/90 hover:bg-slate-700 text-xs font-medium text-slate-200 border border-slate-700 transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href={BUSINESS_INFO.profiles.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-md bg-slate-800/90 hover:bg-slate-700 text-xs font-medium text-slate-200 border border-slate-700 transition-colors"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>

            {/* Col 2: Services */}
            <div className="lg:col-span-3 space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                Our Services
              </h3>
              <ul className="space-y-2.5 text-sm">
                {SERVICE_CATEGORIES.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/${service.slug}`}
                      className="text-slate-300 hover:text-amber-400 transition-colors"
                    >
                      {service.navLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Quick Links & Areas */}
            <div className="lg:col-span-2 space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                Navigation
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link
                    href="/"
                    className="text-slate-300 hover:text-amber-400 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="text-slate-300 hover:text-amber-400 transition-colors"
                  >
                    Projects Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="/areas-we-cover"
                    className="text-slate-300 hover:text-amber-400 transition-colors"
                  >
                    Areas We Cover
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-slate-300 hover:text-amber-400 transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact#quote-form"
                    className="text-amber-400 hover:text-amber-300 font-medium transition-colors"
                  >
                    Request a Quote
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Contact Details */}
            <div className="lg:col-span-3 space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                Contact &amp; Availability
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2.5">
                  <svg
                    className="w-4 h-4 text-amber-400 mt-1 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div>
                    <div className="text-xs text-slate-400">
                      Telephone &amp; WhatsApp
                    </div>
                    <a
                      href={BUSINESS_INFO.phone.telHref}
                      className="text-white font-semibold hover:text-amber-400 transition-colors"
                    >
                      {BUSINESS_INFO.phone.display}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <svg
                    className="w-4 h-4 text-amber-400 mt-1 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <div className="text-xs text-slate-400">Email</div>
                    <a
                      href={BUSINESS_INFO.email.mailtoHref}
                      className="text-white hover:text-amber-400 break-all transition-colors"
                    >
                      {BUSINESS_INFO.email.display}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <svg
                    className="w-4 h-4 text-amber-400 mt-1 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <div className="text-xs text-slate-400">Listed Address</div>
                    <span className="text-slate-200">
                      {BUSINESS_INFO.address.full}
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <svg
                    className="w-4 h-4 text-amber-400 mt-1 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <div className="text-xs text-slate-400">Published Hours</div>
                    <span className="text-slate-200 block">
                      {BUSINESS_INFO.hours.primaryDisplay}
                    </span>
                    <span className="text-xs text-slate-400 block mt-0.5">
                      Extended contact hours (06:00–23:30) listed on Nextdoor
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p>
              &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights
              reserved.
            </p>
            <p className="text-slate-400">
              Property Maintenance, Handyman Services &amp; Home Improvements •{" "}
              {BUSINESS_INFO.address.town}, {BUSINESS_INFO.address.postcode}
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Bottom Conversion Bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-[#0F172A] border-t border-slate-700 px-3 py-2 shadow-2xl">
        <div className="grid grid-cols-3 gap-2">
          <a
            href={BUSINESS_INFO.phone.telHref}
            className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-slate-800 text-white font-semibold text-xs border border-slate-700"
          >
            <svg
              className="w-4 h-4 text-amber-400 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span>Call Now</span>
          </a>

          <a
            href={BUSINESS_INFO.phone.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-emerald-600 text-white font-semibold text-xs"
          >
            <span>WhatsApp</span>
          </a>

          <Link
            href="/contact#quote-form"
            className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs"
          >
            <span>Free Quote</span>
          </Link>
        </div>
      </div>
    </>
  );
}
