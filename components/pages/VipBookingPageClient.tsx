"use client";

import Image from "next/image";
import Script from "next/script";
import { useState } from "react";
import type { CSSProperties } from "react";
import { ArrowRight, Check, Phone } from "lucide-react";
import { PHONE_LINK, PHONE_NUMBER } from "@/lib/constants";
import ShinyButton from "@/components/ui/ShinyButton";
import styles from "./VipBookingPage.module.css";

const FUNDRAISER = {
    teamName: "Vigilantes 12U Grey",
    goal: 4500,
    raised: 2000,
    projected: 3200,
    remainingRange: "$800-$1,000",
    noteLabel: "Vigilantes 12U Grey fundraiser",
    logoSrc: "/fundraisers/vigilantes-logo.png",
};

const COLLAGE_ITEMS = [
    {
        image: "/images/showcase/showcase-01.jpg",
        quote: "Chandler did amazing work on my truck today. I went with the full detail inside and out, well worth the price.",
        reviewer: "Jordan Raymond",
    },
    {
        image: "/images/showcase/showcase-02.jpg",
        quote: "Chandler provided excellent service on my car. I couldn't be happier with the results.",
        reviewer: "Eddy DelPozo",
    },
    {
        image: "/images/showcase/showcase-03.jpg",
        quote: "Did an amazing job. I have never seen my car this clean, and for such a low price.",
        reviewer: "Ethan Koers",
    },
    {
        image: "/images/showcase/showcase-04.jpg",
        quote: "I needed a detail same day and Chandler was able to deliver. My mini van looks brand new.",
        reviewer: "Margo Hazlett",
    },
    {
        image: "/images/showcase/showcase-05.jpg",
        quote: "Best detail service I've found for a good price. Friendly and didn't take long at all.",
        reviewer: "Johnathan Behm",
    },
    {
        image: "/images/showcase/showcase-06.jpg",
        quote: "I was really impressed with how amazing my car looked after the detailing.",
        reviewer: "Katie Mirabella",
    },
    {
        image: "/images/showcase/showcase-07.jpg",
        quote: "Excellent service! Communication was great and the finished product looked excellent!",
        reviewer: "Emilio Semas",
    },
];

const BOOKING_STEPS = [
    {
        number: "1",
        title: "Pick Your Detail",
        description: "Choose the service that fits your vehicle and goals. Mobile service comes to you.",
    },
    {
        number: "2",
        title: "Lock a Time",
        description: "Choose a time and we will call to confirm every detail.",
    },
    {
        number: "3",
        title: "Mention the Fundraiser",
        description: `Add "${FUNDRAISER.noteLabel}" in the note field so 30% supports the team.`,
    },
];

const TRUST_BADGES = ["Mobile Service", "30% Supports the Team", "Pay After Service"];

const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);

export default function VipBookingPageClient() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [logoError, setLogoError] = useState(false);
    const progress = Math.min(FUNDRAISER.raised / FUNDRAISER.goal, 1);
    const progressPercent = Math.round(progress * 100);

    return (
        <div className="bg-[#0b0b0b] text-white">
            <section className="relative overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.22),_transparent_55%)]" />
                <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                    <div className="space-y-8">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-black text-xs font-bold tracking-[0.25em] uppercase border-2 border-black shadow-[4px_4px_0_#000]">
                            Vigilantes 12U Grey Fundraiser
                        </span>
                        <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-heading font-bold uppercase leading-tight ${styles.heroTitle}`}>
                            <span className={styles.heroTitleLine}>Your Home on the Road,</span>
                            <span className={styles.heroTitleAccent}>Detailed Right at Your Door</span>
                        </h1>
                        <div className="text-lg text-white/80 max-w-xl space-y-2">
                            <p>You spend hundreds of hours driving to games and practices - let us spend two making it feel brand new again.</p>
                            <p className="text-primary-300">Book today and fund a Cooperstown dream with 30% of your service.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <ShinyButton href="#booking" className="inline-flex items-center justify-center gap-2 w-full sm:w-auto">
                                Book & Support
                                <ArrowRight className="w-4 h-4" />
                            </ShinyButton>
                            <a
                                href={PHONE_LINK}
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-white/60 text-white font-semibold uppercase tracking-wide text-sm hover:bg-white hover:text-black transition-all w-full sm:w-auto"
                            >
                                <Phone className="w-4 h-4" />
                                {PHONE_NUMBER}
                            </a>
                        </div>
                    </div>

                    <div className="mt-10 rounded-2xl border border-white/10 bg-black/60 px-5 py-4 sm:px-6 sm:py-5 shadow-[0_12px_30px_rgba(0,0,0,0.5)]">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center overflow-hidden">
                                    {logoError ? (
                                        <span className="text-lg font-heading font-bold text-white">V</span>
                                    ) : (
                                        <Image
                                            src={FUNDRAISER.logoSrc}
                                            alt={`${FUNDRAISER.teamName} logo`}
                                            width={48}
                                            height={48}
                                            onError={() => setLogoError(true)}
                                        />
                                    )}
                                </div>
                                <div>
                                    <p className="text-[0.6rem] uppercase tracking-[0.3em] text-[#7dd3fc] font-semibold">
                                        Team Fundraiser
                                    </p>
                                    <p className="text-sm sm:text-base font-semibold">{FUNDRAISER.teamName}</p>
                                </div>
                            </div>

                            <div className="flex-1 sm:px-6">
                                <div className="flex items-center justify-between text-[0.7rem] uppercase tracking-[0.2em] text-white/50 mb-3">
                                    <span>Raised {formatCurrency(FUNDRAISER.raised)}</span>
                                    <span>Goal {formatCurrency(FUNDRAISER.goal)}</span>
                                </div>
                                <div
                                    className={styles.cylinder}
                                    style={{ "--progress": `${progressPercent}%` } as CSSProperties}
                                >
                                    <div className={styles.cylinderFill} />
                                    <div className={styles.cylinderMarker}>
                                        <span>{formatCurrency(FUNDRAISER.raised)}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="text-xs text-white/70 sm:text-right">
                                <div className="font-semibold text-white">Remaining {FUNDRAISER.remainingRange}</div>
                                <div className="text-white/50">Projected {formatCurrency(FUNDRAISER.projected)}</div>
                            </div>
                        </div>
                        <p className="mt-3 text-[0.7rem] text-white/50">
                            Mention "{FUNDRAISER.noteLabel}" in the notes so we can track your booking.
                        </p>
                    </div>

                    <div className="mt-8 flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.35em] text-white/40">
                        <span className="h-px w-10 bg-white/10" />
                        Proof from local drivers
                    </div>
                    <div className={styles.collageContainer}>
                        <div className={styles.collageGrid}>
                            {COLLAGE_ITEMS.map((item, index) => {
                                const isOpen = openIndex === index;
                                return (
                                    <button
                                        key={item.reviewer}
                                        type="button"
                                        className={`${styles.collageItem} ${isOpen ? styles.isOpen : ""}`}
                                        onClick={() => setOpenIndex(isOpen ? null : index)}
                                        aria-pressed={isOpen}
                                    >
                                        <Image
                                            src={item.image}
                                            alt={`${item.reviewer} review`}
                                            fill
                                            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 80vw"
                                            className={styles.collageImage}
                                        />
                                        <div className={styles.collageReview}>
                                            <p>&ldquo;{item.quote}&rdquo;</p>
                                            <div className={styles.collageReviewer}>{item.reviewer} *****</div>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 sm:py-20 bg-[#0f0f0f] border-y border-white/10">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {BOOKING_STEPS.map((step) => (
                            <div
                                key={step.number}
                                className="relative bg-white text-black border-4 border-black rounded-2xl p-6 shadow-[8px_8px_0_#000] min-h-[200px]"
                            >
                                <div className="absolute -top-4 left-6 w-10 h-10 rounded-md bg-gradient-to-br from-[#38bdf8] to-[#0ea5e9] text-black border-2 border-black flex items-center justify-center font-bold">
                                    {step.number}
                                </div>
                                <h3 className="mt-6 text-xl font-heading font-bold uppercase">{step.title}</h3>
                                <p className="text-sm text-black/70 mt-3">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 sm:py-20 bg-[#0b0b0b]">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="rounded-3xl border border-white/10 bg-black/70 p-8 sm:p-10 shadow-[0_20px_40px_rgba(0,0,0,0.55)]">
                        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                            <div className="space-y-4 max-w-2xl">
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs uppercase tracking-[0.3em] text-white/70">
                                    About Chandler
                                </span>
                                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                                    Student. Coach. Detailer.
                                </h2>
                                <p className="text-sm sm:text-base text-white/75 leading-relaxed">
                                    I built Chandler&apos;s Detailing &amp; Protection to support my flight training and give back to the community that
                                    shows up for my 12U team. Every vehicle gets the same care I&apos;d want for my own.
                                </p>
                                <p className="text-sm sm:text-base text-white/75 leading-relaxed">
                                    When you book this fundraiser, you&apos;re not just getting a brand-new car feel - you&apos;re helping our players reach
                                    Cooperstown.
                                </p>
                            </div>
                            <div className="flex flex-col items-start gap-3 text-xs uppercase tracking-[0.25em] text-white/50">
                                <span className="px-3 py-2 rounded-full border border-white/10 bg-white/5">Mobile Service</span>
                                <span className="px-3 py-2 rounded-full border border-white/10 bg-white/5">Owner Operated</span>
                                <span className="px-3 py-2 rounded-full border border-white/10 bg-white/5">30% To Team</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="booking" className="py-16 sm:py-20 bg-[#0b0b0b]">
                <Script
                    src="https://d3vun76hlrxgjr.cloudfront.net"
                    strategy="afterInteractive"
                    onLoad={() => {
                        (window as typeof window & { FielddBooking?: { init: (id: string) => void } }).FielddBooking?.init("BJftd3");
                    }}
                />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl sm:text-4xl font-heading font-bold uppercase">
                            Secure Your Time Slot
                        </h2>
                        <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm font-semibold uppercase tracking-wide text-white/70">
                            {TRUST_BADGES.map((badge) => (
                                <span key={badge} className="inline-flex items-center gap-2">
                                    <Check className="w-4 h-4 text-[#38bdf8]" />
                                    {badge}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-black/60 p-4 sm:p-6 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                        <div className="rounded-2xl overflow-hidden min-h-[360px] sm:min-h-[520px] flex justify-center">
                            <iframe
                                src="https://chandlersdetailing.fieldd.co"
                                title="Chandler's Detailing Booking"
                                className="w-full border-0"
                                style={{ maxWidth: "1000px", minHeight: "60vh" }}
                            />
                        </div>
                    </div>

                    <div className="mt-6 text-center text-sm text-white/70">
                        Add &ldquo;{FUNDRAISER.noteLabel}&rdquo; in the note field so your booking supports the team.
                    </div>
                </div>
            </section>
        </div>
    );
}
