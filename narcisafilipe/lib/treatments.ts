// lib/treatments.ts
export type TreatmentSlug =
  | "queda-de-cabelo"
  | "crescimento-e-fortalecimento"
  | "dermatites-e-caspa"
  | "reconstrucao-e-nutricao";

export interface HowItWorksStep {
  title: string;
  content: string;
}

export interface Treatment {
  slug: TreatmentSlug;
  title: string;
  shortDescription: string;
  longDescription: string;
  image: string; // caminho da imagem no /public
  seoDescription: string;
  howItWorks: HowItWorksStep[];
  benefits: string[];
}

export const treatments: Treatment[] = [
  {
    slug: "queda-de-cabelo",
    title: "Tratamento para Queda de Cabelo",
    shortDescription:
      "Diagnóstico profissional e protocolos avançados para queda, rarefação e enfraquecimento capilar.",
    longDescription:
      "A queda de cabelo pode ter diversas causas: hormonais, emocionais, carenciais, inflamatórias ou genéticas. No tratamento para queda de cabelo, o foco é identificar a causa real por trás do problema e aplicar um plano de terapia capilar personalizado, combinando produtos específicos, técnicas de estimulação e orientações de cuidado diário.",
    image: "/vsl-poster.png",
    seoDescription:
      "Tratamento profissional para queda de cabelo em Narcisa Filipe – diagnóstico capilar, protocolos personalizados e acompanhamento especializado.",
    howItWorks: [
      {
        title: "1. Avaliação e diagnóstico capilar",
        content:
          "Análise detalhada do couro cabeludo e histórico do cliente para identificar a origem da queda."
      },
      {
        title: "2. Definição do protocolo",
        content:
          "Criação de um plano de tratamento personalizado, com foco em controlar a queda e estimular o crescimento."
      },
      {
        title: "3. Sessões de terapia capilar",
        content:
          "Aplicação de técnicas específicas em cabine, aliadas a produtos profissionais e estímulos no couro cabeludo."
      },
      {
        title: "4. Acompanhamento e ajustes",
        content:
          "Reavaliações periódicas para ajustar o tratamento conforme a resposta do cabelo e couro cabeludo."
      }
    ],
    benefits: [
      "Redução progressiva da queda",
      "Fortalecimento do fio desde a raiz",
      "Melhor densidade e aparência do cabelo",
      "Couro cabeludo mais saudável"
    ]
  },
  {
    slug: "crescimento-e-fortalecimento",
    title: "Crescimento e Fortalecimento Capilar",
    shortDescription:
      "Estimulação capilar para acelerar o crescimento, melhorar densidade e fortalecer o fio.",
    longDescription:
      "Este tratamento é indicado para quem sente o cabelo fraco, sem volume, com dificuldade de crescer ou após períodos de quebra intensa. O objetivo é fortalecer o fio, estimular o crescimento saudável e melhorar a densidade capilar.",
    image: "/vsl-poster.png",
    seoDescription:
      "Tratamento de crescimento e fortalecimento capilar com protocolos personalizados e acompanhamento profissional.",
    howItWorks: [
      {
        title: "1. Análise do histórico capilar",
        content:
          "Avaliação de químicas, hábitos de cuidado, alimentação e fatores externos que influenciam o crescimento."
      },
      {
        title: "2. Estímulo do couro cabeludo",
        content:
          "Técnicas específicas para ativar a circulação e estimular os folículos pilosos."
      },
      {
        title: "3. Nutrição e fortalecimento do fio",
        content:
          "Protocolos para repor nutrientes essenciais e reforçar a fibra capilar."
      }
    ],
    benefits: [
      "Cabelo mais forte e resistente",
      "Melhor crescimento ao longo do tempo",
      "Aumento da densidade capilar",
      "Mais brilho e vitalidade"
    ]
  },
  {
    slug: "dermatites-e-caspa",
    title: "Tratamento para Dermatites & Caspa",
    shortDescription:
      "Cuidado clínico para dermatite seborreica, caspa, inflamações e descamações.",
    longDescription:
      "Dermatites e caspa podem causar desconforto, coceira, vermelhidão e descamação. O tratamento é focado em acalmar o couro cabeludo, controlar a inflamação e restaurar o equilíbrio da pele.",
    image: "/vsl-poster.png",
    seoDescription:
      "Tratamento profissional para dermatite seborreica e caspa, com foco em controle da inflamação e equilíbrio do couro cabeludo.",
    howItWorks: [
      {
        title: "1. Identificação do tipo de dermatite",
        content:
          "Análise das lesões, descamações e histórico do quadro para definir o melhor protocolo."
      },
      {
        title: "2. Tratamento em cabine",
        content:
          "Aplicação de produtos específicos e técnicas suaves para acalmar o couro cabeludo."
      },
      {
        title: "3. Orientações de manutenção",
        content:
          "Plano de cuidados em casa para manter o couro cabeludo equilibrado e evitar novas crises."
      }
    ],
    benefits: [
      "Redução da descamação e coceira",
      "Couro cabeludo mais calmo e equilibrado",
      "Melhora na aparência geral do cabelo",
      "Maior conforto no dia a dia"
    ]
  },
  {
    slug: "reconstrucao-e-nutricao",
    title: "Reconstrução & Nutrição Capilar",
    shortDescription:
      "Protocolos para restaurar fios danificados por química, calor e agressões externas.",
    longDescription:
      "Ideal para cabelos danificados, porosos, quebradiços ou com excesso de processos químicos. O objetivo é reconstruir a fibra, repor massa, hidratar profundamente e devolver brilho e movimento.",
    image: "/vsl-poster.png",
    seoDescription:
      "Reconstrução e nutrição capilar para restaurar fios danificados e devolver força, brilho e movimento.",
    howItWorks: [
      {
        title: "1. Diagnóstico do grau de dano",
        content:
          "Avaliação da estrutura do fio para entender o nível de dano e as necessidades do cabelo."
      },
      {
        title: "2. Aplicação dos protocolos",
        content:
          "Sessões com produtos e técnicas específicas de reconstrução, hidratação e nutrição."
      },
      {
        title: "3. Plano de manutenção",
        content:
          "Recomendações de produtos e rotinas para manter o resultado no dia a dia."
      }
    ],
    benefits: [
      "Cabelo mais forte e resistente à quebra",
      "Redução do frizz e da aspereza",
      "Mais brilho, maciez e movimento",
      "Melhor resposta a futuras químicas"
    ]
  }
];

export function getTreatmentBySlug(slug: string): Treatment | undefined {
  return treatments.find((t) => t.slug === slug);
}
