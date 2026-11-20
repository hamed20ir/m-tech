import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/mtech-data";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

const service = getServiceBySlug("handyman-services")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: "/handyman-services" },
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    url: "/handyman-services",
    images: [{ url: service.heroImage, alt: service.heroImageAlt }],
  },
};

export default function HandymanServicesPage() {
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
