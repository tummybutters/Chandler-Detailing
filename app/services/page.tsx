import type { Metadata } from "next";
import ServicesPageClient from "@/components/pages/ServicesPageClient";

export const metadata: Metadata = {
  title: "Orange County Auto Detailing Services & Pricing",
  description:
    "Explore Chandler's Detailing service menu including interior revivals, exterior gloss restoration, signature full details, paint correction, and ceramic coating packages for Lake Forest, Irvine, Mission Viejo, and surrounding Orange County cities.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Orange County Auto Detailing Services & Pricing",
    description:
      "Choose the perfect detailing package, add-ons, or ceramic coating treatment delivered on-site anywhere in Orange County.",
    url: "/services",
    images: [
      {
        url: "/ceramic-coating.jpg",
        width: 1200,
        height: 630,
        alt: "Orange County ceramic coating and mobile detailing services",
      },
    ],
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
