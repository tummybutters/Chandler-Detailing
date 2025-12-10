import type { LucideIcon } from "lucide-react";
import {
    Droplets,
    Car,
    Sparkles,
    Shield,
    Wrench,
    Sun,
    Dog,
    Zap,
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
    pricingBreakdown?: { vehicleType: string; price: string }[];
};

export type ServiceAddOn = {
    icon: IconEntry;
    name: string;
    price: string;
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
        id: "maintenance",
        name: "Maintenance Detail – Preservation Wash",
        price: "Starting at $90+",
        description: "Keeps your car fresh & protected between full details.",
        popular: false,
        features: [],
        pricingBreakdown: [
            { vehicleType: "Coupe – 2 seats", price: "$89.99" },
            { vehicleType: "Sedan – 4 doors", price: "$99.99" },
            { vehicleType: "Small SUV / Truck", price: "$119.99" },
            { vehicleType: "Large SUV / Truck", price: "$149.99" },
        ],
    },
    {
        id: "interior",
        name: "Interior Revival",
        price: "Starting at $225+",
        description: "Deep clean for that like-new interior.",
        popular: false,
        features: [],
        pricingBreakdown: [
            { vehicleType: "Coupe – 2 seats", price: "$224.99" },
            { vehicleType: "Sedan – 4 doors", price: "$249.99" },
            { vehicleType: "Small SUV", price: "$274.99" },
            { vehicleType: "Large SUV / Truck", price: "$324.99" },
        ],
    },
    {
        id: "exterior",
        name: "Exterior Gloss Restoration",
        price: "Starting at $225+",
        description: "Deep exterior clean & long-lasting gloss protection.",
        popular: false,
        features: [],
        pricingBreakdown: [
            { vehicleType: "Coupe – 2 seats", price: "$224.99" },
            { vehicleType: "Sedan – 4 doors", price: "$249.99" },
            { vehicleType: "Small SUV", price: "$274.99" },
            { vehicleType: "Large SUV / Truck", price: "$324.99" },
        ],
    },
    {
        id: "signature",
        name: "Signature Full Detail",
        price: "Starting at $325+",
        description: "Full inside & out detail with 6-month ceramic protection.",
        popular: true,
        features: [],
        pricingBreakdown: [
            { vehicleType: "Coupe – 2 seats", price: "$324.99" },
            { vehicleType: "Sedan – 4 doors", price: "$349.99" },
            { vehicleType: "Small SUV / Truck", price: "$375.99" },
            { vehicleType: "Large SUV / Truck", price: "$400.99" },
            { vehicleType: "Oversized (Van, 3-row SUV)", price: "$425.99–$450.99" },
        ],
    },
];

export const SERVICE_ADD_ONS: ServiceAddOn[] = [
    { icon: Shield, name: "Clay + Seal (12-month protection)", price: "+$100" },
    { icon: Sparkles, name: "Leather Protector / Sealant", price: "Upon request" },
    { icon: Wrench, name: "Engine Bay Detail", price: "$75" },
    { icon: Sun, name: "Headlight Restoration", price: "$60" },
    { icon: Dog, name: "Pet Hair or Sand Removal", price: "+$30–$50" },
    { icon: Droplets, name: "Detail Spray", price: "$25" },
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
        answer: "Service times vary by package. Express Wash takes 30-45 minutes, while our Ultimate Detail can take 5-6 hours. Ceramic coating is a full-day service. We'll provide an accurate estimate when you book.",
    },
    {
        question: "Do I need to provide water or electricity?",
        answer: "No! Our mobile unit is fully self-contained with its own water supply, power generator, and all necessary equipment. We just need access to your vehicle.",
    },
    {
        question: "What areas do you serve?",
        answer: "We serve all of Southern California, including Los Angeles, Orange County, San Diego, and surrounding areas. Contact us if you're unsure about your location.",
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
    { id: "express", name: "Express Wash", price: "$49", duration: "30-45 min", icon: Droplets },
    { id: "essential", name: "Essential Detail", price: "$129", duration: "1.5-2 hours", icon: Car },
    { id: "premium", name: "Premium Detail", price: "$249", duration: "3-4 hours", icon: Sparkles },
    { id: "ultimate", name: "Ultimate Detail", price: "$399", duration: "5-6 hours", icon: Shield },
];
