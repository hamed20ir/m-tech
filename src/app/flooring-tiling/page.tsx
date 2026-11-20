import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/mtech-data";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

const service = getServiceBySlug("flooring-tiling")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: "/flooring-tiling" },
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    url: "/flooring-tiling",
    images: [{ url: service.heroImage, alt: service.heroImageAlt }],
  },
};

export default function FlooringTilingPage() {
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
