"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { GALLERY_ITEMS, GalleryItem } from "@/lib/mtech-data";

const FILTER_TABS = [
  { slug: "all", label: "All Work" },
  { slug: "bathrooms-kitchens", label: "Bathrooms & Kitchens" },
  { slug: "flooring-tiling", label: "Flooring & Tiling" },
  { slug: "painting-plastering", label: "Painting & Plastering" },
  { slug: "outdoor-improvements", label: "Outdoor & Garden" },
  { slug: "handyman-services", label: "Handyman & Joinery" },
  { slug: "property-maintenance", label: "Renovations & Maintenance" },
];

interface ProjectGalleryClientProps {
  initialCategory?: string;
  limit?: number;
  showFilters?: boolean;
}

export function ProjectGalleryClient({
  initialCategory = "all",
  limit,
  showFilters = true,
}: ProjectGalleryClientProps) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(
    null
  );

  const filteredItems: GalleryItem[] =
    selectedCategory === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.categorySlug === selectedCategory);

  const displayedItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === "Escape") {
        setActiveLightboxIndex(null);
      } else if (e.key === "ArrowRight") {
        setActiveLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % displayedItems.length
        );
      } else if (e.key === "ArrowLeft") {
        setActiveLightboxIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + displayedItems.length) % displayedItems.length
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeLightboxIndex, displayedItems.length]);

  const activeItem =
    activeLightboxIndex !== null ? displayedItems[activeLightboxIndex] : null;

  return (
    <div className="space-y-8">
      {showFilters && (
        <div
          role="tablist"
          aria-label="Filter gallery by service category"
          className="flex flex-wrap items-center gap-2"
        >
          {FILTER_TABS.map((tab) => {
            const count =
              tab.slug === "all"
                ? GALLERY_ITEMS.length
                : GALLERY_ITEMS.filter((i) => i.categorySlug === tab.slug)
                    .length;
            const isSelected = selectedCategory === tab.slug;
            return (
              <button
                key={tab.slug}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => {
                  setSelectedCategory(tab.slug);
                  setActiveLightboxIndex(null);
                }}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                  isSelected
                    ? "bg-[#0F172A] text-amber-400 shadow-sm"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {tab.label}{" "}
                <span
                  className={`ml-1 text-xs ${
                    isSelected ? "text-amber-300" : "text-slate-400"
                  }`}
                >
                  ({count})
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedItems.map((item, idx) => (
          <div
            key={item.id}
            className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col"
          >
            <button
              type="button"
              onClick={() => setActiveLightboxIndex(idx)}
              className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900 text-left focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer"
              aria-label={`Inspect photo: ${item.title}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent opacity-90" />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-xs text-amber-400 text-xs font-semibold border border-amber-500/30">
                {item.categoryLabel}
              </span>
              <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-white/90 text-slate-900 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Click to Enlarge
              </span>
            </button>

            <div className="p-4 flex-1 flex flex-col justify-between gap-3">
              <div>
                <h3 className="font-bold text-slate-900 text-base leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 mt-1">{item.workType}</p>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <Link
                  href={`/${item.categorySlug}`}
                  className="font-semibold text-slate-700 hover:text-amber-600 transition-colors"
                >
                  View {item.categoryLabel} &rarr;
                </Link>
                <Link
                  href={`/contact?service=${encodeURIComponent(
                    item.categoryLabel
                  )}#quote-form`}
                  className="font-semibold text-amber-700 hover:text-amber-600"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeItem && activeLightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setActiveLightboxIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#0F172A] rounded-2xl border border-slate-700 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800">
              <div>
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                  {activeItem.categoryLabel} • Photo {activeLightboxIndex + 1}{" "}
                  of {displayedItems.length}
                </span>
                <h3 className="text-white font-bold text-base sm:text-lg">
                  {activeItem.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveLightboxIndex(null)}
                aria-label="Close photo preview"
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800"
              >
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
              </button>
            </div>

            <div className="relative bg-black flex items-center justify-center max-h-[70vh] overflow-hidden">
              <img
                src={activeItem.src}
                alt={activeItem.alt}
                className="max-h-[70vh] w-auto object-contain"
              />

              <button
                type="button"
                onClick={() =>
                  setActiveLightboxIndex(
                    (activeLightboxIndex - 1 + displayedItems.length) %
                      displayedItems.length
                  )
                }
                aria-label="Previous photo"
                className="absolute left-3 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700"
              >
                &larr;
              </button>

              <button
                type="button"
                onClick={() =>
                  setActiveLightboxIndex(
                    (activeLightboxIndex + 1) % displayedItems.length
                  )
                }
                aria-label="Next photo"
                className="absolute right-3 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700"
              >
                &rarr;
              </button>
            </div>

            <div className="px-5 py-4 bg-[#0F172A] border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <p className="text-sm text-slate-300">{activeItem.workType}</p>
              <div className="flex items-center gap-3 shrink-0">
                <Link
                  href={`/${activeItem.categorySlug}`}
                  className="px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold"
                >
                  Explore {activeItem.categoryLabel}
                </Link>
                <Link
                  href="/contact#quote-form"
                  onClick={() => setActiveLightboxIndex(null)}
                  className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold"
                >
                  Enquire About Similar Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
