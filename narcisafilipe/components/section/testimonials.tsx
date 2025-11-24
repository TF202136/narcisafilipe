"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Ana Silva",
    problem: "Queda intensa por estresse",
    result: "Crescimento visível após 8 semanas",
    text: "A minha queda de cabelo estava a afetar a minha autoestima. A avaliação da Narcisa foi super completa, e o tratamento devolveu não só o meu cabelo — mas também a minha confiança.",
    image: "/vsl-poster.png", // Corrigido: URL local em vez de externa
  },
  {
    name: "Carolina Mendes",
    problem: "Dermatite seborreica",
    result: "Coceira e descamação desapareceram",
    text: "Eu vivia com coceira e descamação. Depois do tratamento, o meu couro cabeludo finalmente está saudável e equilibrado. Recomendo muito!",
    image: "/vsl-poster.png",
  },
  {
    name: "Patrícia Rocha",
    problem: "Cabelo fraco e sem volume",
    result: "Fios mais fortes e densos",
    text: "O acompanhamento foi incrível. Meu cabelo está mais forte, brilhoso e com volume. Nunca tinha visto resultados tão rápidos.",
    image: "/vsl-poster.png", // Corrigido: URL local em vez de externa
  },
];

export function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="w-full py-24 md:py-32 bg-white dark:bg-gray-950" // Melhor contraste para dark mode
      aria-label="Depoimentos de clientes"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        {/* TÍTULO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            O Que as Nossas Clientes{" "}
            <span className="text-primary">Dizem</span>
          </h2>

          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Aqui estão algumas experiências reais de clientes que recuperaram a
            saúde capilar com os tratamentos personalizados.
          </p>
        </motion.div>

        {/* GRID DE DEPOIMENTOS */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name} // Melhor usar name como key
              className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/30 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              {/* IMAGEM */}
              <div className="relative w-16 h-16 mx-auto rounded-full overflow-hidden mb-4 border-2 border-primary/20">
                <Image
                  src={testimonial.image}
                  alt={`Foto de ${testimonial.name}`}
                  fill
                  className="object-cover"
                  sizes="64px"
                  placeholder="blur" // Adiciona blur enquanto carrega
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R" // Blur placeholder
                />
              </div>

              {/* NOME E INFORMAÇÕES */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {testimonial.name}
                </h3>

                <p className="text-sm text-primary font-medium mt-1">
                  {testimonial.problem}
                </p>

                <p className="text-xs text-green-600 dark:text-green-400 font-medium mb-4">
                  ✓ {testimonial.result}
                </p>

                {/* TEXTO DO DEPOIMENTO */}
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed text-left">
                  "{testimonial.text}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTÃO CTA */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link href="/agendar" className="inline-block">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
            >
              Quero Começar o Meu Tratamento
            </Button>
          </Link>
          
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Junte-se a mais de 500 clientes satisfeitas
          </p>
        </motion.div>
      </div>
    </section>
  );
}