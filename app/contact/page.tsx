import type { Metadata } from "next";
import ContactPageClient from "@/components/pages/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Chandler's Detailing in Orange County",
  description:
    "Call, text, or send a message to book mobile detailing anywhere in Lake Forest, Irvine, Mission Viejo, and the surrounding Orange County community.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Chandler's Detailing in Orange County",
    description:
      "Need ceramic coating, paint correction, or interior detailing? Reach the Chandler's Detailing team for fast responses throughout Orange County.",
    url: "/contact",
    images: [
      {
        url: "/newherochandler.png",
        width: 1200,
        height: 630,
        alt: "Contact Chandler's Detailing mobile detailing team",
      },
    ],
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
