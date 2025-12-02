"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  label: string;
  variant?: "desktop" | "mobile";
  scrolled?: boolean;
  isHeroDark?: boolean; // CRÍTICO: saber se o hero tem fundo escuro
  className?: string;
}

export function NavLink({ 
  href, 
  label, 
  variant = "desktop",
  scrolled = false, 
  isHeroDark = true, // Padrão seguro: assume hero escuro
  className 
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(href + "/");

  // CORES BASE BASEADAS NO CONTEXTO
  const getBaseColors = () => {
    // Se navbar sólida (scrolled)
    if (scrolled) {
      return {
        text: isActive ? "text-[#1F1F1F]" : "text-[#1F1F1F]/70",
        hover: "hover:text-[#1F1F1F]",
        underline: isActive ? "after:bg-[#C2A878]" : "after:hover:bg-[#C2A878]/60"
      };
    }
    
    // Se navbar transparente SOBRE HERO ESCURO
    if (isHeroDark) {
      return {
        text: isActive ? "text-white" : "text-white/85",
        hover: "hover:text-white",
        underline: isActive ? "after:bg-white/90" : "after:hover:bg-white/70"
      };
    }
    
    // Se navbar transparente SOBRE HERO CLARO (CASO MAIS PERIGOSO)
    return {
      text: isActive ? "text-[#5A3E36]" : "text-[#1F1F1F]/80", // Chocolate para contraste
      hover: "hover:text-[#5A3E36]",
      underline: isActive ? "after:bg-[#C2A878]" : "after:hover:bg-[#C2A878]/60"
    };
  };

  const colors = getBaseColors();

  return (
    <Link
      href={href}
      className={cn(
        // Estilos base responsivos
        variant === "desktop" && "text-[15px] font-normal relative",
        variant === "mobile" && "text-[17px] font-normal py-3 border-b border-[#EFE9E4]/50 last:border-0",
        
        // Cores dinâmicas
        colors.text,
        colors.hover,
        
        // Animações apenas no desktop
        variant === "desktop" && cn(
          "transition-colors duration-300",
          "after:absolute after:-bottom-1.5 after:left-0 after:h-px",
          "after:w-0 after:transition-all after:duration-500",
          isActive && "after:w-full",
          !isActive && "hover:after:w-full",
          colors.underline
        ),
        
        // Sombras apenas quando necessário (hero escuro)
        !scrolled && isHeroDark && "drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]",
        
        className
      )}
    >
      {label}
    </Link>
  );
}