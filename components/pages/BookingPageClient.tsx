"use client";

import Script from "next/script";

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

function BookingWidget() {
    return (
        <section className="py-16 sm:py-24 bg-white">
            <Script
                src="https://d3vun76hlrxgjr.cloudfront.net"
                strategy="afterInteractive"
                onLoad={() => {
                    (window as typeof window & { FielddBooking?: { init: (id: string) => void } }).FielddBooking?.init("BJftd3");
                }}
            />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="card p-4 sm:p-6 md:p-8 bg-white border border-gray-100 shadow-xl">
                    <div className="rounded-2xl overflow-hidden min-h-[420px] sm:min-h-[600px]">
                        <iframe
                            src="https://chandlersdetailing.fieldd.co"
                            title="Chandler's Detailing Booking"
                            style={{
                                overflow: "scroll",
                                width: "100%",
                                maxWidth: "1300px",
                                minHeight: "85vh",
                                border: "none",
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function BookingPageClient() {
    return (
        <>
            <PageHeader />
            <BookingWidget />
        </>
    );
}
