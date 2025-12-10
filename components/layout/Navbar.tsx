"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Sparkles } from "lucide-react";
import { BOOKING_URL } from "@/lib/constants";
import ShinyButton from "@/components/ui/ShinyButton";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: BOOKING_URL, label: "Booking" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <Image
                            src="/logo.jpg"
                            alt="Chandler's Detailing Logo"
                            width={48}
                            height={48}
                            className="h-12 w-12 object-contain"
                            priority
                        />
                        <span className="font-heading font-bold text-xl text-white group-hover:text-primary-400 transition-colors">
                            Chandler&apos;s Detailing
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-gray-300 hover:text-primary-400 font-medium transition-colors relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <ShinyButton
                            href={BOOKING_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2"
                        >
                            Book Now
                            <Sparkles className="w-4 h-4" />
                        </ShinyButton>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-white hover:text-primary-400 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-bg-dark border-t border-white/10 border-b shadow-lg">
                    <div className="px-6 py-4 space-y-4">
                        {navLinks.map((link) => (
                            <div key={link.href}>
                                <Link
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-lg text-gray-300 hover:text-primary-400 font-medium py-2 transition-colors"
                                >
                                    {link.label}
                                </Link>
                            </div>
                        ))}
                        <div className="pt-4">
                            <ShinyButton
                                href={BOOKING_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsOpen(false)}
                                className="w-full inline-flex items-center justify-center gap-2"
                            >
                                Book Now
                                <Sparkles className="w-4 h-4" />
                            </ShinyButton>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
