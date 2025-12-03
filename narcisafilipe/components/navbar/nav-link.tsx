"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  label: string;
  variant?: "desktop" | "mobile";
  scrolled?: boolean;
  onClick?: () => void;
  className?: string;
}

export function NavLink({
  href,
  label,
  variant = "desktop",
  scrolled = false,
  onClick,
  className
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(href + "/");

  /* -----------------------------
      🔸 MOBILE VERSION — SUPER LEGÍVEL
  ------------------------------ */
  if (variant === "mobile") {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={cn(
          // Base mobile
          "block text-[16px] py-3 px-4 rounded-md font-normal transition-all duration-300",

          // Estado ativo
          isActive
            ? "bg-[#EFE9E4] text-[#1F1F1F] font-medium border-l-4 border-[#C2A878]"
            : "text-[#3A3A3A] hover:text-[#1F1F1F] hover:bg-[#EFE9E4]/40",

          // Interatividade suave
          "hover:pl-5 active:scale-[0.98]",

          className
        )}
        aria-current={isActive ? "page" : undefined}
      >
        {label}
      </Link>
    );
  }

  /* -----------------------------
      🔸 DESKTOP VERSION
  ------------------------------ */
  return (
    <Link
      href={href}
      className={cn(
        "relative text-[15px] font-normal transition-all duration-300",

        scrolled
          ? isActive
            ? "text-[#1F1F1F]"
            : "text-[#1F1F1F]/75 hover:text-[#1F1F1F]"
          : isActive
            ? "text-white"
            : "text-white/90 hover:text-white",

        "after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:w-0 after:transition-all after:duration-500",
        isActive && "after:w-full",
        !isActive && "hover:after:w-full",

        scrolled
          ? "after:bg-[#C2A878]"
          : "after:bg-white/90",

        !scrolled && "drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]",

        className
      )}
      aria-current={isActive ? "page" : undefined}
    >
      {label}
    </Link>
  );
}
