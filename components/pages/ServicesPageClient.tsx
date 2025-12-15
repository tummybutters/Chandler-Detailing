"use client";

import { useState } from "react";
import { BOOKING_URL } from "@/lib/constants";
import {
    SERVICE_PACKAGES,
    SERVICE_ADD_ONS,
    SERVICE_PROCESS_STEPS,
    SERVICE_FAQS,
} from "@/lib/data/services";
import {
    Check,
    ArrowRight,
    Star,
    Clock,
    ChevronDown,
} from "lucide-react";

function PageHeader() {
    return (
        <section className="pt-28 pb-14 sm:pt-32 sm:pb-16 bg-bg-light relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary-900 rounded-full blur-3xl opacity-30" />
                <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-primary-800 rounded-full blur-3xl opacity-30" />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white">
                    Our Services
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto rounded-full" />
                <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                    Comprehensive Care for Every Vehicle
                </p>
            </div>
        </section>
    );
}

function ServicePackages() {
    return (
        <section className="py-16 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
                    {SERVICE_PACKAGES.map((pkg) => (
                        <div
                            key={pkg.id}
                            id={pkg.id}
                            className={`card p-6 sm:p-8 relative border border-gray-100 bg-white ${pkg.popular ? "border-primary-500 ring-4 ring-primary-50 shadow-xl" : ""}`}
                        >
                            {pkg.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary-600 to-primary-500 rounded-full shadow-md">
                                    <span className="text-white text-sm font-semibold flex items-center gap-1">
                                        <Star className="w-3 h-3" /> Most Popular
                                    </span>
                                </div>
                            )}

                            <div className="border-b border-gray-100 pb-5 sm:pb-6 mb-5 sm:mb-6">
                                <h3 className="text-2xl font-heading font-bold text-gray-900">{pkg.name}</h3>
                                <div className="mt-4 flex items-baseline gap-2">
                                    <span className="text-4xl font-bold text-primary-600">{pkg.price}</span>
                                </div>
                                {pkg.duration && (
                                    <div className="mt-2 flex items-center gap-2 text-gray-500">
                                        <Clock className="w-4 h-4" />
                                        <span className="text-sm">{pkg.duration}</span>
                                    </div>
                                )}
                                {pkg.description && (
                                    <p className="mt-4 text-gray-600">{pkg.description}</p>
                                )}
                            </div>

	                            {pkg.pricingBreakdown && pkg.pricingBreakdown.length > 0 && (
	                                <div className="mb-6 sm:mb-8 space-y-2">
	                                    <h4 className="font-semibold text-gray-900 text-sm mb-3">Vehicle Pricing</h4>
	                                    <div className="grid grid-cols-[1fr_auto_auto] gap-4 text-xs font-semibold text-gray-500 uppercase tracking-wide px-0.5">
	                                        <span>Vehicle</span>
	                                        <span className="text-right">Price</span>
	                                        <span className="text-right">Duration</span>
	                                    </div>
	                                    {pkg.pricingBreakdown.map((item, i) => (
	                                        <div
	                                            key={i}
	                                            className="grid grid-cols-[1fr_auto_auto] gap-4 text-sm py-2 border-b border-gray-100 last:border-0"
	                                        >
	                                            <span className="text-gray-600">{item.vehicleType}</span>
	                                            <span className="font-semibold text-primary-600 text-right">{item.price}</span>
	                                            <span className="text-gray-500 text-right">{item.duration ?? "—"}</span>
	                                        </div>
	                                    ))}
	                                </div>
	                            )}

                            {pkg.features && pkg.features.length > 0 && (
                                <ul className="space-y-3 mb-6 sm:mb-8">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            <a
                                href={BOOKING_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3 rounded-full font-semibold text-center inline-flex items-center justify-center gap-2 transition-all text-sm sm:text-base btn-primary"
                            >
                                Book This Service
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function AddOns() {
    return (
        <section className="py-16 sm:py-24 bg-bg-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
                        Add-On Services
                    </h2>
                    <p className="text-gray-300">Enhance your detail with these premium additions</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
                    {SERVICE_ADD_ONS.map((addon) => (
                        <div key={addon.name} className="relative group">
                            <div
                                className="card p-6 text-center bg-white border border-gray-100 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500"
                                tabIndex={0}
                                role="button"
                                aria-label={`${addon.name} details`}
                            >
                                <div className="w-12 h-12 mx-auto rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center mb-4">
                                    <addon.icon className="w-6 h-6 text-primary-600" />
                                </div>
                                <h4 className="text-gray-900 font-semibold text-sm mb-1">{addon.name}</h4>
                                <p className="text-primary-600 font-bold">{addon.price}</p>
                            </div>
                            <div className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 w-64 -translate-x-1/2 rounded-2xl border border-primary-100 bg-white/95 p-4 text-left shadow-xl opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0">
                                <p className="text-sm text-gray-600">{addon.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Process() {
    return (
        <section className="py-16 sm:py-24 bg-white relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-heading font-bold text-gray-900">How It Works</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">
                    <div className="absolute top-12 left-0 right-0 h-px bg-gray-200 hidden lg:block" />

                    {SERVICE_PROCESS_STEPS.map((step) => (
                        <div key={step.step} className="text-center relative">
                            <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-white border-2 border-primary-100 flex items-center justify-center mb-4 sm:mb-6 relative z-10 shadow-sm">
                                <span className="text-2xl sm:text-3xl font-heading font-bold text-primary-600">
                                    {step.step}
                                </span>
                            </div>
                            <h4 className="text-lg sm:text-xl font-heading font-bold text-gray-900 mb-2">
                                {step.title}
                            </h4>
                            <p className="text-gray-500 text-sm">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-16 sm:py-24 bg-bg-light">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="space-y-4">
                    {SERVICE_FAQS.map((faq, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm transition-all ${openIndex === index ? "ring-2 ring-primary-100" : ""}`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                            >
                                <span className="text-gray-900 font-semibold pr-4">{faq.question}</span>
                                <ChevronDown
                                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${openIndex === index ? "rotate-180 text-primary-600" : ""}`}
                                />
                            </button>
                            {openIndex === index && (
                                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function ServicesPageClient() {
    return (
        <>
            <PageHeader />
            <ServicePackages />
            <AddOns />
            <Process />
            <FAQ />
        </>
    );
}
