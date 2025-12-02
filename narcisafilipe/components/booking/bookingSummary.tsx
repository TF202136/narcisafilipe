"use client";

import { Button } from "@/components/ui/button";

interface BookingSummaryProps {
  data: {
    service: string;
    professional: string;
    date: string;
    time: string;
  };
  onConfirm: () => void;
}

export function BookingSummary({ data, onConfirm }: BookingSummaryProps) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Resumo do Agendamento</h3>

      <div className="space-y-3 text-muted-foreground">
        <p>Serviço: <span className="text-primary">{data.service}</span></p>
        <p>Profissional: <span className="text-primary">{data.professional}</span></p>
        <p>Data: <span className="text-primary">{data.date}</span></p>
        <p>Hora: <span className="text-primary">{data.time}</span></p>
      </div>

      <div className="mt-8">
        <Button className="w-full py-6 text-lg" onClick={onConfirm}>
          Finalizar e Ir para Pagamento
        </Button>
      </div>

      <p className="text-xs text-center mt-3 text-muted-foreground">
        O pagamento será processado via Stripe. (Preparado para integração)
      </p>
    </div>
  );
}
