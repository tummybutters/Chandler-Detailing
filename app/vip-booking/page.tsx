import type { Metadata } from "next";
import VipBookingPageClient from "@/components/pages/VipBookingPageClient";

export const metadata: Metadata = {
  title: "Vigilantes 12U Grey Fundraiser Booking",
  description:
    "Private fundraiser booking page for Vigilantes 12U Grey. Book a mobile detail to support the team.",
  alternates: {
    canonical: "/vip-booking",
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function VipBookingPage() {
  return <VipBookingPageClient />;
}
