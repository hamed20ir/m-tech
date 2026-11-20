import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/mtech-data";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";

const service = getServiceBySlug("painting-plastering")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: "/painting-plastering" },
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    url: "/painting-plastering",
    images: [{ url: service.heroImage, alt: service.heroImageAlt }],
  },
};

export default function PaintingPlasteringPage() {
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
