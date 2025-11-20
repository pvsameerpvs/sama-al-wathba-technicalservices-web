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

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40",
        "border-b border-[#0054A6]/20",
        "bg-gradient-to-r from-white/95 via-[#F3F6FF]/95 to-[#DCE7FF]/95",
        "backdrop-blur-xl"
      )}
    >
      {/* Top bar */}
      <div className="relative z-10 mx-auto flex h-16 md:h-20 w-full max-w-6xl items-center justify-between gap-3 px-3 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex min-w-0 items-center">
          <div className="relative h-14 w-44 sm:h-16 sm:w-52 md:h-20 md:w-60">
            <Image
              src="/logo-primary.png"
              alt="Sama Al Wathba logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} className="group relative">
                <span
                  className={cn(
                    "text-[14px] xl:text-[15px] font-semibold tracking-wide transition-colors",
                    active
                      ? "text-[#0054A6]"
                      : "text-slate-700 group-hover:text-[#0054A6]"
                  )}
                >
                  {item.label}
                </span>

                <span
                  className={cn(
                    "absolute left-1/2 -translate-x-1/2 mt-1 block h-0.5 w-0 rounded-full",
                    "bg-gradient-to-r from-[#0054A6] via-[#4B7FD1] to-[#79A5F5]",
                    "transition-all duration-300",
                    active && "w-full",
                    !active && "group-hover:w-6"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        {/* Desktop buttons */}
        <div className="hidden items-center gap-2 lg:flex">
          <Button
            asChild
            size="sm"
            variant="outline"
            className="rounded-full border-[#0054A6]/30 bg-white/90 text-xs font-semibold text-[#0054A6] hover:bg-white"
          >
            <Link href="tel:+971554338371">
              <PhoneCall className="mr-1.5 h-4 w-4" />
              Call Us
            </Link>
          </Button>

          <Button
            asChild
            size="sm"
            className="rounded-full bg-gradient-to-r from-[#0054A6] via-[#4B7FD1] to-[#79A5F5]
              text-xs font-semibold text-white shadow hover:brightness-110"
          >
            <Link href="/contact">Request a Quote</Link>
          </Button>
        </div>

        {/* Mobile top-right */}
        <div className="flex items-center gap-2 lg:hidden">
          <Button
            asChild
            size="sm"
            variant="outline"
            className="rounded-full border-[#0054A6]/30 bg-white/90 text-[11px] font-semibold text-[#0054A6]"
          >
            <Link href="tel:+971554338371">
              <PhoneCall className="mr-1.5 h-3.5 w-3.5" />
              Call
            </Link>
          </Button>

          <Button
            size="icon"
            variant="ghost"
            className="rounded-full text-[#0054A6]"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="lg:hidden border-t border-[#0054A6]/20 bg-white/98 backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-3 sm:px-6 py-3">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link key={item.href} href={item.href} className="group py-2">
                  <div className="flex flex-col">
                    <span
                      className={cn(
                        "text-sm sm:text-[15px] font-semibold",
                        active
                          ? "text-[#0054A6]"
                          : "text-slate-700 group-hover:text-[#0054A6]"
                      )}
                    >
                      {item.label}
                    </span>
                    <span
                      className={cn(
                        "mt-1 h-0.5 w-0 rounded-full bg-gradient-to-r from-[#0054A6] via-[#4B7FD1] to-[#79A5F5] transition-all",
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
              className="mt-2 w-full rounded-full bg-gradient-to-r from-[#0054A6] via-[#4B7FD1] to-[#79A5F5]
                text-sm font-semibold text-white shadow hover:brightness-110"
            >
              <Link href="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
