import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
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

export const metadata: Metadata = {
  title: "Chandler's Detailing | Premium Mobile Car Detailing",
  description:
    "SoCal's Premier On-Location Car Care Experience. Premium mobile detailing services delivered to your door.",
  keywords:
    "car detailing, mobile detailing, ceramic coating, auto detailing, SoCal, California",
  openGraph: {
    title: "Chandler's Detailing | Premium Mobile Car Detailing",
    description: "SoCal's Premier On-Location Car Care Experience",
    type: "website",
  },
};

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
        <Navbar />
        <main className="pt-20 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
