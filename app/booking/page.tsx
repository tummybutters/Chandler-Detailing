import type { Metadata } from "next";
import BookingPageClient from "@/components/pages/BookingPageClient";

export const metadata: Metadata = {
  title: "Book Orange County Mobile Detailing Appointment",
  description:
    "Reserve your Chandler's Detailing appointment online for mobile detailing, paint correction, or ceramic coating anywhere in Orange County.",
  alternates: {
    canonical: "/booking",
  },
  openGraph: {
    title: "Book Orange County Mobile Detailing Appointment",
    description:
      "Choose a convenient time for Chandler's Detailing to visit your home or office throughout Lake Forest, Irvine, Mission Viejo, and nearby cities.",
    url: "/booking",
    images: [
      {
        url: "/newherochandler.png",
        width: 1200,
        height: 630,
        alt: "Book mobile detailing appointment with Chandler's Detailing",
      },
    ],
  },
};

export default function BookingPage() {
  return <BookingPageClient />;
}
