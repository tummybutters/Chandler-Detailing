"use client";

import { Star } from "lucide-react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const reviews = [
    {
        name: "Evan Porter",
        date: "1 week ago",
        text: "The exterior polish was unreal. My Subaru looks like it was dipped in glass.",
        stars: 5,
    },
    {
        name: "Linda Cho",
        date: "3 days ago",
        text: "Incredibly thorough interior work. Every surface looks refreshed without that heavy cleaner smell.",
        stars: 5,
    },
    {
        name: "Harper Singh",
        date: "2 weeks ago",
        text: "Brought my car after months of road trips. Somehow it came back looking factory-new.",
        stars: 5,
    },
    {
        name: "Gavin Morales",
        date: "4 days ago",
        text: "Fast turnaround and perfect results. My rims haven’t looked this clean since the dealership.",
        stars: 5,
    },
    {
        name: "Elena Vargas",
        date: "1 month ago",
        text: "Professional from start to finish. The paint correction removed marks I thought were permanent.",
        stars: 5,
    },
    {
        name: "Noah Whitman",
        date: "2 weeks ago",
        text: "Great communication and exceptional quality. My truck shines even in low light.",
        stars: 5,
    },
    {
        name: "Chloe Ramirez",
        date: "6 days ago",
        text: "Interior deep clean was outstanding. Pet hair gone, carpets revived, everything spotless.",
        stars: 5,
    },
    {
        name: "Jackson Reid",
        date: "3 weeks ago",
        text: "I’ve tried several detailers and this is easily the best work I’ve seen.",
        stars: 5,
    },
    {
        name: "Mila Thompson",
        date: "5 days ago",
        text: "Super convenient mobile service. Came to my office and made the car look brand new.",
        stars: 5,
    },
    {
        name: "Owen Clarke",
        date: "2 months ago",
        text: "Ceramic coating is flawless. Water slides off instantly and the color pops.",
        stars: 5,
    },
    {
        name: "Jasmine Patel",
        date: "3 weeks ago",
        text: "Fit me in last minute and still delivered top-tier results. Very impressed.",
        stars: 5,
    },
    {
        name: "Elliot Brooks",
        date: "1 week ago",
        text: "Engine bay detail exceeded expectations. Looks practically brand new under the hood.",
        stars: 5,
    },
    {
        name: "Natalie Cruz",
        date: "4 days ago",
        text: "My SUV had beach sand everywhere. Now it looks like it’s never seen a shoreline.",
        stars: 5,
    },
    {
        name: "Henry Mitchell",
        date: "3 months ago",
        text: "Punctual, polite, and meticulous. Exactly what you want from a detailer.",
        stars: 5,
    },
    {
        name: "Ava Summers",
        date: "2 weeks ago",
        text: "Interior restoration was beyond expectations. Seats look practically reupholstered.",
        stars: 5,
    },
    {
        name: "Theo McDaniel",
        date: "1 month ago",
        text: "The maintenance plan keeps my work vehicles looking consistently sharp. Worth every dollar.",
        stars: 5,
    },
    {
        name: "Camila Foster",
        date: "1 week ago",
        text: "Quick scheduling and beautiful finished product. My paint hasn't sparkled like this in years.",
        stars: 5,
    },
    {
        name: "Jordan Ellis",
        date: "3 days ago",
        text: "Had stains I thought were impossible to remove. All gone. Impressive craftsmanship.",
        stars: 5,
    },
    {
        name: "Riley Hammond",
        date: "2 months ago",
        text: "Mobile setup was efficient and clean. You’d never know he was working in my driveway.",
        stars: 5,
    },
    {
        name: "Isabella Grant",
        date: "5 days ago",
        text: "Gave a detailing gift package and it was a hit. Car looked immaculate afterward.",
        stars: 5,
    },
    {
        name: "Caleb Norton",
        date: "4 weeks ago",
        text: "Restored the shine to my classic car without overdoing it. Perfect balance.",
        stars: 5,
    },
    {
        name: "Morgan Steele",
        date: "6 days ago",
        text: "Very transparent about the process and pricing. Results were even better than expected.",
        stars: 5,
    },
    {
        name: "Lila Anderson",
        date: "3 weeks ago",
        text: "My minivan had years of kid chaos. Now it looks embarrassingly clean.",
        stars: 5,
    },
    {
        name: "Wyatt Barnes",
        date: "1 week ago",
        text: "Deep polish brought out reflections I haven’t seen since it was new.",
        stars: 5,
    },
    {
        name: "Zoe Carter",
        date: "2 days ago",
        text: "Friendly, efficient, and dialed in every detail. Will definitely book again.",
        stars: 5,
    },
];

export default function Reviews() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [cardWidth, setCardWidth] = useState(0); // Approximate width of one set of cards
    const dragLimit = cardWidth || 600;

    // Controls the horizontal position
    const x = useMotionValue(0);

    // Velocity of the auto-scroll (pixels per frame approximately)
    // Slower speed as requested -> Speed increased to match Showcase (approx 100px/s)
    const speed = 1.5;

    // Measure the content width to know when to wrap
    useEffect(() => {
        if (containerRef.current) {
            // Calculate total width of one set of items
            const scrollWidth = containerRef.current.scrollWidth;
            const singleSetWidth = scrollWidth / 2;
            setCardWidth(singleSetWidth);
            // Start at the negative offset (showing the second set) so we can scroll right
            x.set(-singleSetWidth);
        }
    }, [x]);

    useAnimationFrame(() => {
        if (!isDragging && cardWidth > 0) {
            // Move Right: Increment x
            let newX = x.get() + speed;

            // Infinite loop logic (Right direction):
            // If we've reached 0 (start of first set), jump back to -cardWidth (start of second set)
            if (newX >= 0) {
                newX = -cardWidth;
            }

            x.set(newX);
        }
    });

    const handleDragStart = () => {
        setIsDragging(true);
    };

    const handleDragEnd = () => {
        setIsDragging(false);
    };

    return (
        <section className="py-16 sm:py-24 bg-bg-dark border-y border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 sm:mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                    What Our Customers Are Saying
                </h2>
                <div className="flex items-center justify-center gap-2 text-primary-400">
                    <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-current text-accent-gold" />
                        ))}
                    </div>
                    <span className="text-white font-medium">5.0 on Google Reviews</span>
                </div>
            </div>

            {/* Carousel Container */}
            <div
                className="relative w-full overflow-hidden mask-linear-fade cursor-grab active:cursor-grabbing"
                ref={containerRef}
            >
                {/* Gradient Masks */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 bg-gradient-to-r from-bg-dark to-transparent z-10" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 bg-gradient-to-l from-bg-dark to-transparent z-10" />

                <motion.div
                    className="flex w-max gap-4 sm:gap-6 py-4 px-4 sm:px-6"
                    style={{ x }}
                    drag="x"
                    dragConstraints={{ left: -dragLimit, right: 0 }}
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                    onPointerDown={() => setIsDragging(true)} // Also pause on just click/hold
                    onPointerUp={() => setIsDragging(false)}
                    onPointerLeave={() => setIsDragging(false)}
                    whileTap={{ cursor: "grabbing" }}
                >
                    {/* First Set of Reviews */}
                    {reviews.map((review, index) => (
                        <ReviewCard key={`review-1-${index}`} review={review} />
                    ))}
                    {/* Duplicate Set for Seamless Loop */}
                    {reviews.map((review, index) => (
                        <ReviewCard key={`review-2-${index}`} review={review} />
                    ))}
                </motion.div>
            </div>

            <div className="text-center mt-12 block md:hidden">
                <span className="text-gray-500 text-sm">Valid swiping on mobile enabled</span>
            </div>

            <div className="text-center mt-8 px-4">
                <a
                    href="https://www.google.com/search?q=chandlers+detailing+reviews"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 group text-sm w-full sm:w-auto justify-center"
                >
                    SEE ALL REVIEWS ON GOOGLE
                </a>
            </div>
        </section>
    );
}

function ReviewCard({ review }: { review: typeof reviews[0] }) {
    return (
        <div className="w-[260px] sm:w-[340px] md:w-[380px] flex-shrink-0 bg-bg-card border border-white/10 rounded-2xl p-5 sm:p-6 shadow-lg hover:border-primary-500/30 transition-colors relative flex flex-col justify-between min-h-[260px] select-none">

            {/* Header */}
            <div className="flex justify-between items-start mb-4">
                <div className="flex gap-1">
                    {[...Array(review.stars)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current text-gray-900 fill-gray-900 dark:text-white dark:fill-white" />
                    ))}
                </div>
                <span className="text-xs text-gray-500 font-medium">{review.date}</span>
            </div>

            {/* Content */}
            <div className="flex-grow">
                <h3 className="font-heading font-bold text-xl text-white mb-2">
                    {review.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-4">
                    &ldquo;{review.text}&rdquo;
                </p>
            </div>

            {/* Footer */}
            <div className="mt-4 pt-4 border-t border-white/5">
                <span className="text-xs text-gray-500 font-medium">Posted on Google</span>
            </div>
        </div>
    );
}
