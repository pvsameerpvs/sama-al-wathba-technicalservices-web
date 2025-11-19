"use client";

import { Mail, Phone, MapPin, Building2 } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="relative section space-y-10 overflow-hidden">
      {/* Gradient background blobs */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-[480px] w-[480px]
        -translate-x-1/2 rounded-full blur-[150px] opacity-30
        bg-gradient-to-br from-brand-yellow via-brand-green to-brand-blue"
      />
      <div
        className="pointer-events-none absolute top-1/2 right-0 h-[350px] w-[350px]
        -translate-y-1/2 blur-[160px] opacity-20
        bg-gradient-to-tr from-brand-blue via-brand-green to-brand-yellow"
      />

      {/* Header */}
      <header className="relative max-w-2xl space-y-3">
        <p className="section-subtitle">Contact</p>
        <h1 className="section-title">Let&apos;s Discuss Your Project</h1>
        <p className="text-slate-600">
          Share your requirements for interior fit-out, technical services, or
          facility management and our team will get back to you as soon as
          possible.
        </p>
      </header>

      {/* Layout */}
      <div className="relative grid gap-10 md:grid-cols-[minmax(0,1.8fr)_minmax(0,1.2fr)]">
        {/* FORM CARD */}
        <form
          className="rounded-3xl border border-slate-200/70 bg-white/90
          shadow-lg backdrop-blur-sm p-8 space-y-6"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">
                Name
              </label>
              <input
                type="text"
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm
                bg-white outline-none focus:ring-2 focus:ring-brand-blue"
                placeholder="Your full name"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">
                Company
              </label>
              <input
                type="text"
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm
                bg-white outline-none focus:ring-2 focus:ring-brand-blue"
                placeholder="Company name"
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">
                Email
              </label>
              <input
                type="email"
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm
                bg-white outline-none focus:ring-2 focus:ring-brand-blue"
                placeholder="name@example.com"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">
                Mobile
              </label>
              <input
                type="tel"
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm
                bg-white outline-none focus:ring-2 focus:ring-brand-blue"
                placeholder="+971 ..."
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">
              Service Required
            </label>
            <select
              className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm
              bg-white outline-none focus:ring-2 focus:ring-brand-blue"
            >
              <option>Interior Fit-Out</option>
              <option>Facility Management</option>
              <option>Maintenance</option>
              <option>Access Control / Automation</option>
              <option>Other</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">
              Project Details
            </label>
            <textarea
              rows={4}
              className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm
              bg-white outline-none focus:ring-2 focus:ring-brand-blue"
              placeholder="Tell us briefly about your project, location, and timeline."
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full
            bg-gradient-to-r from-brand-yellow via-brand-green to-brand-blue
            px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-md
            hover:brightness-105 transition"
          >
            Submit Enquiry
          </button>

          <p className="text-xs text-slate-500 text-center">
            By submitting this form you agree to be contacted by Sama Al Wathba
            Technical Services L.L.C regarding your enquiry.
          </p>
        </form>

        {/* CONTACT INFO CARD */}
        <aside className="relative space-y-6">
          {/* Address */}
          <div
            className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-md
            backdrop-blur-sm space-y-3"
          >
            <h2 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
              <MapPin className="h-4 w-4 text-brand-blue" />
              Office Address
            </h2>
            <p className="text-sm text-slate-700">PO Box 2821</p>
            <p className="text-sm text-slate-700">Empire Heights Tower</p>
            <p className="text-sm text-slate-700">Business Bay, Dubai, UAE</p>
          </div>

          {/* Contact */}
          <div
            className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-md
            backdrop-blur-sm space-y-3"
          >
            <h2 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
              <Phone className="h-4 w-4 text-brand-blue" />
              Contact Details
            </h2>
            <p className="text-sm">Mob: +971 55 433 8371</p>
            <p className="text-sm">Mob: +971 56 897 1268</p>

            <h2 className="text-sm font-semibold mt-4 text-slate-900 flex items-center gap-2">
              <Mail className="h-4 w-4 text-brand-blue" />
              Email
            </h2>
            <p className="text-sm">lg.samaalwathbi@hotmail.com</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
