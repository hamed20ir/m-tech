import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO, SERVICE_CATEGORIES } from "@/lib/mtech-data";
import { ProjectGalleryClient } from "@/components/ProjectGalleryClient";

export const metadata: Metadata = {
  title:
    "Projects & Work Gallery | Kitchens, Bathrooms, Flooring, Patios & Repairs | M-Tech",
  description:
    "Browse photographs from M-Tech Property Solutions' published gallery across kitchens, bathrooms, flooring, plastering, bespoke joinery, garden decking, fencing and patios in Twickenham and South West London.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <div className="bg-[#F8FAFC]">
      {/* Header */}
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
              Projects Gallery
            </span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 rounded-md bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
              Published Business Gallery • Twickenham &amp; SW London
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Projects &amp; Work Photographs
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Explore photographs from {BUSINESS_INFO.name}&apos;s public
              business profile, organised by trade category. Filter by bathrooms
              and kitchens, flooring and tiling, painting and plastering,
              outdoor improvements, handyman joinery or property renovations.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/contact#quote-form"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-colors"
            >
              Request a Quote for Similar Work &rarr;
            </Link>
            <a
              href={BUSINESS_INFO.phone.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-colors"
            >
              Send Your Job Photos on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Main Gallery Section */}
      <section className="py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <ProjectGalleryClient showFilters={true} />

          {/* Service Category Links */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Explore Services by Category
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Select a service category below for full task lists, FAQs and
                tailored quotation requests.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICE_CATEGORIES.map((service) => (
                <Link
                  key={service.slug}
                  href={`/${service.slug}`}
                  className="p-4 rounded-xl border border-slate-200 hover:border-amber-500 bg-slate-50/60 hover:bg-white transition-all flex items-center justify-between group"
                >
                  <div>
                    <div className="font-bold text-slate-900 group-hover:text-amber-700">
                      {service.navLabel}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {service.heroEyebrow}
                    </div>
                  </div>
                  <span className="text-slate-400 group-hover:text-amber-600 font-bold">
                    &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
