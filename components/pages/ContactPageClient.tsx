"use client";

import { useState } from "react";
import {
    PHONE_NUMBER,
    PHONE_LINK,
    EMAIL,
    EMAIL_LINK,
    SERVICE_AREA,
    SERVICE_AREA_DETAILS,
    BUSINESS_HOURS,
    RESPONSE_TIME_PROMISE,
} from "@/lib/constants";
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Send,
    MessageCircle,
    CheckCircle,
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
                    Get in Touch
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto rounded-full" />
                <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                    We&apos;d love to hear from you
                </p>
            </div>
        </section>
    );
}

function ContactForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        vehicle: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    if (isSubmitted) {
        return (
            <div className="card p-12 text-center bg-white border border-gray-100 shadow-lg">
                <div className="w-20 h-20 mx-auto rounded-full bg-green-50 flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Message Sent!</h3>
                <p className="text-gray-600 mb-8">
                    Thank you for reaching out. We&apos;ll get back to you within 2 hours during business hours.
                </p>
                <button onClick={() => setIsSubmitted(false)} className="btn-secondary px-6 py-3 rounded-full">
                    Send Another Message
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="card p-6 sm:p-8 bg-white border border-gray-100 shadow-xl">
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-8">Send Us a Message</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name <span className="text-primary-600">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                        placeholder="John Doe"
                        autoComplete="name"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email <span className="text-primary-600">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                        placeholder="john@example.com"
                        autoComplete="email"
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                        placeholder={PHONE_NUMBER}
                        autoComplete="tel"
                        inputMode="tel"
                    />
                </div>

                <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Interest
                    </label>
                    <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all appearance-none cursor-pointer"
                    >
                        <option value="">Select a service...</option>
                        <option value="express">Express Wash</option>
                        <option value="essential">Essential Detail</option>
                        <option value="premium">Premium Detail</option>
                        <option value="ultimate">Ultimate Detail</option>
                        <option value="ceramic">Ceramic Coating</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="md:col-span-2">
                    <label htmlFor="vehicle" className="block text-sm font-medium text-gray-700 mb-2">
                        Vehicle Type
                    </label>
                    <input
                        type="text"
                        id="vehicle"
                        name="vehicle"
                        value={formData.vehicle}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                        placeholder="e.g., 2023 Tesla Model 3"
                        autoComplete="off"
                    />
                </div>

                <div className="md:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message <span className="text-primary-600">*</span>
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all resize-none"
                        placeholder="Tell us about your detailing needs..."
                        autoComplete="off"
                    />
                </div>
            </div>

            <button
                type="submit"
                className="btn-primary w-full mt-8 px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center justify-center gap-2 group"
            >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
        </form>
    );
}

function ContactInfo() {
    return (
        <div className="space-y-8">
            <div className="card p-8 bg-white border border-gray-100 shadow-md">
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">Contact Information</h3>

                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center flex-shrink-0">
                            <Phone className="w-5 h-5 text-primary-600" />
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm mb-1">Phone</p>
                            <a href={PHONE_LINK} className="text-gray-900 font-semibold hover:text-primary-600 transition-colors">
                                {PHONE_NUMBER}
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center flex-shrink-0">
                            <Mail className="w-5 h-5 text-primary-600" />
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm mb-1">Email</p>
                            <a href={EMAIL_LINK} className="text-gray-900 font-semibold hover:text-primary-600 transition-colors">
                                {EMAIL}
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center flex-shrink-0">
                            <MapPin className="w-5 h-5 text-primary-600" />
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm mb-1">Service Area</p>
                            <p className="text-gray-900 font-semibold">{SERVICE_AREA}</p>
                            <p className="text-gray-500 text-sm mt-1">{SERVICE_AREA_DETAILS}</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center flex-shrink-0">
                            <Clock className="w-5 h-5 text-primary-600" />
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm mb-1">Business Hours</p>
                            <p className="text-gray-900 font-semibold">{BUSINESS_HOURS.standard}</p>
                            <p className="text-gray-500 text-sm">{BUSINESS_HOURS.sunday}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card p-6 bg-primary-50 border border-primary-100">
                <div className="flex items-center gap-4">
                    <MessageCircle className="w-8 h-8 text-primary-600 flex-shrink-0" />
                    <div>
                        <p className="text-gray-900 font-semibold">Quick Response Promise</p>
                        <p className="text-primary-700 text-sm">{RESPONSE_TIME_PROMISE}</p>
                    </div>
                </div>
            </div>

            <div className="card p-2 overflow-hidden h-80 sm:h-96">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53089.07636990422!2d-117.72898956891081!3d33.64692742728954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dce878d6540323%3A0x62953ba878844873!2sLake%20Forest%2C%20CA!5e0!3m2!1sen!2sus!4v1709923456789!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl grayscale hover:grayscale-0 transition-all duration-500"
                />
            </div>
        </div>
    );
}

export default function ContactPageClient() {
    return (
        <>
            <PageHeader />
            <section className="py-16 sm:py-24 bg-bg-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        <ContactForm />
                        <ContactInfo />
                    </div>
                </div>
            </section>
        </>
    );
}
