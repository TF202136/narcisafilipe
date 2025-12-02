"use client";

import { Button } from "@/components/ui/button";

interface SelectProfessionalProps {
  onSelect: (professional: string) => void;
}

export function SelectProfessional({ onSelect }: SelectProfessionalProps) {
  const professionals = [
    { name: "Narcisa Filipe", available: true },
    { name: "Outro profissional", available: false },
  ];

  return (
    <div>
      <p className="text-muted-foreground mb-6">
        Seleciona o profissional disponível.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        {professionals.map((p) => (
          <Button
            key={p.name}
            variant="outline"
            disabled={!p.available}
            className={`py-6 ${!p.available && "opacity-50 cursor-not-allowed"}`}
            onClick={() => p.available && onSelect(p.name)}
          >
            {p.name}
          </Button>
        ))}
      </div>
    </div>
  );
}
