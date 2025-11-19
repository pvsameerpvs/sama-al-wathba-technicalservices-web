"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { projects, type Project } from "@/app/lib/projects";
import { cn } from "@/components/ui/utils";

function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: (project: Project) => void;
}) {
  const mainImage = project.images[0];

  return (
    <button
      type="button"
      onClick={() => onClick(project)}
      className="text-left"
    >
      <Card className="h-full overflow-hidden border-slate-200/80 bg-white/90 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg">
        <div className="relative h-44 w-full overflow-hidden">
          <Image
            src={mainImage}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
          <div className="absolute left-3 right-3 bottom-3 space-y-1">
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-200">
              Completed Project
            </p>
            <h3 className="text-sm md:text-base font-semibold text-white">
              {project.title}
            </h3>
          </div>
        </div>
        <CardContent className="space-y-3 py-4">
          <p className="text-sm text-slate-600 line-clamp-3">
            {project.description}
          </p>
          <p className="text-xs font-semibold text-brand-blue">
            Click to view photos &amp; details
          </p>
        </CardContent>
      </Card>
    </button>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!project) return null;

  const images = project.images;
  const activeImage = images[activeIndex];

  const handlePrev = () =>
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  const handleNext = () => setActiveIndex((prev) => (prev + 1) % images.length);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm px-4"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-slate-700 shadow hover:bg-white"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Gallery */}
        <div className="border-b border-slate-200 bg-slate-950/90">
          <div className="relative h-72 w-full overflow-hidden">
            <Image
              src={activeImage}
              alt={project.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
            <div className="absolute left-5 right-5 bottom-4 space-y-2">
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-200">
                Project Reference
              </p>
              <h2 className="text-lg md:text-2xl font-semibold text-white">
                {project.title}
              </h2>
              {project.location && (
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <MapPin className="h-3 w-3" />
                  <span>{project.location}</span>
                </div>
              )}
            </div>

            {/* Nav arrows */}
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/85 p-2 text-slate-700 shadow hover:bg-white"
              aria-label="Previous photo"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/85 p-2 text-slate-700 shadow hover:bg-white"
              aria-label="Next photo"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2 px-4 pb-4 pt-3">
            {images.map((img, idx) => (
              <button
                key={img}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={cn(
                  "relative h-16 flex-1 overflow-hidden rounded-xl border transition",
                  idx === activeIndex
                    ? "border-brand-blue"
                    : "border-transparent opacity-70 hover:opacity-100"
                )}
              >
                <Image src={img} alt="" fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Text content */}
        <div className="grid gap-6 p-6 md:grid-cols-[1.6fr_minmax(0,1.1fr)]">
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-900">
              Project Overview
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="space-y-4">
            {project.scope && (
              <div>
                <h4 className="mb-1 text-sm font-semibold text-slate-900">
                  Scope of Works
                </h4>
                <p className="text-sm text-slate-700">{project.scope}</p>
              </div>
            )}

            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 text-xs text-slate-600 space-y-2">
              <p className="text-sm font-semibold text-slate-900">
                Planning a similar project?
              </p>
              <p>
                Share your requirements with our team and we will propose a
                tailored fit-out and technical services solution based on your
                budget and timeline.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <Button
                  size="sm"
                  className="rounded-full bg-gradient-to-r from-brand-yellow via-brand-green to-brand-blue text-slate-900"
                >
                  Request a Quote
                </Button>
                <Button size="sm" variant="outline" className="rounded-full">
                  View All Services
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* bottom gradient bar */}
        <div className="h-1 w-full bg-gradient-to-r from-brand-yellow via-brand-green to-brand-blue" />
      </div>
    </div>
  );
}

export function ProjectsGrid() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <>
      <section className="relative section space-y-8 overflow-hidden">
        {/* Background blobs like Services section */}
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
          <p className="section-subtitle">Projects</p>
          <h1 className="section-title">Selected References</h1>
          <p className="text-slate-600">
            A snapshot of some of our completed interior fit-out, refurbishment,
            and technical services projects across Dubai and the UAE.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 relative">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={setActiveProject}
            />
          ))}
        </div>
      </section>

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </>
  );
}
