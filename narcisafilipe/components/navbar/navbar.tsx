"use client";

import Link from "next/link";
import { NavLink } from "./nav-link";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoColor = scrolled ? "text-[#1F1F1F]" : "text-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-[#F8F7F5]/95 backdrop-blur-sm border-b border-[#EFE9E4]/50"
          : "bg-transparent"
        }`}
    >
      <nav className="flex h-20 md:h-24 items-center justify-between px-6 md:px-8 mx-auto max-w-7xl">

        {/* LOGO */}
        <Link
          href="/"
          className={`text-2xl font-semibold  md:text-3xl font-light tracking-[-0.02em] transition-all duration-300 ${logoColor} ${!scrolled ? "drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]" : ""
            }`}
        >
          NF <span className="text-[#E8D9C2]">Studio</span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          <NavLink href="/" label="Home" scrolled={scrolled} />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={`group flex items-center gap-1.5 text-[15px] font-normal transition-all duration-300 ${logoColor} hover:text-[#C2A878]`}
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${scrolled
                      ? "text-[#1F1F1F]/60 group-hover:text-[#C2A878] group-hover:rotate-180"
                      : "text-current group-hover:rotate-180"
                    }`}
                />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              className="mt-2 min-w-[200px] bg-white/90 backdrop-blur-sm border border-[#EFE9E4] rounded-lg shadow-[0_8px_32px_rgba(31,31,31,0.08)] p-1.5"
              align="start"
            >
              <DropdownMenuItem asChild>
                <Link
                  href="/hair-therapy"
                  className="w-full rounded-md px-4 py-2.5 text-[14px] text-[#1F1F1F] hover:bg-[#EFE9E4]/50 transition-colors duration-200 block"
                >
                  Hair Therapy
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link
                  href="/braids"
                  className="w-full rounded-md px-4 py-2.5 text-[14px] text-[#1F1F1F] hover:bg-[#EFE9E4]/50 transition-colors duration-200 block"
                >
                  Braids
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <NavLink href="/about" label="About" scrolled={scrolled} />

        </div>

        {/* CTA DESKTOP — MANTIDO 100% IGUAL */}
        <div className="hidden md:flex">
          <Button
            asChild
            className={`
              rounded-full px-7 py-2.5 text-[14px] font-normal
              transition-all duration-500
              ${scrolled
                ? "bg-transparent border border-[#C2A878]/30 text-[#5A3E36] hover:bg-[#C2A878]/5 hover:border-[#C2A878]/50"
                : "bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/15 hover:border-white/30"
              }
            `}
          >
            <Link href="#experience">Explore</Link>
          </Button>
        </div>

        {/* MOBILE MENU */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="p-2 -mr-2" aria-label="Open menu">
                <Menu
                  className={`w-6 h-6 transition-colors duration-300 ${scrolled ? "text-[#1F1F1F]" : "text-white"
                    }`}
                />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[300px] bg-[#F8F7F5] border-l border-[#EFE9E4] p-0"
            >
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

              <div className="flex flex-col h-full">
                <div className="flex-1 pt-20 px-6">
                  <div className="flex flex-col gap-1">

                    <NavLink href="/" label="Home" variant="mobile" onClick={() => setOpen(false)} />

                    <div className="pl-3 py-1 border-l border-[#EFE9E4] ml-3 mt-2 mb-1">
                      <p className="text-[13px] text-[#A8A29E] font-medium mb-2">Services</p>

                      <NavLink
                        href="/hair-therapy"
                        label="Hair Therapy"
                        variant="mobile"
                        onClick={() => setOpen(false)}
                      />

                      <NavLink
                        href="/braids"
                        label="Braids"
                        variant="mobile"
                        onClick={() => setOpen(false)}
                      />
                    </div>


                    <NavLink href="/about" label="About" variant="mobile" onClick={() => setOpen(false)} />

                  </div>
                </div>

                {/* CTA MOBILE */}
                <div className="p-6 border-t border-[#EFE9E4]">
                  <Button
                    asChild
                    className="w-full rounded-full py-3 bg-[#C2A878]/10 border border-[#C2A878]/30 text-[#5A3E36] hover:bg-[#C2A878]/20"
                  >
                    <Link href="#experience" onClick={() => setOpen(false)}>
                      Explore
                    </Link>
                  </Button>
                </div>

              </div>
            </SheetContent>
          </Sheet>
        </div>

      </nav>
    </header>
  );
}
