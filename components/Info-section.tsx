"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/components/ui/utils";
import { MissionVisionSection } from "./mission-vision-section";

type Feature = {
  title: string;
  description: string;
};

interface InfoSectionProps {
  eyebrow: string;
  title: string;
  description: string;
  features: Feature[];
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

export function InfoSection({
  eyebrow,
  title,
  description,
  features,
  imageSrc,
  imageAlt,
  reverse,
}: InfoSectionProps) {
  return (
    <section className="relative section ">
      {/* ===== BACKGROUND BLOB (logo gradient) ===== */}
      <div
        className="pointer-events-none absolute -top-10 left-1/2 h-[430px] w-[430px] 
        -translate-x-1/2 rounded-full blur-[130px] opacity-25 
        bg-gradient-to-br from-brand-yellow via-brand-green to-brand-blue"
      />

      {/* Second softer blob */}
      <div
        className="pointer-events-none absolute top-1/2 right-0 h-[350px] w-[350px] 
        translate-y-[-40%] blur-[160px] opacity-20 
        bg-gradient-to-tr from-brand-blue via-brand-green to-brand-yellow"
      />

      {/* Main content */}
      <div
        className={cn(
          "relative grid gap-12 items-center lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)]",
          reverse && "lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.1fr)]"
        )}
      >
        {/* IMAGE SIDE */}
        <div
          className={cn(
            "relative h-80 w-full overflow-hidden rounded-3xl border border-slate-200/70 bg-slate-900/80 shadow-xl",
            "before:absolute before:inset-0 before:bg-gradient-to-br before:from-brand-yellow/25 before:via-brand-green/15 before:to-brand-blue/25 before:backdrop-blur-[1px]",
            reverse && "order-last lg:order-first"
          )}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-brand-yellow via-brand-green to-brand-blue" />
        </div>

        {/* TEXT CONTENT SIDE */}
        <div className="relative space-y-8">
          <header className="space-y-3">
            <p className="section-subtitle">{eyebrow}</p>
            <h2 className="section-title">{title}</h2>
            <p className="text-sm md:text-base text-slate-600">{description}</p>
          </header>

          {/* Feature Cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="border-slate-200/70 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow"
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm md:text-[15px] text-slate-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild size="lg">
              <Link href="/contact">Request a Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-brand-blue/50 text-slate-700"
            >
              <Link href="/projects">View Our Projects</Link>
            </Button>
          </div>
        </div>
      </div>
      <MissionVisionSection />
    </section>
  );
}
