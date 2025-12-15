"use client";

import Link from "next/link";
import { useEffect } from "react";
import { PHONE_LINK, PHONE_NUMBER } from "@/lib/constants";
import { QUICK_SERVICE_OPTIONS } from "@/lib/data/services";
import Cal, { getCalApi } from "@calcom/embed-react";
import { Phone, MessageCircle, Clock } from "lucide-react";

function PageHeader() {
    return (
        <section className="pt-28 pb-14 sm:pt-32 sm:pb-16 bg-bg-light relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary-900 rounded-full blur-3xl opacity-30" />
                <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-primary-800 rounded-full blur-3xl opacity-30" />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white">Book Your Detail</h1>
                <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto rounded-full" />
                <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">Select a time that works for you</p>
            </div>
        </section>
    );
}

function ServiceQuickLinks() {
    return (
        <section className="py-10 sm:py-12 bg-white border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-6 text-center">Our Services</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {QUICK_SERVICE_OPTIONS.map((service) => (
                        <div key={service.id} className="p-5 rounded-2xl bg-white border border-gray-100 text-left shadow-sm">
                            <service.icon className="w-8 h-8 mb-3 text-primary-600" />
                            <h4 className="text-gray-900 font-semibold">{service.name}</h4>
                            <p className="text-primary-600 font-bold mt-1">{service.price}</p>
                            <p className="text-gray-500 text-sm mt-1 flex items-center gap-1">
                                <Clock className="w-3 h-3" /> {service.duration}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function BookingWidget() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi();
            cal("ui", {
                theme: "light",
                styles: { branding: { brandColor: "#0284c7" } },
                hideEventTypeDetails: false,
            });
        })();
    }, []);

    return (
        <section className="py-16 sm:py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="card p-4 sm:p-6 md:p-8 bg-white border border-gray-100 shadow-xl">
                    <div className="rounded-2xl overflow-hidden min-h-[420px] sm:min-h-[600px]">
                        <Cal
                            calLink="chandlers-detailing/15min"
                            style={{ width: "100%", height: "100%", minHeight: "420px" }}
                            config={{ theme: "light" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function ContactAlternative() {
    return (
        <section className="py-14 sm:py-16 bg-bg-light">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h3 className="text-2xl font-heading font-bold text-white mb-8">Prefer to Contact Us Directly?</h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href={PHONE_LINK}
                        className="btn-primary px-8 py-4 rounded-full font-semibold inline-flex items-center justify-center gap-2 w-full sm:w-auto"
                    >
                        <Phone className="w-5 h-5" />
                        {PHONE_NUMBER}
                    </a>
                    <Link
                        href="/contact"
                        className="btn-secondary px-8 py-4 rounded-full font-semibold inline-flex items-center justify-center gap-2 w-full sm:w-auto"
                    >
                        <MessageCircle className="w-5 h-5" />
                        Send a Message
                    </Link>
                </div>
                <p className="text-gray-400 mt-6 text-sm">Have questions before booking? We&apos;re here to help!</p>
            </div>
        </section>
    );
}

export default function BookingPageClient() {
    return (
        <>
            <PageHeader />
            <ServiceQuickLinks />
            <BookingWidget />
            <ContactAlternative />
        </>
    );
}
