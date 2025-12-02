"use client";

import { Button } from "@/components/ui/button";

interface SelectServiceProps {
  onSelect: (service: string) => void;
}

export function SelectService({ onSelect }: SelectServiceProps) {
  const services = [
    "Tratamento para Queda de Cabelo",
    "Dermatite / Caspa",
    "Crescimento & Fortalecimento",
    "Reconstrução Capilar",
  ];

  return (
    <div>
      <p className="text-muted-foreground">
        Escolhe o tipo de serviço ou tratamento que desejas agendar.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mt-6">
        {services.map((service) => (
          <Button
            key={service}
            variant="outline"
            className="w-full justify-start py-6"
            onClick={() => onSelect(service)}
          >
            {service}
          </Button>
        ))}
      </div>
    </div>
  );
}
