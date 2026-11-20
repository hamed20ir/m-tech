import type { Metadata } from "next";
import Link from "next/link";
import {
  BUSINESS_INFO,
  COVERAGE_DATA,
  SERVICE_CATEGORIES,
} from "@/lib/mtech-data";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = {
  title:
    "Areas We Cover | Twickenham, South West London & Surrey | M-Tech Property Solutions",
  description:
    "M-Tech Property Solutions is based in Twickenham (TW1 3JZ) and advertises property maintenance, handyman services and home improvements across South West London and Surrey.",
  alternates: { canonical: "/areas-we-cover" },
};

export default function AreasWeCoverPage() {
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
            <span className="text-amber-400 font-semibold">Areas We Cover</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 rounded-md bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
              Service Coverage • TW1 &amp; Surrounding Regions
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Twickenham, South West London &amp; Surrey
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {BUSINESS_INFO.name} is principally associated with{" "}
              <strong className="text-white">Twickenham (TW1 3JZ)</strong> and
              advertises property maintenance, handyman services and home
              improvements across{" "}
              <strong className="text-white">South West London</strong> and{" "}
              <strong className="text-white">Surrey</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Main Coverage Details */}
      <section className="py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Principal Location Card */}
            <div className="bg-white rounded-2xl border-2 border-amber-500/40 p-6 sm:p-8 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-md bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
                  Principal Location
                </span>
                <span className="text-xs font-bold text-slate-500">
                  TW1 3JZ
                </span>
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Twickenham
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {COVERAGE_DATA.principalArea.summary}
              </p>
              <div className="pt-3 border-t border-slate-100 text-xs text-slate-700 space-y-1">
                <div>
                  <span className="text-slate-500">Listed Address:</span>{" "}
                  <strong>{COVERAGE_DATA.principalArea.addressListed}</strong>
                </div>
                <div>
                  <span className="text-slate-500">Direct Telephone:</span>{" "}
                  <a
                    href={BUSINESS_INFO.phone.telHref}
                    className="font-bold text-slate-900 underline"
                  >
                    {BUSINESS_INFO.phone.display}
                  </a>
                </div>
              </div>
            </div>

            {/* Advertised Regions */}
            {COVERAGE_DATA.advertisedRegions.map((region) => (
              <div
                key={region.name}
                className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="inline-block px-3 py-1 rounded-md bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
                    Advertised Coverage Region
                  </span>
                  <h2 className="text-2xl font-extrabold text-slate-900">
                    {region.name}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {region.summary}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100">
                  <a
                    href="#area-quote-form"
                    className="text-xs font-bold text-amber-700 hover:text-amber-600"
                  >
                    Request a quote in {region.name} &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Nearby Districts Enquiry Guidance */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-700">
                Local &amp; Surrounding Postcodes
              </span>
              <h2 className="text-2xl font-bold text-slate-900">
                Enquiring from Areas Near Twickenham?
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Because travel availability can depend on the size and nature of
                a job — from a quick handyman visit to a multi-day bathroom,
                kitchen, flooring or garden project — we encourage homeowners,
                landlords and letting agents in nearby districts around
                Twickenham to share their postcode and job details so we can
                confirm availability.
              </p>
              <div className="pt-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                  Nearby Locations Around Twickenham (Enquire to Confirm
                  Availability):
                </div>
                <div className="flex flex-wrap gap-2">
                  {COVERAGE_DATA.nearbyEnquiryLocations.map((loc) => (
                    <span
                      key={loc}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold"
                    >
                      {loc}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#0F172A] text-white rounded-2xl p-6 space-y-4">
              <h3 className="text-lg font-bold text-amber-400">
                Fastest Way to Check Availability
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Send your postcode and a brief description (or photo) of the
                work required via WhatsApp or telephone, or use the enquiry form
                below.
              </p>
              <div className="flex flex-wrap gap-2.5 pt-1">
                <a
                  href={BUSINESS_INFO.phone.telHref}
                  className="px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700"
                >
                  Call {BUSINESS_INFO.phone.display}
                </a>
                <a
                  href={BUSINESS_INFO.phone.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold"
                >
                  WhatsApp Postcode
                </a>
              </div>
            </div>
          </div>

          {/* Services Available + Quote Form */}
          <div
            id="area-quote-form"
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-4"
          >
            <div className="lg:col-span-5 space-y-5">
              <h2 className="text-2xl font-bold text-slate-900">
                Services Available Across Our Coverage Area
              </h2>
              <p className="text-sm text-slate-600">
                Explore the full range of work advertised by{" "}
                {BUSINESS_INFO.name}:
              </p>
              <div className="space-y-3">
                {SERVICE_CATEGORIES.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/${service.slug}`}
                    className="block p-4 rounded-xl bg-white border border-slate-200 hover:border-amber-500 transition-colors"
                  >
                    <div className="font-bold text-slate-900 text-sm flex items-center justify-between">
                      <span>{service.navLabel}</span>
                      <span className="text-amber-600">&rarr;</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {service.heroSummary}
                    </p>
                  </Link>
                ))}
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
