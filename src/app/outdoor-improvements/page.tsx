import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/mtech-data";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

const service = getServiceBySlug("outdoor-improvements")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: "/outdoor-improvements" },
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    url: "/outdoor-improvements",
    images: [{ url: service.heroImage, alt: service.heroImageAlt }],
  },
};

export default function OutdoorImprovementsPage() {
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
