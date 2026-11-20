import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/mtech-data";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

const service = getServiceBySlug("property-maintenance")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: "/property-maintenance" },
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    url: "/property-maintenance",
    images: [{ url: service.heroImage, alt: service.heroImageAlt }],
  },
};

export default function PropertyMaintenancePage() {
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
