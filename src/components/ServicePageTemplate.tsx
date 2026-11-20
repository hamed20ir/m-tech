import React from "react";
import Link from "next/link";
import {
  BUSINESS_INFO,
  SERVICE_CATEGORIES,
  ServiceCategory,
} from "@/lib/mtech-data";
import { ProjectGalleryClient } from "@/components/ProjectGalleryClient";
import { QuoteForm } from "@/components/QuoteForm";

interface ServicePageTemplateProps {
  service: ServiceCategory;
}

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  const otherServices = SERVICE_CATEGORIES.filter(
    (s) => s.slug !== service.slug
  );

  return (
    <div className="bg-[#F8FAFC]">
      {/* Hero Section */}
      <section className="bg-[#0F172A] text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="text-xs text-slate-400 mb-6 flex items-center gap-2 flex-wrap"
          >
            <Link href="/" className="hover:text-amber-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-300">Services</span>
            <span>/</span>
            <span className="text-amber-400 font-semibold">
              {service.navLabel}
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
                {service.heroEyebrow}
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {service.heroHeadline}
              </h1>

              <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                {service.heroSummary}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#service-quote-form"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-sm transition-colors"
                >
                  <span>Request a Free Quote</span>
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
                </a>

                <a
                  href={BUSINESS_INFO.phone.telHref}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-colors"
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
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-colors"
                >
                  WhatsApp Photos
                </a>
              </div>

              <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                  <span>Twickenham (TW1) Base</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                  <span>SW London &amp; Surrey Coverage</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                  <span>Free No-Obligation Quotes</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 shadow-2xl aspect-[4/3]">
                <img
                  src={service.heroImage}
                  alt={service.heroImageAlt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent p-4">
                  <span className="text-xs font-semibold text-amber-400 block">
                    M-Tech Property Solutions Portfolio
                  </span>
                  <span className="text-xs text-slate-200">
                    {service.heroImageAlt}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview & Detailed Breakdown */}
      <section className="py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
                What We Do
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                {service.title}
              </h2>
              {service.introParagraphs.map((para, i) => (
                <p
                  key={i}
                  className="text-slate-600 text-base leading-relaxed"
                >
                  {para}
                </p>
              ))}
            </div>

            <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-amber-600 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Who This Service Suits
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-700">
                {service.idealFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Need advice on your job list?</span>
                <a
                  href={BUSINESS_INFO.phone.telHref}
                  className="font-bold text-slate-900 hover:text-amber-700"
                >
                  Call {BUSINESS_INFO.phone.display}
                </a>
              </div>
            </div>
          </div>

          {/* Service Groups Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.serviceGroups.map((group, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-900 text-amber-400 font-bold text-sm flex items-center justify-center">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {group.groupTitle}
                  </h3>
                  <p className="text-sm text-slate-600">{group.description}</p>
                  <ul className="space-y-2 pt-2 border-t border-slate-100 text-sm text-slate-700">
                    {group.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2">
                        <svg
                          className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <a
                    href="#service-quote-form"
                    className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 hover:text-amber-600"
                  >
                    Enquire about {group.groupTitle.toLowerCase()} &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>

          {service.scopeNote && (
            <div className="rounded-xl bg-amber-50/80 border border-amber-200/80 p-5 text-sm text-slate-700 leading-relaxed">
              <strong className="text-slate-900 block mb-1">
                Important Scope &amp; Enquiry Information
              </strong>
              {service.scopeNote}
            </div>
          )}
        </div>
      </section>

      {/* Authentic Photographs for this Category */}
      <section className="py-14 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
                Work Examples from M-Tech Profiles
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                {service.shortTitle} Photographs
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Photographs from M-Tech Property Solutions&apos; published
                business gallery illustrating relevant trade work.
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 hover:text-amber-700 shrink-0"
            >
              View Full Projects Gallery &rarr;
            </Link>
          </div>

          <ProjectGalleryClient
            initialCategory={service.slug}
            showFilters={false}
          />
        </div>
      </section>

      {/* FAQs & Embedded Quote Request */}
      <section id="service-quote-form" className="py-16 lg:py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: FAQs & Other Services */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
                  Common Questions
                </span>
                <h2 className="text-2xl font-bold text-slate-900">
                  {service.shortTitle} — FAQs
                </h2>
                <div className="space-y-4">
                  {service.faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl border border-slate-200 p-5 space-y-2"
                    >
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                        {faq.question}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#0F172A] text-white rounded-2xl p-6 space-y-4 border border-slate-800">
                <h3 className="text-base font-bold text-amber-400">
                  Explore Related M-Tech Services
                </h3>
                <p className="text-xs text-slate-300">
                  Have multiple jobs across your property? Combine work from our
                  other service areas:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {otherServices.map((other) => (
                    <Link
                      key={other.slug}
                      href={`/${other.slug}`}
                      className="px-3 py-2 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-xs font-medium text-slate-200 hover:text-amber-300 transition-colors flex items-center justify-between"
                    >
                      <span>{other.navLabel}</span>
                      <span>&rarr;</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Quote Form */}
            <div className="lg:col-span-7">
              <QuoteForm defaultService={service.navLabel} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
