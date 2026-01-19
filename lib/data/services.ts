import type { LucideIcon } from "lucide-react";
import {
    Droplets,
    Car,
    Sparkles,
    Shield,
    Wrench,
    Sun,
    Dog,
} from "lucide-react";

type IconEntry = LucideIcon;

export type ServicePreview = {
    icon: IconEntry;
    title: string;
    description: string;
    price: string;
};

export type ServicePackage = {
    id: string;
    name: string;
    price: string;
    duration?: string;
    popular: boolean;
    description?: string;
    features: string[];
    pricingBreakdown?: { vehicleType: string; price: string; duration?: string }[];
};

export type ServiceAddOn = {
    icon: IconEntry;
    name: string;
    price: string;
    description: string;
};

export type ServiceProcessStep = {
    step: number;
    title: string;
    description: string;
};

export type ServiceFaq = {
    question: string;
    answer: string;
};

export type QuickServiceOption = {
    id: string;
    name: string;
    price: string;
    duration: string;
    icon: IconEntry;
};

export const HOME_SERVICE_PREVIEW: ServicePreview[] = [
    {
        icon: Droplets,
        title: "Basic Detail",
        description: "Quick exterior wash and interior vacuum. Perfect for regular maintenance.",
        price: "From $79",
    },
    {
        icon: Car,
        title: "Full Detail",
        description: "Complete interior and exterior detailing. Deep cleaning and protection.",
        price: "From $199",
    },
    {
        icon: Sparkles,
        title: "Ceramic Coating",
        description: "Long-lasting paint protection with professional ceramic coating application.",
        price: "From $499",
    },
];

export const SERVICE_PACKAGES: ServicePackage[] = [
    {
        id: "interior",
        name: "Interior Revival",
        price: "From $169",
        description: "A complete cabin reset that makes every drive feel fresh, clean, and comfortable.",
        popular: false,
        features: [
            "Fresh, odor-free interior feel",
            "Seats and carpets refreshed for daily comfort",
            "Crisp glass and trim that look brand new",
        ],
        pricingBreakdown: [
            { vehicleType: "Truck", price: "$209", duration: "2-3 hrs" },
            { vehicleType: "SUV – 7 Seat", price: "$249", duration: "3-4 hrs" },
            { vehicleType: "SUV – 5 Seat", price: "$219", duration: "2-3 hrs" },
            { vehicleType: "Sedan – 4 Door", price: "$179", duration: "2-3 hrs" },
            { vehicleType: "Coupe – 2 Door", price: "$169", duration: "2-3 hrs" },
        ],
    },
    {
        id: "exterior",
        name: "Exterior Gloss Restoration",
        price: "From $99",
        description: "Restores paint clarity and shine so your car looks polished and is easier to keep clean.",
        popular: false,
        features: [
            "High-gloss finish that pops in the sun",
            "Water-beading protection for easier washes",
            "Clean wheels and a finished curb appeal",
        ],
        pricingBreakdown: [
            { vehicleType: "Truck", price: "$129", duration: "1-2 hrs" },
            { vehicleType: "SUV – 7 Seat", price: "$129", duration: "1-2 hrs" },
            { vehicleType: "SUV – 5 Seat", price: "$119", duration: "1-2 hrs" },
            { vehicleType: "Sedan – 4 Door", price: "$109", duration: "1-2 hrs" },
            { vehicleType: "Coupe – 2 Door", price: "$99", duration: "1-2 hrs" },
        ],
    },
    {
        id: "signature",
        name: "Signature Full Detail",
        price: "From $259",
        description: "The full reset inside and out with protection that keeps the shine longer.",
        popular: true,
        features: [
            "New-car feel inside and out",
            "Longer-lasting protection and gloss",
            "Best value for complete care",
        ],
        pricingBreakdown: [
            { vehicleType: "Truck", price: "$309", duration: "3-4 hrs" },
            { vehicleType: "SUV – 7 Seat", price: "$319", duration: "4-5 hrs" },
            { vehicleType: "SUV – 5 Seat", price: "$299", duration: "3-4 hrs" },
            { vehicleType: "Sedan – 4 Door", price: "$279", duration: "3-4 hrs" },
            { vehicleType: "Coupe – 2 Door", price: "$259", duration: "2-3 hrs" },
        ],
    },
    {
        id: "ceramic-level-1",
        name: "Ceramic Coating – Level 1 (Bronze)",
        price: "Contact for Pricing",
        description: "Year-long protection and slick shine that keeps paint looking newer, longer.",
        popular: false,
        features: [
            "Up to 1 year protection",
            "Boosted gloss and depth",
            "Easy-to-clean, water-beading finish",
        ],
        pricingBreakdown: [],
    },
    {
        id: "ceramic-level-2",
        name: "Ceramic Coating – Level 2 (Silver)",
        price: "Contact for Pricing",
        description: "Stronger gloss and durability for drivers who want a long-lasting upgrade.",
        popular: false,
        features: [
            "Up to 2 year protection",
            "Deeper gloss and clarity",
            "Extra coverage on wheels and trim",
        ],
        pricingBreakdown: [],
    },
    {
        id: "ceramic-level-3",
        name: "Ceramic Coating – Level 3 (Gold)",
        price: "Contact for Pricing",
        description: "Maximum protection and a show-ready finish for long-term peace of mind.",
        popular: false,
        features: [
            "3-5 year protection",
            "Maximum gloss and depth",
            "Body, wheels, trim, and glass protected",
        ],
        pricingBreakdown: [],
    },
];

export const SERVICE_ADD_ONS: ServiceAddOn[] = [
    {
        icon: Shield,
        name: "Clay + Seal (12-month protection)",
        price: "+$100",
        description: "Removes embedded contaminants and lays down a 12-month ceramic sealant for lasting slickness.",
    },
    {
        icon: Sparkles,
        name: "Leather Protector / Sealant",
        price: "Upon request",
        description: "Conditioning treatment that nourishes leather while adding UV and stain resistance to keep seats supple.",
    },
    {
        icon: Wrench,
        name: "Engine Bay Detail",
        price: "$75",
        description: "Gentle degreasing, dressing, and protection for your engine bay so it looks showroom ready when the hood opens.",
    },
    {
        icon: Sun,
        name: "Headlight Restoration",
        price: "$60",
        description: "Multi-step sanding and polishing to clear oxidation and restore full nighttime visibility.",
    },
    {
        icon: Dog,
        name: "Pet Hair or Sand Removal",
        price: "+$30–$50",
        description: "Specialty brushes and extraction lift stubborn pet hair or beach sand from carpets and upholstery.",
    },
    {
        icon: Droplets,
        name: "Spray Wax",
        price: "$49.99",
        description: "Quick-apply spray wax that refreshes gloss, adds slick hydrophobic protection, and lasts up to 3 months.",
    },
    {
        icon: Sparkles,
        name: "Machine Ceramic Wax",
        price: "Contact for Pricing",
        description: "Machine-applied ceramic-infused wax layer that locks in shine and shields paint for up to 3 years.",
    },
];

export const SERVICE_PROCESS_STEPS: ServiceProcessStep[] = [
    { step: 1, title: "Book Online", description: "Choose your service and select a convenient time" },
    { step: 2, title: "We Come to You", description: "Our team arrives at your location fully equipped" },
    { step: 3, title: "Premium Detail", description: "We meticulously detail your vehicle" },
    { step: 4, title: "Enjoy the Shine", description: "Admire your spotless, protected vehicle" },
];

export const SERVICE_FAQS: ServiceFaq[] = [
    {
        question: "How long does a detail take?",
        answer: "Service times vary by package and vehicle size/condition. Exterior services are typically 1-2 hours, interior services are usually 2-4 hours, and our Signature Full Detail typically takes 2-5 hours. Ceramic coatings are full-day services. We'll provide an accurate estimate when you book.",
    },
    {
        question: "Do I need to provide water or electricity?",
        answer: "No! Our mobile unit is fully self-contained with its own water supply, power generator, and all necessary equipment. We just need access to your vehicle.",
    },
    {
        question: "What areas do you serve?",
        answer: "We proudly serve Lake Forest, Irvine, Mission Viejo, and surrounding Orange County areas. Contact us if you're unsure about your location.",
    },
    {
        question: "Are your products safe for all vehicles?",
        answer: "Absolutely! We use premium, pH-balanced, eco-friendly products that are safe for all paint types, including matte finishes and ceramic coatings.",
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, Apple Pay, Google Pay, and cash. Payment is collected after the service is completed to your satisfaction.",
    },
    {
        question: "What if it rains on my appointment day?",
        answer: "We monitor weather closely and will contact you to reschedule if conditions are unsuitable. Exterior services require dry conditions, but interior-only services can proceed.",
    },
];

export const QUICK_SERVICE_OPTIONS: QuickServiceOption[] = [
    { id: "interior", name: "Interior Revival", price: "From $169", duration: "2-4 hrs", icon: Car },
    { id: "exterior", name: "Exterior Gloss", price: "From $99", duration: "1-2 hrs", icon: Sparkles },
    { id: "signature", name: "Signature Full", price: "From $259", duration: "2-5 hrs", icon: Shield },
];
