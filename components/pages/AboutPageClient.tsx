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
                <div className="relative max-w-3xl mx-auto overflow-hidden rounded-3xl border border-primary-100 shadow-xl bg-gradient-to-br from-white via-white to-primary-50/70">
                    <div className="absolute -right-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-primary-100 blur-3xl opacity-60" />
                    <div className="relative z-10 p-8 sm:p-12">
                        <span className="text-primary-600 font-medium text-sm uppercase tracking-wider bg-primary-50 px-3 py-1 rounded-full">
                            About Chandler
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-gray-900 mt-6">
                            About <span className="text-primary-600">Chandler</span>
                        </h2>
                        <div className="space-y-4 mt-6 text-gray-600 leading-relaxed text-base sm:text-lg">
                            <p>
                                I started Chandler&apos;s Detailing &amp; Protection with a clear goal: build a business that supports my passion for flying while serving my community and family.
                                What began as a side hustle has grown into something I&apos;m genuinely proud of.
                            </p>
                            <p>
                                Right now, I&apos;m balancing a lot--finishing my associate&apos;s degree at Saddleback College (graduating this year!) while preparing to transfer for my bachelor&apos;s.
                                But school isn&apos;t all I&apos;m focused on. I&apos;m also coaching a 12U baseball team, running this detailing business,
                                and working toward my pilot&apos;s license. It&apos;s a full plate, and that&apos;s exactly why I&apos;ve built this business to be efficient, professional, and reliable.
                            </p>
                            <p>
                                I believe in doing things the right way. Every vehicle that leaves my hands gets the same attention and care I&apos;d want for my own.
                                Whether it&apos;s protecting your paint with ceramic coating, reviving your interior, or keeping your fleet looking sharp, I take pride in the work.
                                My customers aren&apos;t just transactions--they&apos;re part of what makes this business sustainable while I chase my bigger goals.
                            </p>
                            <p>
                                The hustle is real, but it&apos;s worth it. I&apos;m proving you can be a student, an entrepreneur, a mentor, and someone chasing your dreams all at the same time--and doing it with integrity.
                                Thanks for supporting local. It means everything.
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

export default function AboutPageClient() {
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
