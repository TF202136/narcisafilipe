// components/navbar/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { MobileMenu } from "./mobileMenu";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const links = [
    { href: "/", label: "Início" },
    { href: "/about", label: "Sobre" },
    { href: "/treatment", label: "Tratamentos" },
    { href: "/result", label: "Resultados" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contacto" },
  ];

  return (
    <nav className="w-full fixed top-0 z-50 backdrop-blur-lg border-b border-white/10 bg-white/60 dark:bg-black/60">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* LOGO / BRAND */}
        <Link href="/" className="text-xl font-semibold tracking-tight">
          Narcisa Filipe
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CALL TO ACTION */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/booking">
            <Button>Agendar Consulta</Button>
          </Link>


          {/* Theme toggle */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </Button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button className="md:hidden" onClick={() => setOpen(true)}>
          <Menu size={26} />
        </button>
      </div>

      {/* MOBILE MENU */}
      <MobileMenu open={open} onClose={() => setOpen(false)} links={links} />
    </nav>
  );
}
