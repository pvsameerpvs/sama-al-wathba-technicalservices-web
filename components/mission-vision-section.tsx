"use client";

import Image from "next/image";
import { Target, Leaf, Users, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/components/ui/utils";

export function MissionVisionSection({ className }: { className?: string }) {
  return (
    <section className={cn("section space-y-10", className)}>
      <div className="grid gap-10 items-start md:grid-cols-[minmax(0,1.3fr)_minmax(0,1.1fr)]">
        {/* Left – Mission & Values text */}
        <div className="space-y-8">
          <div>
            <p className="section-subtitle">Mission</p>
            <h2 className="section-title">Mission Statement</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600">
              <li className="flex gap-2">
                <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-brand-blue" />
                <span>
                  Provide our customers a level of unmatched services in the
                  industry with professionalism, sustainability, green
                  technology, and innovation.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-brand-blue" />
                <span>Commit to each project with 100% dedication.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-brand-blue" />
                <span>
                  Create a cooperative atmosphere that reflects a successful,
                  vibrant, and enthusiastic team.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-brand-blue" />
                <span>
                  Strive continuously to improve through our customers&apos;
                  valuable feedback.
                </span>
              </li>
            </ul>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
              <div
                className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-full 
                bg-gradient-to-br from-[#0054A6] via-[#1E6CCD] to-[#69A3FF] 
                text-white shadow-sm"
              >
                <Target className="h-4 w-4" />
              </div>
              <h3 className="text-sm font-semibold text-slate-900">
                Focused Delivery
              </h3>
              <p className="mt-1 text-xs text-slate-600">
                Every project is approached with clear objectives, cost control,
                and time discipline.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
              <div
                className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-full 
                bg-gradient-to-br from-[#0054A6] via-[#1E6CCD] to-[#69A3FF] 
                text-white shadow-sm"
              >
                <Users className="h-4 w-4" />
              </div>
              <h3 className="text-sm font-semibold text-slate-900">
                Strong Partnerships
              </h3>
              <p className="mt-1 text-xs text-slate-600">
                Built on trust, responsiveness, and long-term relationships with
                our clients.
              </p>
            </div>
          </div>

          {/* CTA button under mission cards */}
          <div className="pt-2">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#0054A6] via-[#1E6CCD] to-[#69A3FF] 
                         hover:brightness-110 text-white font-semibold rounded-full shadow-lg"
            >
              <Link href="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>

        {/* Right – Vision, Values + imagery */}
        <div className="space-y-6">
          <div>
            <p className="section-subtitle">Vision &amp; Values</p>
            <h2 className="section-title">Vision Statement</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              To be recognized and respected as one of the premier technical
              services companies in the UAE.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
              <div
                className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-full 
                bg-gradient-to-br from-[#0054A6] via-[#1E6CCD] to-[#69A3FF] 
                text-white shadow-sm"
              >
                <Leaf className="h-4 w-4" />
              </div>

              <h3 className="text-sm font-semibold text-slate-900">We Care</h3>
              <p className="mt-1 text-xs text-slate-600">
                We operate safely and sustainably for our people, our business,
                and the communities we serve.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
              <div
                className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-full 
                bg-gradient-to-br from-[#0054A6] via-[#1E6CCD] to-[#69A3FF] 
                text-white shadow-sm"
              >
                <TrendingUp className="h-4 w-4" />
              </div>
              <h3 className="text-sm font-semibold text-slate-900">
                We Improve
              </h3>
              <p className="mt-1 text-xs text-slate-600">
                We turn ideas and experience into better solutions and service
                for our partners.
              </p>
            </div>
          </div>

          {/* Image collage */}
          <div className="relative mt-4 h-64 w-full">
            {/* Main image */}
            <div className="absolute inset-y-0 right-0 w-[72%] overflow-hidden rounded-3xl border border-slate-200 bg-slate-900/80">
              <Image
                src="/team-work.jpeg"
                alt="Sama Al Wathba team at work"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/60 via-transparent to-slate-900/10" />
            </div>

            {/* Small overlay image */}
            <div className="absolute left-0 bottom-0 h-32 w-40 overflow-hidden rounded-2xl border border-white/70 bg-slate-900 shadow-lg">
              <Image
                src="/Project site.jpeg"
                alt="Project site"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-yellow/20 via-transparent to-brand-blue/20" />
            </div>

            {/* Badge */}
            <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-800 shadow">
              Built on Trust &amp; Quality
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
