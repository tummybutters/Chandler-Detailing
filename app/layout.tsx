import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  PHONE_NUMBER,
  EMAIL,
  INSTAGRAM_URL,
  TIKTOK_URL,
  FACEBOOK_URL,
  SERVICE_AREA,
  SERVICE_AREA_DETAILS,
} from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const SITE_URL = "https://www.chandlersdetailing.com";
const OG_IMAGE = `${SITE_URL}/newherochandler.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Chandler's Detailing | Orange County Mobile Detailing Experts",
    template: "%s | Chandler's Detailing",
  },
  description:
    "Premium mobile car detailing, paint correction, and ceramic coating for Orange County drivers. Serving Lake Forest, Irvine, Mission Viejo, and surrounding communities.",
  keywords: [
    "orange county mobile detailing",
    "lake forest car detailing",
    "irvine auto detailing",
    "mission viejo car detail",
    "ceramic coating orange county",
    "paint correction orange county",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Chandler's Detailing | Orange County Mobile Detailing Experts",
    description:
      "Southern California's premium on-location car care experience. Book trusted detailing, paint correction, and ceramic coating across Orange County.",
    url: SITE_URL,
    siteName: "Chandler's Detailing",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Chandler's Detailing mobile car detailing in Orange County",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chandler's Detailing | Orange County Mobile Detailing",
    description:
      "Mobile detailing, paint correction, and ceramic coating serving Lake Forest, Irvine, Mission Viejo, and nearby cities.",
    images: [OG_IMAGE],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    name: "Chandler's Detailing",
    url: SITE_URL,
    image: `${SITE_URL}/logo.jpg`,
    description:
      "Premium mobile car detailing company serving Lake Forest, Irvine, Mission Viejo, and the greater Orange County area.",
    areaServed: [
      {
        "@type": "City",
        name: "Lake Forest",
        addressCountry: "US",
        addressRegion: "CA",
      },
      {
        "@type": "City",
        name: "Irvine",
        addressCountry: "US",
        addressRegion: "CA",
      },
      {
        "@type": "City",
        name: "Mission Viejo",
        addressCountry: "US",
        addressRegion: "CA",
      },
    ],
    serviceArea: SERVICE_AREA,
    telephone: PHONE_NUMBER,
    email: EMAIL,
    priceRange: "$$",
    sameAs: [INSTAGRAM_URL, TIKTOK_URL, FACEBOOK_URL].filter(Boolean),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lake Forest",
      addressRegion: "CA",
      addressCountry: "US",
    },
    makesOffer: [
      {
        "@type": "Offer",
        url: `${SITE_URL}/services`,
        description: "Mobile detailing packages and ceramic coating services across Orange County.",
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "07:00",
        closes: "19:00",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Mobile auto detailing, ceramic coating, paint correction",
    provider: {
      "@type": "AutomotiveBusiness",
      name: "Chandler's Detailing",
    },
    areaServed: SERVICE_AREA_DETAILS,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Orange County Mobile Detailing Packages",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Signature Full Detail",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Interior Revival",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ceramic Coating Packages",
          },
        },
      ],
    },
    url: `${SITE_URL}/services`,
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${playfair.variable} antialiased bg-bg-light text-foreground`}
      >
        <Script
          id="ld-json"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Navbar />
        <main className="pt-20 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
