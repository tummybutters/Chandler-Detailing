import type { Metadata } from "next";
import AboutPageClient from "@/components/pages/AboutPageClient";

export const metadata: Metadata = {
  title: "About Chandler's Detailing",
  description:
    "Learn the story behind Chandler's Detailing, a student-owned Orange County mobile detailing company delivering meticulous paint correction and ceramic coating services across Lake Forest, Irvine, and Mission Viejo.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Chandler's Detailing",
    description:
      "Meet the Orange County mobile detailing team dedicated to protecting your vehicle with concierge-level service.",
    url: "/about",
    images: [
      {
        url: "/about-us.png",
        width: 1200,
        height: 630,
        alt: "About Chandler's Detailing mobile detailing team",
      },
    ],
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
