"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

type Errors = {
  name?: string;
  email?: string;
  mobile?: string;
  details?: string;
};

export default function ContactPage() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [service, setService] = useState("Interior Fit-Out");
  const [details, setDetails] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Errors = {};

    if (!name.trim()) newErrors.name = "Name is required.";
    if (!email.trim()) newErrors.email = "Email is required.";
    if (!mobile.trim()) newErrors.mobile = "Mobile number is required.";
    if (!details.trim()) newErrors.details = "Project details are required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Clear errors if everything is valid
    setErrors({});

    const message = `
New enquiry from website:

Name: ${name}
Company: ${company || "-"}
Email: ${email}
Mobile: ${mobile}
Service Required: ${service}

Project Details:
${details}
    `.trim();

    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/971569014678?text=${encoded}`;

    window.open(url, "_blank");
  };

  return (
    <section className="relative section space-y-10 overflow-hidden">
      {/* Gradient background blobs */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-[480px] w-[480px]
        -translate-x-1/2 rounded-full blur-[150px] opacity-30
        bg-gradient-to-br from-[#0054A6] via-[#1E6CCD] to-[#69A3FF]"
      />
      <div
        className="pointer-events-none absolute top-1/2 right-0 h-[350px] w-[350px]
        -translate-y-1/2 blur-[160px] opacity-20
        bg-gradient-to-tr from-[#69A3FF] via-[#1E6CCD] to-[#0054A6]"
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
          onSubmit={handleSubmit}
          className="rounded-3xl border border-slate-200/70 bg-white/90
          shadow-lg backdrop-blur-sm p-8 space-y-6"
        >
          <div className="grid gap-6 md:grid-cols-2">
            {/* Name */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className={`w-full rounded-xl border px-3 py-2 text-sm bg-white outline-none focus:ring-2 ${
                  errors.name
                    ? "border-red-500 focus:ring-red-500"
                    : "border-slate-300 focus:ring-[#1E6CCD]"
                }`}
                placeholder="Your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && (
                <p className="text-[11px] text-red-500">{errors.name}</p>
              )}
            </div>

            {/* Company */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">
                Company
              </label>
              <input
                type="text"
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm
                bg-white outline-none focus:ring-2 focus:ring-[#1E6CCD]"
                placeholder="Company name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Email */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className={`w-full rounded-xl border px-3 py-2 text-sm bg-white outline-none focus:ring-2 ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "border-slate-300 focus:ring-[#1E6CCD]"
                }`}
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <p className="text-[11px] text-red-500">{errors.email}</p>
              )}
            </div>

            {/* Mobile */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">
                Mobile <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                className={`w-full rounded-xl border px-3 py-2 text-sm bg-white outline-none focus:ring-2 ${
                  errors.mobile
                    ? "border-red-500 focus:ring-red-500"
                    : "border-slate-300 focus:ring-[#1E6CCD]"
                }`}
                placeholder="+971 ..."
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
              {errors.mobile && (
                <p className="text-[11px] text-red-500">{errors.mobile}</p>
              )}
            </div>
          </div>

          {/* Service Required */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">
              Service Required
            </label>
            <select
              className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm
              bg-white outline-none focus:ring-2 focus:ring-[#1E6CCD]"
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              <option>Interior Fit-Out</option>
              <option>Facility Management</option>
              <option>Maintenance</option>
              <option>Access Control / Automation</option>
              <option>Other</option>
            </select>
          </div>

          {/* Project Details */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700">
              Project Details <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={4}
              className={`w-full rounded-xl border px-3 py-2 text-sm bg-white outline-none focus:ring-2 ${
                errors.details
                  ? "border-red-500 focus:ring-red-500"
                  : "border-slate-300 focus:ring-[#1E6CCD]"
              }`}
              placeholder="Tell us briefly about your project, location, and timeline."
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
            {errors.details && (
              <p className="text-[11px] text-red-500">{errors.details}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full
            bg-gradient-to-r from-[#0054A6] via-[#1E6CCD] to-[#69A3FF]
            px-5 py-2.5 text-sm font-semibold text-white shadow-md
            hover:brightness-110 transition"
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
              <MapPin className="h-4 w-4 text-[#0054A6]" />
              Office Address
            </h2>
            <p className="text-sm text-slate-700">E901-44</p>
            <p className="text-sm text-slate-700">IRIS Tower Bay Center</p>
            <p className="text-sm text-slate-700">
              Dubai, United Arab Emirates
            </p>
          </div>

          {/* Contact */}
          <div
            className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-md
            backdrop-blur-sm space-y-3"
          >
            <h2 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#0054A6]" />
              Contact Details
            </h2>
            <p className="text-sm">Mob: +971 504008440</p>
            <p className="text-sm">Mob: +971 569014678</p>

            <h2 className="text-sm font-semibold mt-4 text-slate-900 flex items-center gap-2">
              <Mail className="h-4 w-4 text-[#0054A6]" />
              Email
            </h2>
            <p className="text-sm">info@samaalwathba.com</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
