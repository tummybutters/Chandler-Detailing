"use client";

import { Star } from "lucide-react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const reviews = [
    {
        name: "Jordan Raymond",
        date: "2 weeks ago",
        text: "Chandler did amazing work on my truck today. I went with the full detail inside and out, well worth the price.",
        stars: 5,
    },
    {
        name: "Eddy DelPozo",
        date: "2 weeks ago",
        text: "Chandler provided excellent service on my car. I couldn’t be happier with the results!",
        stars: 5,
    },
    {
        name: "Ethan Koers",
        date: "3 days ago",
        text: "Did an amazing job. I have never seen my car this clean, and for such a low price. Found my new mobile detailer!",
        stars: 5,
    },
    {
        name: "Jennifer Hazlett",
        date: "2 weeks ago",
        text: "I had my car detailed by Chandler's detailing and protection and they did an amazing job and added on a protective sealant that has protected my car for about 4 months now.",
        stars: 5,
    },
    {
        name: "Christopher Hazlett",
        date: "2 weeks ago",
        text: "Chandler did an amazing job washing my Volkswagen. Definitely would recommend to my neighbors, friends and family, reasonable price and lovely service.",
        stars: 5,
    },
    {
        name: "Sara Mirabella",
        date: "2 weeks ago",
        text: "Chandler did an amazing job washing my Mercedes E350 definitely going to come back would recommend to anyone and everyone.",
        stars: 5,
    },
    {
        name: "Johnathan Behm",
        date: "4 weeks ago",
        text: "Best detail service I’ve found for a good price. Had a bunch of sand and dirt in my car with stains in my seats. Got them all out very friendly and didn’t take long at all.",
        stars: 5,
    },
    {
        name: "Katie Mirabella",
        date: "2 weeks ago",
        text: "I was really impressed with how amazing my car looked after the detailing because it went in looking pretty rough and came out looking completely refreshed and spotless.",
        stars: 5,
    },
    {
        name: "Margo Hazlett",
        date: "2 weeks ago",
        text: "I needed a detail same day and Chandler was able to deliver. Chandlers detailed my mini van and it looks brand new.",
        stars: 5,
    },
    {
        name: "Emilio Semas",
        date: "1 month ago",
        text: "Excellent service! Communication was great and the finished clean product looked excellent! Very friendly, convenient, thorough and timely service.",
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
                    href="https://share.google/DHt7Lv3NiTWpndep1"
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
