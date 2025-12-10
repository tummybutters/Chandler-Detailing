"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { fadeUpVariants } from "@/lib/animations";

const images = [
    "/images/showcase/car-1.jpg",
    "/images/showcase/car-2.jpg",
    "/images/showcase/car-3.jpg",
    "/images/showcase/car-4.jpg",
    "/images/showcase/car-5.jpg",
    "/images/showcase/car-6.jpg",
    "/images/showcase/car-7.jpg",
];

export default function Showcase() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <section className="py-16 sm:py-24 bg-bg-dark overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12 text-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUpVariants}
                >
                    <span className="text-primary-400 font-medium text-sm uppercase tracking-wider">
                        Our Work
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mt-4 uppercase">
                        Recent Transformations
                    </h2>
                </motion.div>
            </div>

            {/* Desktop Marquee */}
            <div className="relative w-full hidden md:flex">
                <motion.div
                    className="flex gap-8 px-6"
                    animate={prefersReducedMotion ? {} : { x: "-50%" }}
                    transition={
                        prefersReducedMotion
                            ? undefined
                            : {
                                repeat: Infinity,
                                ease: "linear",
                                duration: 30,
                            }
                    }
                    style={{ width: "max-content" }}
                >
                    {/* Double the images to create seamless loop */}
                    {[...images, ...images].map((src, index) => (
                        <div
                            key={index}
                            className="relative w-[300px] md:w-[450px] aspect-[4/3] rounded-2xl overflow-hidden flex-shrink-0 border border-white/10 group"
                        >
                            <Image
                                src={src}
                                alt={`Detailing Showcase ${index + 1}`}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 768px) 300px, 450px"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Mobile Scroll */}
            <div className="md:hidden px-4 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className="relative w-[260px] aspect-[4/3] rounded-2xl overflow-hidden flex-shrink-0 border border-white/10 snap-center"
                    >
                        <Image
                            src={src}
                            alt={`Detailing Showcase ${index + 1}`}
                            fill
                            className="object-cover"
                            sizes="260px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                ))}
            </div>

            {/* Fade edges for smooth look */}
            <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-bg-dark to-transparent z-10 pointer-events-none hidden md:block" />
            <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-bg-dark to-transparent z-10 pointer-events-none hidden md:block" />
        </section>
    );
}
