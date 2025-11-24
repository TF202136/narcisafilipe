// app/contacto/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto | Narcisa Filipe – Terapeuta Capilar",
  description:
    "Entre em contacto com a terapeuta capilar Narcisa Filipe. Informações de telefone, email, localização e horário de atendimento em Luanda.",
};

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">

      {/* HERO INTERNO */}
      <section className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/contact-hero.jpg" // trocar depois por imagem premium
          alt="Entre em contacto com a terapeuta capilar"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-xl">
            Contacto
          </h1>
          <p className="mt-4 text-base md:text-lg text-white/90 max-w-2xl mx-auto">
            Fala connosco para marcações, dúvidas ou informações sobre os tratamentos.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-28 grid md:grid-cols-2 gap-16">

        {/* CONTACT INFO */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Informações de Contacto</h2>

          <ul className="space-y-6 text-lg text-muted-foreground">
            <li className="flex items-center gap-4">
              <Phone className="text-primary" size={22} />
              <a href="tel:+244000000000" className="hover:text-primary transition">
                +244 000 000 000
              </a>
            </li>

            <li className="flex items-center gap-4">
              <Mail className="text-primary" size={22} />
              <a href="mailto:contacto@narcisafilipe.com" className="hover:text-primary transition">
                contacto@narcisafilipe.com
              </a>
            </li>

            <li className="flex items-start gap-4">
              <MapPin className="text-primary mt-1" size={22} />
              <p>
                Clínica de Terapia Capilar  
                <br /> Luanda, Angola
              </p>
            </li>

            <li className="flex items-center gap-4">
              <Instagram className="text-primary" size={22} />
              <a
                href="https://instagram.com/"
                target="_blank"
                className="hover:text-primary transition"
              >
                @narcisafilipe
              </a>
            </li>

            {/* HORÁRIO */}
            <li className="flex items-start gap-4 mt-6">
              <Clock className="text-primary mt-1" size={22} />
              <div>
                <p>Segunda a Sexta — 09h às 18h</p>
                <p>Sábado — 09h às 14h</p>
                <p className="text-primary font-medium">Domingo — Fechado</p>
              </div>
            </li>
          </ul>

          {/* CTA */}
          <div className="mt-10">
            <Link href="/agendar">
              <Button size="lg" className="text-lg px-8 py-6">
                Agendar Avaliação Capilar
              </Button>
            </Link>
          </div>
        </div>

        {/* MAPA GOOGLE */}
        <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.0704015559837!2d13.236!3d-8.838"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
