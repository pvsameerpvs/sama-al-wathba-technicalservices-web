"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const slides = [
  {
    title: "Interior Fit-Out & Technical Services",
    subtitle:
      "Complete turnkey solutions for offices, clinics, retail, and hospitality spaces across the UAE.",
    image: "/tank-2.png",
  },
  {
    title: "Facility Management & Maintenance",
    subtitle:
      "Reliable, responsive teams to keep your assets safe, efficient, and always presentable.",
    image: "/landscapping.jpg",
  },
  {
    title: "Smart Access & Automation",
    subtitle:
      "Automatic doors, access control, and hotel smart locks tailored for modern properties.",

    image: "/smart2.JPG",
  },
];

export function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((prev) => (prev + 1) % slides.length),
      7000
    );
    return () => clearInterval(id);
  }, []);

  const slide = slides[active];

  return (
    <section
      className="
        relative 
        min-h-[calc(100vh-80px)]  /* header ~80px (h-20) */
        w-full 
        overflow-hidden 
        bg-slate-950 
        text-slate-50 
        flex 
        items-stretch
      "
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={slide.image}
          alt={slide.title}
          fill
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/40" />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10 lg:gap-12 lg:flex-row lg:items-center py-14 sm:py-16 lg:py-20">
        {/* Left Side Text */}
        <div className="max-w-xl space-y-6">
          <p className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[10px] sm:text-xs font-medium uppercase tracking-[0.25em] text-brand-yellow ring-1 ring-white/15 backdrop-blur">
            Building spaces that work
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold tracking-tight">
            Sama Al Wathba Technical Services L.L.C
          </h1>

          <p className="text-sm sm:text-base text-slate-200">
            Established by experienced professionals in interior fit-out,
            technical services, and facility management — delivering
            high-quality projects across the UAE.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#0054A6] via-[#1E6CCD] to-[#69A3FF] hover:brightness-110 text-white font-semibold rounded-full"
            >
              <Link href="/contact">Talk to Our Team</Link>
            </Button>

            <Button asChild size="lg" variant="outline">
              <Link href="/projects">View Our Projects</Link>
            </Button>
          </div>

          <div className="flex flex-wrap gap-4 sm:gap-6 pt-4 text-xs sm:text-sm text-slate-300">
            <div>
              <p className="font-semibold text-brand-yellow">Fit-Out</p>
              <p>Offices, clinics, hospitality, retail</p>
            </div>
            <div>
              <p className="font-semibold text-brand-yellow">24/7 Support</p>
              <p>Maintenance services</p>
            </div>
            <div>
              <p className="font-semibold text-brand-yellow">UAE Wide</p>
              <p>Dubai and all Emirates</p>
            </div>
          </div>
        </div>

        {/* Right side Slider Card */}
        <div className="relative w-full max-w-md lg:ml-auto rounded-2xl bg-white/5 p-4 sm:p-5 ring-1 ring-white/10 backdrop-blur">
          <div className="mb-4 flex items-center justify-between text-[10px] sm:text-xs uppercase tracking-[0.25em] text-slate-300">
            <span className="line-clamp-1">{slide.title}</span>
            <span>{String(active + 1).padStart(2, "0")}</span>
          </div>

          <div className="relative h-56 sm:h-64 overflow-hidden rounded-xl border border-white/15">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
            />
          </div>

          <p className="mt-4 text-xs sm:text-sm text-slate-200">
            {slide.subtitle}
          </p>

          <div className="mt-4 flex justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setActive(i)}
                className={`h-2 w-6 rounded-full transition-all ${
                  i === active ? "bg-[#0054A6]" : "bg-white/25"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
