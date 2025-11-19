"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/components/ui/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/hse", label: "HSE" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 border-b border-brand-blue/20",
        "bg-[#ECF9FA]/90 backdrop-blur-xl" // <<< LIGHT AQUA COLOR MATCHING YOUR LOGO
      )}
    >
      <div className="relative z-10 mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-11 w-11 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-brand-blue/20">
            <Image
              src="/logo-primary.jpeg"
              alt="Sama Al Wathba logo"
              fill
              className="object-contain p-1.5"
            />
          </div>

          <div className="flex flex-col leading-tight">
            <span className="text-base font-semibold tracking-tight text-slate-900">
              Sama Al Wathba
            </span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-slate-600">
              Technical Services L.L.C
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} className="group relative">
                <span
                  className={cn(
                    "text-[15px] font-semibold tracking-wide transition-colors",
                    active
                      ? "text-brand-blue"
                      : "text-slate-600 group-hover:text-brand-blue"
                  )}
                >
                  {item.label}
                </span>

                <span
                  className={cn(
                    "absolute left-1/2 -translate-x-1/2 mt-1 block h-0.5 w-0 rounded-full",
                    "bg-gradient-to-r from-brand-yellow via-brand-green to-brand-blue",
                    "transition-all duration-300",
                    active && "w-full",
                    !active && "group-hover:w-6"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-2 md:flex">
          <Button
            asChild
            size="sm"
            variant="outline"
            className="rounded-full border-brand-blue/30 bg-white/80 text-xs font-semibold text-brand-blue hover:bg-white"
          >
            <Link href="tel:+971554338371">
              <PhoneCall className="mr-1.5 h-4 w-4" />
              Call Us
            </Link>
          </Button>

          <Button
            asChild
            size="sm"
            className="rounded-full bg-gradient-to-r from-brand-yellow via-brand-green to-brand-blue 
        text-xs font-semibold text-slate-900 shadow hover:brightness-110"
          >
            <Link href="/contact">Request a Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            asChild
            size="sm"
            variant="outline"
            className="rounded-full border-brand-blue/30 bg-white/80 text-[11px] font-semibold text-brand-blue"
          >
            <Link href="tel:+971554338371">
              <PhoneCall className="mr-1.5 h-3.5 w-3.5" />
              Call
            </Link>
          </Button>

          <Button
            size="icon"
            variant="ghost"
            className="rounded-full text-brand-blue"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-brand-blue/20 bg-white/95 backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link key={item.href} href={item.href} className="group py-2">
                  <div className="flex flex-col">
                    <span
                      className={cn(
                        "text-sm font-semibold",
                        active
                          ? "text-brand-blue"
                          : "text-slate-700 group-hover:text-brand-blue"
                      )}
                    >
                      {item.label}
                    </span>
                    <span
                      className={cn(
                        "mt-1 h-0.5 w-0 rounded-full bg-gradient-to-r from-brand-yellow via-brand-green to-brand-blue transition-all",
                        active && "w-16",
                        !active && "group-hover:w-10"
                      )}
                    />
                  </div>
                </Link>
              );
            })}

            <Button
              asChild
              className="mt-2 w-full rounded-full bg-gradient-to-r from-brand-yellow via-brand-green to-brand-blue 
          text-sm font-semibold text-slate-900 shadow hover:brightness-110"
            >
              <Link href="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
