"use client";

import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DateTimePickerProps {
  onSelect: (value: { date: string; time: string }) => void;
}

export function DateTimePicker({ onSelect }: DateTimePickerProps) {
  return (
    <div>
      <p className="text-muted-foreground mb-6">
        Escolhe a data e o horário disponível.
      </p>

      <div className="p-6 border rounded-lg dark:border-white/20 text-center">
        <Clock size={28} className="mx-auto text-primary mb-3" />
        <p className="text-muted-foreground">
          Aqui vai entrar o DatePicker + horários disponíveis.
        </p>
        <p className="mt-2 text-sm text-primary font-medium">
          (Pronto para integração com FastAPI)
        </p>
      </div>

      <div className="mt-6 flex justify-end">
        <Button onClick={() => onSelect({ date: "2025-01-01", time: "10:00" })}>
          Continuar
        </Button>
      </div>
    </div>
  );
}
