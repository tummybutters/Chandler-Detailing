import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";
import {
    PHONE_NUMBER,
    PHONE_LINK,
    EMAIL,
    EMAIL_LINK,
    INSTAGRAM_URL,
    FACEBOOK_URL,
    TIKTOK_URL,
    SERVICE_AREA,
    SERVICE_AREA_DETAILS,
} from "@/lib/constants";

const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/booking", label: "Book Now" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
];

const services = [
    { href: "/services#express", label: "Express Wash" },
    { href: "/services#essential", label: "Essential Detail" },
    { href: "/services#premium", label: "Premium Detail" },
    { href: "/services#ultimate", label: "Ultimate Detail" },
    { href: "/services#ceramic", label: "Ceramic Coating" },
];

export default function Footer() {
    return (
        <footer className="relative bg-gray-900 border-t border-gray-800">
            {/* Blue gradient top border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-600 to-transparent opacity-20" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Logo & Description */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-3 group">
                            <Image
                                src="/logo.jpg"
                                alt="Chandler's Detailing Logo"
                                width={48}
                                height={48}
                                className="h-12 w-12 object-contain"
                            />
                            <span className="font-heading font-bold text-xl text-white">
                                Chandler&apos;s Detailing
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Premium mobile car detailing services delivered to your location.
                            Experience the SoCal difference with our professional team.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-4 pt-2">
                            <a
                                href={INSTAGRAM_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-bg-elevated border border-white/10 flex items-center justify-center text-accent-offwhite/60 hover:text-primary-400 hover:border-primary-500/50 transition-all"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href={TIKTOK_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-bg-elevated border border-white/10 flex items-center justify-center text-accent-offwhite/60 hover:text-primary-400 hover:border-primary-500/50 transition-all"
                                aria-label="TikTok"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-5 h-5"
                                >
                                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                                </svg>
                            </a>
                            <a
                                href={FACEBOOK_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-bg-elevated border border-white/10 flex items-center justify-center text-accent-offwhite/60 hover:text-primary-400 hover:border-primary-500/50 transition-all"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-heading font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-accent-offwhite/60 hover:text-primary-400 transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-heading font-semibold text-white mb-4">Our Services</h4>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service.href}>
                                    <Link
                                        href={service.href}
                                        className="text-accent-offwhite/60 hover:text-primary-400 transition-colors text-sm"
                                    >
                                        {service.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-heading font-semibold text-white mb-4">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                                <div>
                                    <a href={PHONE_LINK} className="text-accent-offwhite/80 hover:text-primary-400 transition-colors text-sm">
                                        {PHONE_NUMBER}
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                                <div>
                                    <a href={EMAIL_LINK} className="text-accent-offwhite/80 hover:text-primary-400 transition-colors text-sm">
                                        {EMAIL}
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                                <div className="text-accent-offwhite/60 text-sm">
                                    <p className="font-medium text-white mb-1">{SERVICE_AREA}</p>
                                    <p className="text-xs opacity-70">{SERVICE_AREA_DETAILS}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-accent-offwhite/40 text-sm">
                        © {new Date().getFullYear()} Chandler&apos;s Detailing. All rights reserved.
                    </p>
                    <p className="text-accent-offwhite/40 text-sm">
                        Proudly serving {SERVICE_AREA_DETAILS}
                    </p>
                </div>
            </div>
        </footer>
    );
}
