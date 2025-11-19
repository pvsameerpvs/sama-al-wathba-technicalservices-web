"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/components/ui/utils";

interface SectionWithCardsProps {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  reverse?: boolean;
  columns?: number; // card layout columns
  features: {
    title?: string;
    description?: string;
    list?: string[];
  }[];
  showButtons?: boolean;
}

export function SectionWithCards({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  reverse,
  columns = 3,
  features,
  showButtons = true,
}: SectionWithCardsProps) {
  return (
    <section className="section space-y-10">
      {/* Header */}
      <header className="max-w-3xl space-y-3">
        <p className="section-subtitle">{eyebrow}</p>
        <h2 className="section-title">{title}</h2>
        <p className="text-slate-600 text-sm md:text-base">{description}</p>
      </header>

      {/* Image + Cards */}
      <div
        className={cn(
          "grid gap-10 items-start lg:grid-cols-[1fr_1.2fr]",
          reverse && "lg:grid-cols-[1.2fr_1fr]"
        )}
      >
        {/* Image */}
        {imageSrc && (
          <div
            className={cn(
              "relative h-72 w-full overflow-hidden rounded-3xl border border-slate-200 shadow bg-slate-900/60",
              "before:absolute before:inset-0 before:bg-gradient-to-tr before:from-brand-yellow/15 before:via-brand-green/10 before:to-brand-blue/15",
              reverse && "order-last lg:order-first"
            )}
          >
            <Image
              src={imageSrc}
              alt={imageAlt || title}
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-brand-yellow via-brand-green to-brand-blue" />
          </div>
        )}

        {/* Cards Area */}
        <div className={cn(`grid gap-6 md:grid-cols-${columns}`)}>
          {features.map((feature, i) => (
            <Card key={i} className="bg-white/80 backdrop-blur shadow-sm">
              <CardHeader>
                {feature.title && (
                  <CardTitle className="text-sm md:text-base">
                    {feature.title}
                  </CardTitle>
                )}
              </CardHeader>
              <CardContent className="text-sm text-slate-700 space-y-2">
                {feature.description && <p>{feature.description}</p>}

                {feature.list && (
                  <ul className="space-y-2">
                    {feature.list.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-blue" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Buttons */}
      {showButtons && (
        <div className="flex flex-wrap gap-3">
          <Button size="lg">Request a Quote</Button>
          <Button size="lg" variant="outline">
            View Projects
          </Button>
        </div>
      )}
    </section>
  );
}
