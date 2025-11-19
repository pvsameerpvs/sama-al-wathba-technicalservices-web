"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Service } from "@/app/lib/services";

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
}

export function ServiceModal({ service, onClose }: ServiceModalProps) {
  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm px-4"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full rounded-3xl bg-white shadow-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top image */}
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={service.image}
            alt={service.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
          <div className="absolute left-5 right-14 bottom-4 space-y-1">
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-200">
              {service.category}
            </p>
            <h2 className="text-lg md:text-2xl font-semibold text-white">
              {service.name}
            </h2>
          </div>

          {/* Close */}
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-slate-700 shadow hover:bg-white"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Body */}
        <div className="grid gap-6 p-6 md:grid-cols-[1.6fr_minmax(0,1.1fr)]">
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-900">
              About this service
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              {service.long}
            </p>
          </div>

          <div className="space-y-4">
            {service.highlights && (
              <div>
                <h4 className="text-sm font-semibold text-slate-900 mb-2">
                  Key highlights
                </h4>
                <ul className="space-y-1.5 text-sm text-slate-700">
                  {service.highlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-blue" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 space-y-2 text-xs text-slate-600">
              <p className="font-semibold text-slate-900 text-sm">
                Looking for this service?
              </p>
              <p>
                Share your project requirements with us and our team will
                recommend the right scope, timeline and approach.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <Button
                  size="sm"
                  className="rounded-full bg-brand-gradient text-slate-900"
                >
                  Request a Quote
                </Button>
                <Button size="sm" variant="outline" className="rounded-full">
                  Call Us
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient accent */}
        <div className="h-1 w-full bg-gradient-to-r from-brand-yellow via-brand-green to-brand-blue" />
      </div>
    </div>
  );
}
