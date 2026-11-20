import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BUSINESS_INFO } from "@/lib/mtech-data";

export const metadata: Metadata = {
  metadataBase: new URL("https://mtechpropertysolutions.co.uk"),
  title: {
    default:
      "M-Tech Property Solutions | Property Maintenance, Handyman & Home Improvements in Twickenham",
    template: "%s | M-Tech Property Solutions",
  },
  description:
    "Local property maintenance, handyman services and home improvements in Twickenham, South West London and Surrey. Repairs, installations, painting, plastering, flooring, bathrooms, kitchens and outdoor works. Free quotes.",
  keywords: [
    "Handyman in Twickenham",
    "Property Maintenance Twickenham",
    "Home Repairs South West London",
    "Property Maintenance South West London",
    "Handyman TW1",
    "Painting and Plastering Twickenham",
    "Flooring and Tiling Twickenham",
    "Kitchen and Bathroom Installation Twickenham",
    "Decking and Fencing Twickenham",
    "M-Tech Property Solutions",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: BUSINESS_INFO.name,
    title:
      "M-Tech Property Solutions | Property Maintenance, Handyman & Home Improvements in Twickenham",
    description:
      "Practical property maintenance, handyman services and home improvements across Twickenham, South West London and Surrey. Call or WhatsApp 07586 254347 for a free quote.",
    images: [
      {
        url: BUSINESS_INFO.coverBannerUrl,
        width: 1024,
        height: 576,
        alt: "M-Tech Property Solutions — Twickenham & South West London",
      },
    ],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: BUSINESS_INFO.name,
    alternateName: BUSINESS_INFO.shortName,
    telephone: "+447586254347",
    email: BUSINESS_INFO.email.display,
    image: `https://mtechpropertysolutions.co.uk${BUSINESS_INFO.logoUrl}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.town,
      postalCode: BUSINESS_INFO.address.postcode,
      addressCountry: "GB",
    },
    areaServed: [
      { "@type": "City", name: "Twickenham" },
      { "@type": "AdministrativeArea", name: "South West London" },
      { "@type": "AdministrativeArea", name: "Surrey" },
    ],
    sameAs: [
      BUSINESS_INFO.profiles.nextdoor,
      BUSINESS_INFO.profiles.yell,
      BUSINESS_INFO.profiles.cylex,
      BUSINESS_INFO.profiles.instagram,
      BUSINESS_INFO.profiles.facebook,
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "20:30",
      },
    ],
  };

  return (
    <html lang="en-GB">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-amber-500 focus:text-slate-950 focus:font-bold"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
