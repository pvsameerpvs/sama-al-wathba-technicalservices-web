"use client";

import Image from "next/image";
import { CheckCircle2, ShieldCheck, Clock3, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/components/ui/utils";

const reasons = [
  {
    title: "Experienced Professionals",
    icon: CheckCircle2,
    text: "A core team with years of experience in interior fit-out, MEP and facility management across Dubai and the UAE.",
  },
  {
    title: "Quality & Safety First",
    icon: ShieldCheck,
    text: "Strong HSE culture and a clear quality control program to deliver safe, compliant and high–quality projects.",
  },
  {
    title: "On-Time Delivery",
    icon: Clock3,
    text: "We balance cost, quality and time, with clear schedules, monitoring and reporting for every project.",
  },
  {
    title: "End-to-End Solutions",
    icon: Wrench,
    text: "From design coordination to fit-out, maintenance and access control, we provide a single point of responsibility.",
  },
];

interface WhyChooseUsSectionProps {
  className?: string;
}

export function WhyChooseUsSection({ className }: WhyChooseUsSectionProps) {
  return (
    <section className={cn("section", className)}>
      <div className="grid gap-10 items-center lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)]">
        {/* Left side – image */}
        <div className="relative h-72 w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-900/80 shadow-lg">
          <Image
            src="/project team.jpeg" // put your best team / project image in public/why-choose-us.jpg
            alt="Sama Al Wathba project team"
            fill
            className="object-cover object-center"
          />
          {/* light gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-yellow/20 via-brand-green/10 to-brand-blue/30" />
          {/* bottom gradient strip */}
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-brand-yellow via-brand-green to-brand-blue" />
          {/* small badge */}
          <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900 shadow">
            Why Choose Us
          </div>
        </div>

        {/* Right side – text + cards */}
        <div className="space-y-7">
          <header className="space-y-3">
            <p className="section-subtitle">Why Choose Us</p>
            <h2 className="section-title">
              Trusted Technical Partner for Your Spaces
            </h2>
            <p className="text-sm md:text-base text-slate-600">
              Sama Al Wathba Technical Services L.L.C is built on trust, passion
              and reliability. We combine disciplined project management, strong
              HSE practices and skilled teams to deliver fit-out and technical
              services that meet your standards and exceed expectations.
            </p>
          </header>

          <div className="grid gap-4 md:grid-cols-2">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <Card
                  key={reason.title}
                  className="border-slate-200/80 bg-white/85 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow"
                >
                  <CardHeader className="flex flex-row items-center gap-3 pb-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-brand-yellow/80 via-brand-green/70 to-brand-blue/80 text-slate-900 shadow-sm">
                      <Icon className="h-4 w-4" />
                    </div>
                    <CardTitle className="text-sm md:text-[15px]">
                      {reason.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs md:text-sm text-slate-600">
                      {reason.text}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
