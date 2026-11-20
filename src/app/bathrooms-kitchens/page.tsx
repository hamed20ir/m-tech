import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/mtech-data";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

const service = getServiceBySlug("bathrooms-kitchens")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: "/bathrooms-kitchens" },
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    url: "/bathrooms-kitchens",
    images: [{ url: service.heroImage, alt: service.heroImageAlt }],
  },
};

export default function BathroomsKitchensPage() {
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
