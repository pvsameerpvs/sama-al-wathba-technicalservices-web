"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Service } from "@/app/lib/services";

interface ServiceCardProps {
  service: Service;
  onClick: (service: Service) => void;
}

export function ServiceCard({ service, onClick }: ServiceCardProps) {
  return (
    <button
      type="button"
      className="text-left"
      onClick={() => onClick(service)}
    >
      <Card className="h-full overflow-hidden border-slate-200/80 bg-white/80 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg">
        <div className="relative h-40 w-full overflow-hidden">
          <Image
            src={service.image}
            alt={service.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
          <div className="absolute left-3 right-3 bottom-3">
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-200">
              {service.category}
            </p>
            <h3 className="text-sm md:text-base font-semibold text-white">
              {service.name}
            </h3>
          </div>
        </div>
        <CardContent className="space-y-3 py-4">
          <p className="text-sm text-slate-600">{service.short}</p>
          <p className="text-xs font-semibold text-brand-blue">
            Click to view more details
          </p>
        </CardContent>
      </Card>
    </button>
  );
}
