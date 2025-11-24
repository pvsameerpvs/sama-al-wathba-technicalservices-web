import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  PhoneCall,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-16 border-t border-brand-blue/25 bg-slate-950 text-slate-100">
      {/* Background image + overlays */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/95 to-slate-900/80" />
        {/* Brand color blob */}
        <div
          className="absolute -top-24 left-1/3 h-[420px] w-[420px] 
          rounded-full blur-[160px] opacity-35 
          bg-gradient-to-br from-brand-yellow via-brand-green to-brand-blue"
        />
      </div>

      <div className="section py-10 md:py-14 space-y-10">
        {/* Top grid */}
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))]">
          {/* Brand / intro */}
          <div className="space-y-4">
            <Link href="/" className="flex flex-1 min-w-0 items-center">
              <div
                className="relative 
      h-20 w-56          /* mobile bigger */
      sm:h-24 sm:w-64    /* tablet bigger */
      md:h-24 md:w-60    /* desktop same */
    "
              >
                <Image
                  src="/logo-primary-footer.png"
                  alt="Sama Al Wathba logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            <p className="max-w-md text-sm text-slate-300">
              Interior fit-out, technical services and facility maintenance
              provider based in Dubai, serving commercial, retail, hospitality
              and residential projects across the UAE.
            </p>

            <div className="flex flex-wrap gap-2 text-[11px] font-semibold text-slate-200">
              <span className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-brand-blue/40">
                Interior Fit-Out
              </span>
              <span className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-brand-blue/40">
                Facility Management
              </span>
              <span className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-brand-blue/40">
                Technical Services
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white">Quick Links</h3>
            <ul className="space-y-1.5 text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-brand-yellow transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-brand-yellow transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-brand-yellow transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-brand-yellow transition"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/hse"
                  className="hover:text-brand-yellow transition"
                >
                  HSE
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-brand-yellow transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services list */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white">Key Services</h3>
            <ul className="space-y-1.5 text-sm text-slate-300">
              <li>Interior fit-out & joinery works</li>
              <li>MEP & technical services</li>
              <li>Facility maintenance & repairs</li>
              <li>Ceilings, partitions & flooring</li>
              <li>Access control & automatic doors</li>
            </ul>
          </div>

          {/* Contact + social */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white">Contact</h3>
            <div className="space-y-2 text-sm text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-brand-yellow" />
                <span>
                  E901-44 IRIS Tower Bay Center
                  <br />
                  Dubai, United Arab Emirates
                </span>
              </p>
              <p className="flex items-center gap-2">
                <PhoneCall className="h-4 w-4 text-brand-green" />
                <span>+971 504008440 / +971 569014678</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand-blue" />
                <Link
                  href="mailto:lg.samaalwathbi@hotmail.com"
                  className="hover:text-brand-yellow underline underline-offset-2"
                >
                 info@samaalwathba.com
                </Link>
              </p>
            </div>

            <div className="pt-2">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                Follow Us
              </p>
              <div className="mt-2 flex items-center gap-3">
                <Link
                  href="#"
                  aria-label="Facebook"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-slate-100 ring-1 ring-white/10 hover:bg-brand-blue hover:ring-brand-blue/60 transition"
                >
                  <Facebook className="h-4 w-4" />
                </Link>
                <Link
                  href="#"
                  aria-label="Instagram"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-slate-100 ring-1 ring-white/10 hover:bg-brand-yellow hover:text-slate-900 hover:ring-brand-yellow/60 transition"
                >
                  <Instagram className="h-4 w-4" />
                </Link>
                <Link
                  href="#"
                  aria-label="LinkedIn"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-slate-100 ring-1 ring-white/10 hover:bg-brand-green hover:text-slate-900 hover:ring-brand-green/60 transition"
                >
                  <Linkedin className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
