import Image from "next/image";
import {
    Heart,
    Target,
    Shield,
    Leaf,
    Award,
    Users,
    Sparkles,
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
                    About Us
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto rounded-full" />
                <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                    Passion for Perfection
                </p>
            </div>
        </section>
    );
}

function OurStory() {
    return (
        <section className="py-16 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    <div className="relative max-w-xl w-full mx-auto">
                        <div className="aspect-[4/3] rounded-3xl bg-primary-50 overflow-hidden relative shadow-lg">
                            <Image
                                src="/about-us.png"
                                alt="Detailing specialist at work"
                                fill
                                sizes="(min-width: 1024px) 50vw, 100vw"
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-primary-100/50 -z-10" />
                        <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-primary-50/50 blur-xl" />
                    </div>

                    <div className="max-w-2xl mx-auto">
                        <span className="text-primary-600 font-medium text-sm uppercase tracking-wider bg-primary-50 px-3 py-1 rounded-full">
                            Our Story
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gray-900 mt-6">
                            Born from a <span className="text-primary-600">Passion</span> for Cars
                        </h2>
                        <div className="space-y-4 mt-6 text-gray-600 leading-relaxed text-base sm:text-lg">
                            <p>
                                Chandler&apos;s Detailing started with a simple belief: every car deserves to look its absolute best.
                                What began as a weekend hobby quickly grew into a mission to bring premium detailing services
                                directly to car owners across Southern California.
                            </p>
                            <p>
                                Growing up in SoCal, surrounded by car culture and beautiful coastlines, we developed
                                an appreciation for both automotive excellence and environmental responsibility. That&apos;s why
                                we use only eco-friendly, water-conscious products that deliver stunning results.
                            </p>
                            <p>
                                Today, our team of certified detailing professionals serves hundreds of satisfied clients,
                                from daily drivers to exotic supercars. We bring the same passion and attention to detail
                                to every vehicle we touch.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function MissionValues() {
    const values = [
        {
            icon: Target,
            title: "Quality",
            description: "We never cut corners. Every detail matters, from the products we use to the techniques we employ.",
        },
        {
            icon: Heart,
            title: "Convenience",
            description: "Your time is valuable. We bring our fully-equipped mobile unit to you, wherever you are.",
        },
        {
            icon: Shield,
            title: "Trust",
            description: "Fully licensed, insured, and background-checked. Your vehicle is in safe hands.",
        },
    ];

    return (
        <section className="py-16 sm:py-24 bg-bg-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 space-y-6">
                    <span className="text-primary-400 font-medium text-sm uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full shadow-sm text-white border border-white/10">
                        Our Values
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white">
                        What We Stand For
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {values.map((value) => (
                        <div
                            key={value.title}
                            className="card p-8 text-center bg-white border border-gray-100"
                        >
                            <div className="w-20 h-20 mx-auto rounded-2xl bg-primary-50 border border-primary-100 flex items-center justify-center mb-6">
                                <value.icon className="w-10 h-10 text-primary-600" />
                            </div>
                            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">{value.title}</h3>
                            <p className="text-gray-600">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Team() {
    const team = [
        { name: "Chandler", role: "Founder & Lead Detailer", initial: "C" },
        { name: "Marcus", role: "Senior Detailer", initial: "M" },
        { name: "Elena", role: "Ceramic Specialist", initial: "E" },
    ];

    return (
        <section className="py-16 sm:py-24 bg-bg-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-primary-400 font-medium text-sm uppercase tracking-wider">
                        Our Team
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
                        Meet the Experts
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {team.map((member) => (
                        <div key={member.name} className="card p-8 text-center group">
                            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mb-6">
                                <span className="text-3xl font-heading font-bold text-white">{member.initial}</span>
                            </div>
                            <h3 className="text-xl font-heading font-bold text-white mb-1">{member.name}</h3>
                            <p className="text-primary-400">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Commitment() {
    const commitments = [
        { icon: Leaf, text: "Eco-Friendly Products" },
        { icon: Award, text: "Satisfaction Guaranteed" },
        { icon: Shield, text: "Fully Insured" },
        { icon: Users, text: "Certified Professionals" },
    ];

    return (
        <section className="py-16 sm:py-24 bg-bg-card">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-4">
                    <span className="text-primary-400 font-medium text-sm uppercase tracking-wider">
                        Our Commitment
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white">
                        Your Trust, Our Priority
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-10">
                        {commitments.map((item) => (
                            <div
                                key={item.text}
                                className="flex items-center gap-3 px-6 py-4 rounded-full bg-bg-elevated border border-white/10"
                            >
                                <item.icon className="w-6 h-6 text-primary-400" />
                                <span className="text-white font-medium">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function InstagramFeed() {
    return (
        <section className="py-16 sm:py-24 bg-bg-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-heading font-bold text-white">Follow Our Work</h2>
                    <p className="text-accent-offwhite/60 mt-2">@chandlersdetailing</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                    {[...Array(8)].map((_, i) => (
                        <div
                            key={i}
                            className="aspect-square rounded-2xl bg-bg-card border border-white/10 flex items-center justify-center"
                        >
                            <Sparkles className="w-8 h-8 text-accent-offwhite/20" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function AboutPage() {
    return (
        <>
            <PageHeader />
            <OurStory />
            <MissionValues />
            <Team />
            <Commitment />
            <InstagramFeed />
        </>
    );
}
