"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Results() {
  const images = [
    {
      before: "/vsl-poster.png",
      after: "/vsl-poster.png",
      description: "Resultados típicos após protocolo de tratamento capilar"
    },
    {
      before: "/vsl-poster.png", 
      after: "/vsl-poster.png",
      description: "Fortalecimento e melhoria da densidade capilar"
    },
    {
      before: "/vsl-poster.png",
      after: "/vsl-poster.png", 
      description: "Redução da queda e melhoria da saúde do couro cabeludo"
    },
  ];

  return (
    <section
      id="resultados"
      className="w-full py-24 md:py-32 bg-gray-50 dark:bg-gray-950"
      aria-label="Resultados de tratamentos capilares - Antes e Depois"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        {/* HEADER COM ANIMAÇÃO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Resultados{" "}
            <span className="text-primary">Antes & Depois</span>
          </h2>

          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Em breve poderás ver aqui resultados reais dos nossos tratamentos: 
            queda de cabelo, dermatites, caspa, fortalecimento, crescimento e 
            recuperação de fios danificados.
          </p>
        </motion.div>

        {/* GRID DE RESULTADOS */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="group rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                delay: index * 0.15, 
                duration: 0.5,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2 }
              }}
            >
              {/* CONTAINER ANTES/DEPOIS */}
              <div className="relative">
                {/* IMAGEM ANTES */}
                <div className="relative w-full h-48 bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={img.before}
                    alt="Condição inicial antes do tratamento capilar"
                    fill
                    className="object-cover blur-sm opacity-70 grayscale"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 bg-gray-900/80 text-white text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm">
                    Antes
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-gray-600 dark:text-gray-400">
                      <div className="text-4xl mb-2">📸</div>
                      <p className="text-sm font-medium">Foto real em breve</p>
                    </div>
                  </div>
                </div>

                {/* SEPARADOR VISUAL */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10">
                  <div className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    VS
                  </div>
                </div>

                {/* IMAGEM DEPOIS */}
                <div className="relative w-full h-48 bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                  <Image
                    src={img.after}
                    alt="Resultado após o tratamento capilar"
                    fill
                    className="object-cover blur-sm opacity-70"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 bg-primary/90 text-white text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm">
                    Depois
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-gray-600 dark:text-gray-400">
                      <div className="text-4xl mb-2">✨</div>
                      <p className="text-sm font-medium">Resultado em breve</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* DESCRIÇÃO */}
              <div className="p-5 bg-white dark:bg-gray-900">
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {img.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* AVISO TEMPORÁRIO */}
        <motion.div
          className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl max-w-2xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-blue-800 dark:text-blue-200 font-medium">
            ⚠️ <strong>Atenção:</strong> Estamos a preparar a galeria com resultados reais. 
            Em breve terás acesso a fotografias autênticas dos nossos tratamentos.
          </p>
        </motion.div>

        {/* CALL TO ACTION */}
        <motion.div
          className="mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <Link href="/agendar" className="inline-block">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
            >
              Agendar Avaliação Capilar Gratuita
            </Button>
          </Link>
          
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Descobre como podemos ajudar a recuperar a saúde do teu cabelo
          </p>
        </motion.div>
      </div>
    </section>
  );
}