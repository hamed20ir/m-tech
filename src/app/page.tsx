import React from "react";
import Link from "next/link";
import {
  BUSINESS_INFO,
  SERVICE_CATEGORIES,
  CUSTOMER_TYPES,
  COVERAGE_DATA,
  PUBLIC_PROFILE_HIGHLIGHTS,
} from "@/lib/mtech-data";
import { ProjectGalleryClient } from "@/components/ProjectGalleryClient";
import { QuoteForm } from "@/components/QuoteForm";

export default function HomePage() {
  return (
    <div>
      {/* 1. Hero Section */}
      <section className="relative bg-[#0F172A] text-white border-b border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Value Proposition & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                Twickenham (TW1) • Covering South West London &amp; Surrey
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight text-white leading-[1.12]">
                Practical Property Maintenance,{" "}
                <span className="text-amber-400">Handyman Services</span> &amp;
                Home Improvements
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
                A local property maintenance and home improvement service in
                Twickenham, helping homeowners, landlords and property
                professionals with practical repairs, installations and
                renovation projects.
              </p>

              <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
                From everyday handyman jobs — flat-pack assembly, wall mounting
                and door repairs — to painting, plastering, flooring, bathrooms,
                kitchens and garden decking, get in touch with{" "}
                <strong className="text-slate-200">{BUSINESS_INFO.name}</strong>{" "}
                to discuss the work you need.
              </p>

              {/* Primary CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href="#home-quote-section"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-base shadow-lg shadow-amber-500/10 transition-colors"
                >
                  <span>Request a Free Quote</span>
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
                </a>

                <a
                  href={BUSINESS_INFO.phone.telHref}
                  className="inline-flex items-center gap-2.5 px-6 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-base border border-slate-700 transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-amber-400 shrink-0"
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
                  <span>Call {BUSINESS_INFO.phone.display}</span>
                </a>

                <a
                  href={BUSINESS_INFO.phone.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-base transition-colors"
                >
                  <span>WhatsApp Us</span>
                </a>
              </div>

              {/* Key Trust Pills */}
              <div className="pt-4 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-300">
                <div>
                  <span className="block font-bold text-white text-sm">
                    Free Quotes
                  </span>
                  <span className="text-slate-400">
                    Clear, no-obligation estimates
                  </span>
                </div>
                <div>
                  <span className="block font-bold text-white text-sm">
                    Small to Large Jobs
                  </span>
                  <span className="text-slate-400">
                    Repairs to full renovations
                  </span>
                </div>
                <div>
                  <span className="block font-bold text-white text-sm">
                    Multi-Trade Team
                  </span>
                  <span className="text-slate-400">
                    Interior &amp; outdoor works
                  </span>
                </div>
                <div>
                  <span className="block font-bold text-white text-sm">
                    7-Day Availability
                  </span>
                  <span className="text-slate-400">
                    Flexible local scheduling
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Authentic M-Tech Photo Collage */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-3.5">
                <div className="col-span-2 relative rounded-2xl overflow-hidden border border-slate-700 aspect-[16/10] bg-slate-900 shadow-xl">
                  <img
                    src="/images/mtech/gallery/photo_20.jpeg"
                    alt="Modern handleless kitchen and wood flooring installation by M-Tech Property Solutions"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                      Kitchens &amp; Flooring
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-white">
                      Complete Kitchen Unit, Worktop &amp; Timber Flooring
                      Installation
                    </p>
                  </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden border border-slate-700 aspect-[4/3] bg-slate-900 shadow-lg">
                  <img
                    src="/images/mtech/gallery/photo_55.jpeg"
                    alt="Timber garden decking and balustrade installation by M-Tech Property Solutions"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent p-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">
                      Outdoor Works
                    </span>
                    <span className="text-xs font-semibold text-white">
                      Decking &amp; Fencing
                    </span>
                  </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden border border-slate-700 aspect-[4/3] bg-slate-900 shadow-lg">
                  <img
                    src="/images/mtech/gallery/photo_51.jpeg"
                    alt="Fitted alcove shelving and living room cabinetry by M-Tech Property Solutions"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent p-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">
                      Interiors &amp; Joinery
                    </span>
                    <span className="text-xs font-semibold text-white">
                      Bespoke Shelving &amp; Fitting
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Quick Contact & Photo-Quote Strip */}
      <section className="bg-amber-500 text-slate-950 border-b border-amber-600/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
          <div className="flex items-center gap-2.5 font-semibold text-center md:text-left">
            <span className="px-2 py-0.5 rounded bg-slate-950 text-amber-400 text-xs font-bold uppercase">
              Fast Quotes
            </span>
            <span>
              Have a list of jobs to sort? Send us photos or details on WhatsApp
              or online — we&apos;ll help you plan and get it done.
            </span>
          </div>
          <div className="flex items-center gap-4 shrink-0 font-bold">
            <a
              href={BUSINESS_INFO.phone.telHref}
              className="hover:underline flex items-center gap-1"
            >
              Tel: {BUSINESS_INFO.phone.display}
            </a>
            <span>•</span>
            <Link href="/contact#quote-form" className="underline">
              Online Quote Form &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Main Services Overview */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
                Complete Services Catalogue
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Property Maintenance, Handyman &amp; Improvement Services
              </h2>
              <p className="text-slate-600 text-base">
                Organised across six core trade areas so you can quickly find
                the help you need — whether it&apos;s a single household repair
                or a multi-room refurbishment.
              </p>
            </div>
            <Link
              href="/contact#quote-form"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm shrink-0 self-start md:self-auto transition-colors"
            >
              Discuss a Custom Job List &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {SERVICE_CATEGORIES.map((service) => (
              <div
                key={service.slug}
                className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all flex flex-col"
              >
                <Link
                  href={`/${service.slug}`}
                  className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900 block"
                >
                  <img
                    src={service.heroImage}
                    alt={service.heroImageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  <span className="absolute bottom-3 left-4 right-4 text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {service.navLabel}
                  </span>
                </Link>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {service.heroSummary}
                    </p>
                    <ul className="space-y-1.5 pt-2 border-t border-slate-100 text-xs sm:text-sm text-slate-700">
                      {service.serviceGroups
                        .flatMap((g) => g.items)
                        .slice(0, 5)
                        .map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                            <span className="line-clamp-1">{item}</span>
                          </li>
                        ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 group-hover:text-amber-700 transition-colors"
                    >
                      <span>View Full Service Details</span>
                      <span>&rarr;</span>
                    </Link>
                    <Link
                      href={`/contact?service=${encodeURIComponent(
                        service.navLabel
                      )}#quote-form`}
                      className="text-xs font-semibold text-amber-700 hover:underline"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose M-Tech & Customer Types */}
      <section className="py-16 lg:py-20 bg-[#0F172A] text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                Why Choose {BUSINESS_INFO.name}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                One Practical Local Contact from Small Repairs to Full Room
                Renovations
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Coordinating separate tradespeople for carpentry, plastering,
                tiling, decorating and outdoor maintenance can be slow and
                expensive. M-Tech Property Solutions brings multi-disciplinary
                capability together for residential, rental and commercial
                properties.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                <div className="p-4 rounded-xl bg-slate-800/70 border border-slate-700/80 space-y-1">
                  <div className="text-amber-400 font-bold text-sm">
                    01. Broad Trade Capability
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Handyman assembly, plastering, painting, flooring, kitchens,
                    bathrooms, paving, decking and fencing under one roof.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/70 border border-slate-700/80 space-y-1">
                  <div className="text-amber-400 font-bold text-sm">
                    02. Straightforward Quoting
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Send photos or a list of tasks via WhatsApp (
                    {BUSINESS_INFO.phone.display}) or our online form for a free
                    quotation.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/70 border border-slate-700/80 space-y-1">
                  <div className="text-amber-400 font-bold text-sm">
                    03. Domestic &amp; Landlord Ready
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Tailored support for private homeowners, landlords, letting
                    agents, tenants and commercial premises.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/70 border border-slate-700/80 space-y-1">
                  <div className="text-amber-400 font-bold text-sm">
                    04. Local to Twickenham
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Associated with Twickenham (TW1 3JZ) and advertising
                    coverage across South West London and Surrey.
                  </p>
                </div>
              </div>
            </div>

            {/* Customer Types Cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CUSTOMER_TYPES.map((cust, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2.5">
                    <span className="inline-block text-xs font-bold uppercase tracking-wider text-amber-400">
                      Who We Help
                    </span>
                    <h3 className="text-lg font-bold text-white">
                      {cust.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {cust.description}
                    </p>
                  </div>
                  <ul className="space-y-1.5 pt-3 border-t border-slate-800 text-xs text-slate-300">
                    {cust.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Selected Project Photographs */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
                Authentic Visual Portfolio
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Selected Work &amp; Project Photographs
              </h2>
              <p className="text-slate-600 text-base">
                Browse photographs from {BUSINESS_INFO.name}&apos;s published
                gallery across kitchens, bathrooms, flooring, plastering,
                bespoke shelving, patios and decking.
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shrink-0 self-start md:self-auto transition-colors"
            >
              View All {35} Gallery Photographs &rarr;
            </Link>
          </div>

          <ProjectGalleryClient limit={9} showFilters={true} />
        </div>
      </section>

      {/* 6. Public Profile Presence & Community Feedback */}
      <section className="py-16 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
              Public Profiles &amp; Community Presence
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Established on Local UK Directories &amp; Nextdoor
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              {BUSINESS_INFO.name} maintains active public profiles across
              Nextdoor and Yell in Twickenham, sharing work updates, seasonal
              availability and direct contact channels.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Nextdoor Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold">
                    Nextdoor Business Profile
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    Twickenham
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  33 Neighbourhood Faves &amp; 58+ Gallery Photos
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Listed on Nextdoor under{" "}
                  <strong>General contractor, Property manager</strong> and{" "}
                  <strong>Handyman</strong>, featuring a gallery of more than 58
                  work and business photographs.
                </p>
              </div>
              <a
                href={PUBLIC_PROFILE_HIGHLIGHTS.nextdoor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-600 pt-2 border-t border-slate-100"
              >
                View Public Nextdoor Page &rarr;
              </a>
            </div>

            {/* Public Nextdoor Recommendation Attribution Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold">
                    Public Nextdoor Feedback
                  </span>
                  <span className="text-xs text-slate-500">
                    Attributed Source
                  </span>
                </div>
                <blockquote className="text-lg font-bold text-slate-900 italic">
                  &ldquo;
                  {PUBLIC_PROFILE_HIGHLIGHTS.nextdoor.publicRecommendation.quote}
                  &rdquo;
                </blockquote>
                <p className="text-xs text-slate-600">
                  <strong>
                    —{" "}
                    {
                      PUBLIC_PROFILE_HIGHLIGHTS.nextdoor.publicRecommendation
                        .author
                    }
                  </strong>{" "}
                  ({PUBLIC_PROFILE_HIGHLIGHTS.nextdoor.publicRecommendation.context}
                  )
                </p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Displayed publicly on the M-Tech Property Solutions Nextdoor
                  business page recommendations feed.
                </p>
              </div>
              <a
                href={PUBLIC_PROFILE_HIGHLIGHTS.nextdoor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-800 hover:text-amber-700 pt-2 border-t border-slate-100"
              >
                Verify on Nextdoor &rarr;
              </a>
            </div>

            {/* Yell Directory Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 border border-slate-200 text-xs font-bold">
                    Yell.com Business Listing
                  </span>
                  <span className="text-xs text-slate-500">TW1 3JZ</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Free Quotes &amp; Affordable Prices
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Listed on Yell for Twickenham with matching contact telephone
                  ({BUSINESS_INFO.phone.display}), email and published operating
                  hours seven days a week ({PUBLIC_PROFILE_HIGHLIGHTS.yell.publishedHours}).
                </p>
              </div>
              <a
                href={PUBLIC_PROFILE_HIGHLIGHTS.yell.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-800 hover:text-amber-700 pt-2 border-t border-slate-100"
              >
                View Yell Business Listing &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Service Area Introduction */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0F172A] rounded-3xl p-8 sm:p-10 lg:p-12 text-white grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                Areas We Cover
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Based in Twickenham • Covering South West London &amp; Surrey
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {COVERAGE_DATA.principalArea.summary} In public Nextdoor updates,{" "}
                {BUSINESS_INFO.name} also states coverage across{" "}
                <strong className="text-white">South West London</strong> and{" "}
                <strong className="text-white">Surrey</strong>.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs">
                  Twickenham (TW1 / TW2)
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-white font-semibold text-xs">
                  South West London
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-white font-semibold text-xs">
                  Surrey
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-amber-400">
                Enquiring from a Nearby Area?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                If your property is in or around Twickenham — such as{" "}
                {COVERAGE_DATA.nearbyEnquiryLocations.join(", ")} or surrounding
                South West London and Surrey postcodes — include your postcode
                when enquiring and we will confirm availability for your job.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  href="/areas-we-cover"
                  className="px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors"
                >
                  View Coverage Details &rarr;
                </Link>
                <a
                  href="#home-quote-section"
                  className="px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-colors"
                >
                  Check Your Postcode
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Contact & Quote Section */}
      <section id="home-quote-section" className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
                  Get in Touch
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
                  Request a Free Quote
                </h2>
                <p className="text-slate-600 text-base mt-2 leading-relaxed">
                  Ready to sort out your household repair list, prepare a rental
                  property or plan a home improvement project? Contact{" "}
                  {BUSINESS_INFO.name} directly or complete the enquiry form.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-5 shadow-xs">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-700 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5"
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
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Call or WhatsApp
                    </div>
                    <a
                      href={BUSINESS_INFO.phone.telHref}
                      className="text-lg font-bold text-slate-900 hover:text-amber-700"
                    >
                      {BUSINESS_INFO.phone.display}
                    </a>
                    <div className="mt-1">
                      <a
                        href={BUSINESS_INFO.phone.whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-emerald-700 hover:underline"
                      >
                        Click to open WhatsApp chat &rarr;
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-4 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-700 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5"
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
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Email Address
                    </div>
                    <a
                      href={BUSINESS_INFO.email.mailtoHref}
                      className="text-sm sm:text-base font-bold text-slate-900 hover:text-amber-700 break-all"
                    >
                      {BUSINESS_INFO.email.display}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-4 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-700 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5"
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
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Listed Location
                    </div>
                    <p className="text-sm font-bold text-slate-900">
                      {BUSINESS_INFO.address.full}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Covering Twickenham, South West London &amp; Surrey
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-4 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-700 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5"
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
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Published Hours
                    </div>
                    <p className="text-sm font-bold text-slate-900">
                      {BUSINESS_INFO.hours.primaryDisplay}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {BUSINESS_INFO.hours.extendedNote}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
