"use client";

import Link from "next/link";
import { NavLink } from "./nav-link";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // CORREÇÃO: Texto da logo sempre legível - assumindo hero tem fundo escuro
  const getLogoColor = () => {
    if (scrolled) return "text-[#1F1F1F]";
    return "text-white"; // ASSUMINDO que hero tem fundo escuro
  };

  // CORREÇÃO: Cores do dropdown trigger
  const getDropdownTriggerColor = () => {
    if (scrolled) return "text-[#1F1F1F] hover:text-[#C2A878]";
    return "text-white hover:text-white/90";
  };

  // CORREÇÃO: Cores do ícone do menu mobile
  const getMenuIconColor = () => {
    if (scrolled) return "text-[#1F1F1F]";
    return "text-white";
  };

  // CORREÇÃO: Botão CTA mais sutil quando não scrolled
  const getButtonStyle = () => {
    if (scrolled) {
      return "bg-[#C2A878] text-white hover:bg-[#B89B6D] shadow-lg";
    }
    return "bg-white/15 backdrop-blur-sm text-white border border-white/30 hover:bg-white/20 hover:border-white/40 shadow-lg";
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-[#F8F7F5]/98 backdrop-blur-md shadow-sm border-b border-[#E5E2DE]"
          : "bg-transparent"
        }`}
    >
      <nav className="flex h-20 items-center justify-between px-6 mx-auto max-w-7xl">
        {/* Logo - CORRIGIDA para usar função */}
        <Link
          href="/"
          className={`text-2xl font-semibold tracking-tighter transition-all duration-300 ${getLogoColor()} ${!scrolled ? "drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]" : ""
            }`}
        >
          NF <span className=" text-[#E8D9C2] mt-2 md:mt-4">
            Studio
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {/* CORREÇÃO: Passar scrolled para NavLink */}
          <NavLink href="/" label="Home" scrolled={scrolled} />

          <DropdownMenu>
            <DropdownMenuTrigger
              className={`group flex items-center gap-1.5 text-base font-medium tracking-tight transition-all duration-300 ${getDropdownTriggerColor()} ${!scrolled ? "drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]" : ""
                }`}
            >
              Serviços
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${scrolled
                    ? "text-[#1F1F1F]/70 group-hover:rotate-180 group-hover:text-[#C2A878]"
                    : "text-white/80 group-hover:rotate-180"
                  }`}
              />
            </DropdownMenuTrigger>

            <DropdownMenuContent
              className="mt-3 min-w-[220px] bg-[#F8F7F5]/98 backdrop-blur-xl border border-[#E5E2DE] rounded-2xl shadow-xl p-2"
            >
              <DropdownMenuItem asChild>
                <Link
                  href="/terapia-capilar"
                  className="rounded-xl px-4 py-3 text-base font-medium text-[#1F1F1F] hover:bg-[#E5E2DE]/50 transition-colors"
                >
                  Terapia Capilar
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/braids"
                  className="rounded-xl px-4 py-3 text-base font-medium text-[#1F1F1F] hover:bg-[#E5E2DE]/50 transition-colors"
                >
                  Braids
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* CORREÇÃO: Passar scrolled para todos NavLinks */}
          <NavLink href="/galeria" label="Galeria" scrolled={scrolled} />
          <NavLink href="/sobre" label="Sobre" scrolled={scrolled} />
        </div>

        {/* CTA Desktop - CORRIGIDO para usar função */}
        <div className="hidden md:flex">
          <Button
            className={`rounded-full px-8 py-6 text-sm font-medium tracking-wide transition-all duration-500 ${getButtonStyle()}`}
          >
            Agendar
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button>
                <Menu
                  className={`w-7 h-7 transition-all duration-300 ${getMenuIconColor()} ${!scrolled ? "drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]" : ""
                    }`}
                />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-[#F8F7F5] border-l border-[#E5E2DE]">
              <div className="flex flex-col gap-8 mt-16 px-6">
                {/* CORREÇÃO: NavLinks no mobile não precisam de scrolled */}
                <NavLink href="/" label="Home" />
                <NavLink href="/terapia-capilar" label="Terapia Capilar" />
                <NavLink href="/braids" label="Braids" />
                <NavLink href="/galeria" label="Galeria" />
                <NavLink href="/sobre" label="Sobre" />
                <Button className="mt-10 rounded-full bg-[#C2A878] hover:bg-[#B89B6D] text-white font-medium py-7">
                  Agendar
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}