"use client";

import { useState } from "react";
import { services, type Service } from "@/app/lib/services";
import { ServiceCard } from "./service-card";
import { ServiceModal } from "./service-modal";

export function ServicesGrid() {
  const [activeService, setActiveService] = useState<Service | null>(null);

  return (
    <>
      <section className="relative section">
        {/* === BACKGROUND BLOBS === */}
        <div
          className="pointer-events-none absolute -top-10 left-1/2 h-[430px] w-[430px] 
          -translate-x-1/2 rounded-full blur-[130px] opacity-25 
          bg-gradient-to-br from-brand-yellow via-brand-green to-brand-blue"
        />

        <div
          className="pointer-events-none absolute top-1/2 right-0 h-[350px] w-[350px] 
          translate-y-[-40%] blur-[160px] opacity-20 
          bg-gradient-to-tr from-brand-blue via-brand-green to-brand-yellow"
        />

        <header className="max-w-3xl relative">
          <p className="section-subtitle">Services</p>
          <h1 className="section-title">
            Comprehensive Interior Fit-Out & Technical Services
          </h1>
          <p className="text-slate-600">
            We deliver a full spectrum of interior fit-out, technical services,
            facility maintenance and access control solutions across the United
            Arab Emirates.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 relative">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onClick={setActiveService}
            />
          ))}
        </div>
      </section>

      <ServiceModal
        service={activeService}
        onClose={() => setActiveService(null)}
      />
    </>
  );
}
