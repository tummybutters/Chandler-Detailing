import type { Metadata } from "next";
import HomePageClient from "@/components/pages/HomePageClient";

export const metadata: Metadata = {
  title: "Orange County Mobile Car Detailing & Ceramic Coating",
  description:
    "Premium mobile auto detailing, paint correction, and ceramic coating proudly serving Lake Forest, Irvine, Mission Viejo, and surrounding Orange County neighborhoods.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Orange County Mobile Car Detailing & Ceramic Coating",
    description:
      "Chandler's Detailing delivers luxury-grade detailing, ceramic coating, and maintenance packages directly to your driveway anywhere in Orange County.",
    url: "/",
    images: [
      {
        url: "/newherochandler.png",
        width: 1200,
        height: 630,
        alt: "Mobile detailing service by Chandler's Detailing in Orange County",
      },
    ],
  },
};

export default function HomePage() {
  return <HomePageClient />;
}
