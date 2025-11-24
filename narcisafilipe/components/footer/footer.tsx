"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-gray-100 dark:bg-black border-t border-gray-300/30 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid md:grid-cols-4 gap-12">

        {/* BRAND */}
        <div>
          <h3 className="text-xl font-semibold">Narcisa Filipe</h3>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Terapia capilar profissional focada em diagnóstico, tratamento e recuperação da saúde do couro cabeludo e do cabelo.
          </p>
        </div>

        {/* CONTACTOS */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">Contactos</h4>

          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-primary" />
              <a href="tel:+244000000000" className="hover:text-primary transition">
                +244 000 000 000
              </a>
            </li>

            <li className="flex items-center gap-3">
              <Mail size={16} className="text-primary" />
              <a href="mailto:contacto@narcisafilipe.com" className="hover:text-primary transition">
                contacto@narcisafilipe.com
              </a>
            </li>

            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-primary mt-0.5" />
              <span>
                Clínica de Terapia Capilar  
                <br /> Luanda, Angola
              </span>
            </li>
          </ul>
        </div>

        {/* HORÁRIO */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">Horário</h4>

          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-3">
              <Clock size={16} className="text-primary" />
              Segunda a Sexta — 09h às 18h
            </li>
            <li className="flex items-center gap-3 ml-6">
              Sábado — 09h às 14h
            </li>
            <li className="ml-6">
              <span className="text-primary font-medium">Domingo — Fechado</span>
            </li>
          </ul>
        </div>

        {/* LINKS RÁPIDOS */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">Links Rápidos</h4>

          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>
              <Link href="/#tratamentos" className="hover:text-primary transition">
                Tratamentos
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="hover:text-primary transition">
                Contacto
              </Link>
            </li>
            <li>
              <Link href="/agendar" className="hover:text-primary transition">
                Agendar Consulta
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-primary transition">
                Blog
              </Link>
            </li>
          </ul>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://instagram.com/"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition"
            >
              <Instagram size={22} />
            </a>

            <a
              href="https://facebook.com/"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition"
            >
              <Facebook size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-300/30 dark:border-white/10 py-6">
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Narcisa Filipe — Todos os direitos reservados.  
          Desenvolvido por <a href="https://www.utsupra.agency/" className="text-primary font-medium hover:underline" target="_blank">Utsupra</a>.
        </p>
      </div>
    </footer>
  );
}
