"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { fadeUpVariants, staggerContainer } from "@/lib/animations";
import { BOOKING_URL, PHONE_LINK, PHONE_NUMBER } from "@/lib/constants";
import {
  Sparkles,
  Star,
  ArrowRight,
  Check,
  Clock,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useState } from "react";
import Reviews from "@/components/home/Reviews";
import Showcase from "@/components/home/Showcase";

// Hero Section
import ShinyButton from "@/components/ui/ShinyButton";

const SHOW_TESTIMONIALS = false;
function Hero() {
  const heroStats = [
    { value: "5.0", label: "Average Rating" },
    { value: "100%", label: "Satisfaction" },
    { value: "800+", label: "Cars Detailed" }
  ];

  return (
    <section className="relative flex min-h-[min(90vh,768px)] items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/newherochandler.png"
          alt="Luxury car by the ocean"
          fill
          priority
          quality={100}
          unoptimized
          sizes="100vw"
          className="object-cover"
        />
        {/* Subtle gradient overlay for text readability - stronger on left */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 sm:pb-40 lg:pb-52">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Side: Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:col-span-9 space-y-6"
          >
            {/* Badge */}
            <motion.div variants={fadeUpVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-sm w-fit">
              <Sparkles className="w-4 h-4 text-primary-300" />
              <span className="text-white text-sm font-medium tracking-wide">Premium Mobile Detailing</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={fadeUpVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight w-full flex flex-col items-start gap-4"
            >
              <span className="font-heading italic bg-gradient-to-r from-primary-300 via-primary-200 to-primary-300 bg-clip-text text-transparent">Your Home on the Road,</span>
              <span className="font-body not-italic uppercase tracking-wide text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light">Detailed Right at Your Door.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.h2
              variants={fadeUpVariants}
              className="text-lg sm:text-xl md:text-2xl text-gray-100 font-medium max-w-2xl leading-relaxed"
            >
              You Spend Hundreds of Hours in Your Car Every Year—Let Us Spend Two Making It Perfect.
            </motion.h2>

            {/* CTAs */}
            <motion.div
              variants={fadeUpVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6"
            >
              <ShinyButton
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 shadow-lg shadow-primary-900/20 w-full sm:w-auto"
              >
                Book Appointment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </ShinyButton>
              <Link
                href="/services"
                className="px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all w-full sm:w-auto text-center"
              >
                View Services
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Floating stats cards */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="w-full px-4 sm:px-6 mt-12 lg:mt-0 lg:absolute lg:left-1/2 lg:bottom-10 lg:-translate-x-1/2"
      >
        <div className="max-w-3xl mx-auto grid grid-cols-1 gap-3 sm:grid-cols-3">
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-black/70 backdrop-blur-xl px-4 py-3 flex flex-col items-center text-center gap-1 text-white shadow-xl shadow-black/40 max-w-[200px] w-full mx-auto"
            >
              <p className="text-2xl md:text-3xl font-heading font-bold text-primary-200">{stat.value}</p>
              <p className="text-[0.65rem] uppercase tracking-[0.25em] text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

    </section>
  );
}

// Services Preview Section
function ServicesPreview() {
  const mainServices = [
    {
      title: "FULL INTERIOR DETAIL",
      description: "Revitalize your vehicle's cabin with our meticulous interior cleaning that eliminates stains, odors, and restores that showroom freshness.",
      image: "/interior-detail.jpg"
    },
    {
      title: "FULL EXTERIOR DETAIL",
      description: "Transform your vehicle's exterior with our premium washing and waxing service that delivers a pristine finish and lasting protection against the elements.",
      image: "/exterior-detail.jpg"
    },
    {
      title: "FULL DETAIL",
      description: "Experience the ultimate in automotive luxury with our comprehensive service that meticulously restores both your vehicle's interior comfort and exterior brilliance.",
      image: "/newherochandler.png"
    }
  ];

  const otherServices = [
    {
      title: "PAINT CORRECTION",
      description: "Elevate your vehicle's appearance with our precision paint correction that eliminates scratches, swirls, and imperfections to reveal a mirror-like, flawless finish.",
      image: "/paint-correction.jpg"
    },
    {
      title: "CERAMIC COATING",
      description: "Invest in your vehicle's longevity with our premium ceramic coating that provides up to 8 years of superior protection while enhancing depth, gloss, and resistance to environmental damage.",
      image: "/ceramic-coating.jpg"
    },
    {
      title: "MAINTENANCE DETAILS",
      description: "Preserve your vehicle's pristine condition with our regular maintenance service that keeps both interior comfort and exterior appearance at their peak between major detailing sessions.",
      image: "/maintenance-detail.jpg"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-bg-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="text-center mb-12 px-2"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white uppercase tracking-wide">
            See All Comprehensive Mobile Detailing Packages
          </h2>
        </motion.div>

        {/* Top Row Cards - Highlighted (Orange in ref, Primary in ours) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 mb-16"
        >
          {mainServices.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUpVariants}
              className="flex flex-col group rounded-2xl overflow-hidden max-w-md w-full mx-auto"
            >
              {/* Image Area */}
              <div className="h-56 sm:h-64 relative overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Content Area - Primary Color Background */}
              <div className="flex-1 bg-primary-600/90 backdrop-blur-sm p-6 sm:p-8 text-center flex flex-col items-center border-t border-white/10">
                <h3 className="text-2xl font-heading font-bold text-white mb-4 uppercase max-w-xs">
                  {service.title}
                </h3>
                <p className="text-white/90 mb-8 text-sm leading-relaxed flex-grow">
                  {service.description}
                </p>

                <div className="w-full h-px bg-white/30 mb-6" />

                <Link
                  href="/services"
                  className="text-white font-bold tracking-widest uppercase text-sm hover:text-white/80 transition-colors inline-flex items-center gap-2"
                >
                  - Learn More -
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>


        {/* Divider / Secondary Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="flex flex-col sm:flex-row items-center gap-4 mb-14"
        >
          <div className="h-px bg-white/10 w-full sm:flex-1 hidden sm:block" />
          <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-white uppercase text-center">
            Our Other Services
          </h3>
          <div className="h-px bg-white/10 w-full sm:flex-1 hidden sm:block" />
        </motion.div>


        {/* Bottom Row Cards - Dark Background */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 mb-16"
        >
          {otherServices.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUpVariants}
              className="flex flex-col group rounded-2xl overflow-hidden border border-white/10 max-w-md w-full mx-auto"
            >
              {/* Image Area */}
              <div className="h-64 relative overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Overlay gradient for bottom cards if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-card to-transparent opacity-60" />
              </div>

              {/* Content Area - Dark Background */}
              <div className="flex-1 bg-bg-card p-6 sm:p-8 text-center flex flex-col items-center">
                <h3 className="text-xl font-heading font-bold text-white mb-4 uppercase tracking-wide max-w-xs">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-8 text-sm leading-relaxed flex-grow">
                  {service.description}
                </p>

                <div className="w-full h-px bg-white/10 mb-6" />

                <Link
                  href="/services"
                  className="text-white font-bold tracking-widest uppercase text-sm hover:text-primary-400 transition-colors inline-flex items-center gap-2"
                >
                  - Learn More -
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="text-center"
        >
          <ShinyButton
            href="/services"
            className="inline-flex items-center gap-2 shadow-lg shadow-primary-900/20 hover:scale-105 transition-transform w-full sm:w-auto justify-center"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </ShinyButton>
        </motion.div>
      </div>
    </section>
  );
}

// Why Choose Us Section
function WhyChooseUs() {
  const benefits = [
    "Mobile Service: We Come to You",
    "Professional-Grade Equipment",
    "Eco-Friendly & Safe Products",
    "Fully Insured & Bonded",
    "Satisfaction Guaranteed",
  ];

  return (
    <section className="py-16 sm:py-24 bg-bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative max-w-xl w-full mx-auto"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary-600/20 to-primary-900/10 glow-blue-lg overflow-hidden relative border border-white/10">
              <Image
                src="/why-choose-us.png"
                alt="Premium detailing service"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover opacity-90"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-primary-500/10 -z-10" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="w-full max-w-xl mx-auto"
          >
            <motion.span
              variants={fadeUpVariants}
              className="text-primary-400 font-medium text-sm uppercase tracking-wider"
            >
              Why Choose Us
            </motion.span>
            <motion.h2
              variants={fadeUpVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mt-4"
            >
              Experience the <span className="text-primary-500">Difference</span>
            </motion.h2>
            <motion.p
              variants={fadeUpVariants}
              className="text-gray-400 text-base sm:text-lg mt-6"
            >
              We bring the car wash to you with professional-grade equipment and premium products. No more waiting in lines or settling for less.
            </motion.p>

            <motion.div variants={fadeUpVariants} className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary-400" />
                  </div>
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUpVariants} className="mt-10">
              <ShinyButton
                href="/about"
                className="inline-flex items-center gap-2 shadow-lg shadow-primary-900/20 w-full sm:w-auto justify-center"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </ShinyButton>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function Testimonials() {
  const testimonials = [
    {
      name: "Michael R.",
      car: "Tesla Model S",
      rating: 5,
      text: "Absolutely incredible service! My car looks better than when I bought it. The attention to detail is unmatched.",
    },
    {
      name: "Sarah L.",
      car: "BMW X5",
      rating: 5,
      text: "So convenient having them come to my office. Professional, thorough, and my car has never been cleaner!",
    },
    {
      name: "David K.",
      car: "Porsche 911",
      rating: 5,
      text: "The ceramic coating they applied is amazing. Water just beads right off. Highly recommend their premium services.",
    },
  ];

  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-16 sm:py-24 bg-bg-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeUpVariants}
            className="text-primary-400 font-medium text-sm uppercase tracking-wider bg-white/5 px-3 py-1 rounded-full border border-white/10"
          >
            Testimonials
          </motion.span>
          <motion.h2
            variants={fadeUpVariants}
            className="text-4xl md:text-5xl font-heading font-bold text-white mt-6"
          >
            What Our Clients Say
          </motion.h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="card p-12 text-center border-white/10 bg-bg-card relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl -z-10" />

            <div className="flex justify-center gap-1 mb-6">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-accent-gold fill-accent-gold" />
              ))}
            </div>

            <p className="text-xl md:text-2xl text-gray-300 italic leading-relaxed font-heading">
              &ldquo;{testimonials[current].text}&rdquo;
            </p>

            <div className="mt-8">
              <p className="text-white font-bold text-lg">{testimonials[current].name}</p>
              <p className="text-primary-400 font-medium">{testimonials[current].car}</p>
            </div>
          </motion.div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-white hover:text-primary-400 hover:border-primary-400/60 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-primary-400 w-6" : "bg-white/30"
                    }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-white hover:text-primary-400 hover:border-primary-400/60 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// CTA Banner Section
function CTABanner() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-500" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeUpVariants}
            className="text-4xl md:text-5xl font-heading font-bold text-white"
          >
            Ready to Experience the Difference?
          </motion.h2>
          <motion.p
            variants={fadeUpVariants}
            className="text-white/80 text-lg sm:text-xl mt-6"
          >
            Book your premium mobile detailing appointment today and see why SoCal trusts us with their vehicles.
          </motion.p>
          <motion.div
            variants={fadeUpVariants}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center justify-center gap-2 hover:bg-accent-offwhite transition-colors group w-full sm:w-auto"
            >
              Book Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={PHONE_LINK}
              className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center justify-center gap-2 hover:bg-white/10 transition-colors w-full sm:w-auto"
            >
              <Clock className="w-5 h-5" />
              {PHONE_NUMBER}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Main Home Page
export default function Home() {
  return (
    <>
      <Hero />
      <Reviews />
      <Showcase />
      <ServicesPreview />
      <WhyChooseUs />
      {SHOW_TESTIMONIALS && <Testimonials />}
      <CTABanner />
    </>
  );
}
