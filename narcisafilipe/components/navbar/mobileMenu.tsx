// components/navbar/MobileMenu.tsx
"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
}

export function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  const { theme, setTheme } = useTheme();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-lg md:hidden">
      <div className="bg-white dark:bg-black w-3/4 h-full p-6 flex flex-col">
        
        {/* Close button */}
        <button onClick={onClose} className="mb-6">
          <X size={26} />
        </button>

        {/* Links */}
        <nav className="flex flex-col gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="text-lg font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Button className="mt-8">Agendar Consulta</Button>

        {/* Theme Toggle */}
        <Button
          variant="outline"
          className="mt-4"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? "Modo Claro" : "Modo Escuro"}
        </Button>

      </div>
    </div>
  );
}
