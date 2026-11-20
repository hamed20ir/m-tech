"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BUSINESS_INFO, SERVICE_CATEGORIES } from "@/lib/mtech-data";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const isServicePage = SERVICE_CATEGORIES.some(
    (s) => pathname === `/${s.slug}`
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0F172A] text-white shadow-md border-b border-slate-800">
      {/* Top Utility Bar */}
      <div className="bg-[#090E1A] border-b border-slate-800/80 text-xs text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="inline-flex items-center gap-1.5 font-medium text-amber-400">
              <svg
                className="w-3.5 h-3.5 shrink-0"
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
              Twickenham (TW1) • Covering South West London &amp; Surrey
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-slate-300">
              <svg
                className="w-3.5 h-3.5 text-emerald-400 shrink-0"
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
              Open 7 Days • Free Quotes &amp; Practical Advice
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <a
              href={BUSINESS_INFO.email.mailtoHref}
              className="hidden sm:inline-flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <svg
                className="w-3.5 h-3.5 text-amber-400 shrink-0"
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
              {BUSINESS_INFO.email.display}
            </a>
            <a
              href={BUSINESS_INFO.phone.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              <svg
                className="w-3.5 h-3.5 shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z" />
              </svg>
              WhatsApp: {BUSINESS_INFO.phone.display}
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Logo Lockup */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-lg"
          >
            <div className="w-12 h-12 rounded-lg overflow-hidden border border-amber-500/40 bg-[#090E1A] flex items-center justify-center shrink-0">
              <img
                src={BUSINESS_INFO.logoUrl}
                alt="M-Tech Property Solutions emblem"
                className="w-full h-full object-cover"
                width={48}
                height={48}
              />
            </div>
            <div>
              <span className="block text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">
                M-TECH <span className="font-semibold text-amber-400">PROPERTY SOLUTIONS</span>
              </span>
              <span className="block text-[11px] uppercase tracking-wider text-slate-400">
                Maintenance • Handyman • Home Improvements
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-1"
          >
            <Link
              href="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === "/"
                  ? "bg-slate-800 text-amber-400"
                  : "text-slate-200 hover:text-white hover:bg-slate-800/60"
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesDropdownOpen((prev) => !prev)}
                aria-expanded={servicesDropdownOpen}
                className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isServicePage
                    ? "bg-slate-800 text-amber-400"
                    : "text-slate-200 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform ${
                    servicesDropdownOpen ? "rotate-180 text-amber-400" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {servicesDropdownOpen && (
                <div className="absolute left-0 mt-0 pt-2 w-80 z-50">
                  <div className="bg-[#0F172A] border border-slate-700 rounded-xl shadow-2xl p-2 divide-y divide-slate-800">
                    <div className="py-1">
                      {SERVICE_CATEGORIES.map((service) => {
                        const active = pathname === `/${service.slug}`;
                        return (
                          <Link
                            key={service.slug}
                            href={`/${service.slug}`}
                            onClick={() => setServicesDropdownOpen(false)}
                            className={`block px-3.5 py-2.5 rounded-lg text-sm transition-colors ${
                              active
                                ? "bg-amber-500/15 text-amber-400 font-semibold"
                                : "text-slate-200 hover:bg-slate-800 hover:text-amber-300"
                            }`}
                          >
                            <div className="font-medium">{service.navLabel}</div>
                            <div className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                              {service.heroEyebrow}
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/projects"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === "/projects"
                  ? "bg-slate-800 text-amber-400"
                  : "text-slate-200 hover:text-white hover:bg-slate-800/60"
              }`}
            >
              Projects Gallery
            </Link>

            <Link
              href="/areas-we-cover"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === "/areas-we-cover"
                  ? "bg-slate-800 text-amber-400"
                  : "text-slate-200 hover:text-white hover:bg-slate-800/60"
              }`}
            >
              Areas We Cover
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === "/contact"
                  ? "bg-slate-800 text-amber-400"
                  : "text-slate-200 hover:text-white hover:bg-slate-800/60"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href={BUSINESS_INFO.phone.telHref}
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg border border-slate-700 bg-slate-800/90 hover:bg-slate-700 text-sm font-semibold text-white transition-colors"
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
              <span>{BUSINESS_INFO.phone.display}</span>
            </a>

            <Link
              href="/contact#quote-form"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-sm transition-colors"
            >
              <span>Request a Quote</span>
              <svg
                className="w-4 h-4"
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
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={BUSINESS_INFO.phone.telHref}
              aria-label={`Call ${BUSINESS_INFO.phone.display}`}
              className="inline-flex items-center justify-center p-2.5 rounded-lg bg-amber-500 text-slate-950 font-bold"
            >
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
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-label="Toggle navigation menu"
              className="p-2.5 rounded-lg text-slate-200 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              {mobileOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Sub-navigation bar for quick service access on Desktop */}
      <div className="hidden lg:block bg-slate-900/95 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-1.5 text-xs">
          <div className="flex items-center gap-1 overflow-x-auto">
            <span className="text-slate-400 font-semibold uppercase tracking-wider mr-2">
              Core Services:
            </span>
            {SERVICE_CATEGORIES.map((service) => {
              const active = pathname === `/${service.slug}`;
              return (
                <Link
                  key={service.slug}
                  href={`/${service.slug}`}
                  className={`px-2.5 py-1 rounded transition-colors whitespace-nowrap ${
                    active
                      ? "bg-amber-500/20 text-amber-400 font-semibold"
                      : "text-slate-300 hover:text-amber-300 hover:bg-slate-800/70"
                  }`}
                >
                  {service.navLabel}
                </Link>
              );
            })}
          </div>
          <span className="text-slate-400 hidden xl:inline">
            Send job photos via WhatsApp for a fast quote
          </span>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0F172A] border-t border-slate-800 px-4 pt-3 pb-6 space-y-4">
          <div className="space-y-1">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-white hover:bg-slate-800"
            >
              Home
            </Link>
            <div className="pt-2 pb-1 px-3 text-xs font-semibold uppercase tracking-wider text-amber-400">
              Our Services
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 pl-2">
              {SERVICE_CATEGORIES.map((service) => (
                <Link
                  key={service.slug}
                  href={`/${service.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                    pathname === `/${service.slug}`
                      ? "bg-amber-500/20 text-amber-400"
                      : "text-slate-200 hover:bg-slate-800"
                  }`}
                >
                  {service.navLabel}
                </Link>
              ))}
            </div>
            <Link
              href="/projects"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-white hover:bg-slate-800"
            >
              Projects Gallery
            </Link>
            <Link
              href="/areas-we-cover"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-white hover:bg-slate-800"
            >
              Areas We Cover
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-white hover:bg-slate-800"
            >
              Contact &amp; Request a Quote
            </Link>
          </div>

          <div className="pt-3 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <a
              href={BUSINESS_INFO.phone.telHref}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-slate-800 text-white font-semibold text-sm border border-slate-700"
            >
              Call {BUSINESS_INFO.phone.display}
            </a>
            <a
              href={BUSINESS_INFO.phone.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm"
            >
              WhatsApp Enquiry
            </a>
            <Link
              href="/contact#quote-form"
              onClick={() => setMobileOpen(false)}
              className="sm:col-span-2 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-amber-500 text-slate-950 font-bold text-sm"
            >
              Request a Free Quote Online
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
