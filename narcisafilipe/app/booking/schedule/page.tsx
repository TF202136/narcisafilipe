"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, CheckCircle, Scissors, User, Clock } from "lucide-react";

// 🔥 Stepper steps
const steps = [
  { id: 1, label: "Serviço", icon: Scissors },
  { id: 2, label: "Profissional", icon: User },
  { id: 3, label: "Data & Hora", icon: CalendarDays },
  { id: 4, label: "Confirmar", icon: CheckCircle },
];

export default function BookingSchedulePage() {
  const [currentStep, setCurrentStep] = useState(1);

  const next = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  const prev = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  return (
    <main className="min-h-screen bg-white dark:bg-black pt-20 pb-32">
      <div className="max-w-5xl mx-auto px-6 md:px-12">

        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Agendamento de Consulta
        </h1>

        {/* STEPPER */}
        <div className="flex justify-between items-center mb-16">
          {steps.map((step) => {
            const Icon = step.icon;
            const isActive = step.id === currentStep;
            const isCompleted = step.id < currentStep;

            return (
              <div key={step.id} className="flex flex-col items-center w-full">
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-full 
                  border-2 transition 
                  ${isActive ? "border-primary bg-primary text-white" : 
                    isCompleted ? "border-primary bg-primary/20 text-primary" : 
                    "border-gray-300 dark:border-white/20 text-muted-foreground"}`}
                >
                  <Icon size={20} />
                </div>

                <p
                  className={`mt-2 text-sm font-medium 
                  ${isActive ? "text-primary" : "text-muted-foreground"}`}
                >
                  {step.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* CARD MAIN */}
        <Card className="shadow-lg border dark:border-white/10">
          <CardHeader>
            <CardTitle className="text-xl">
              {steps.find((s) => s.id === currentStep)?.label}
            </CardTitle>
          </CardHeader>

          <CardContent className="min-h-[300px]">
            {/* STEP 1 – ESCOLHER SERVIÇO */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Escolhe o tipo de serviço ou tratamento que desejas agendar.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <Button
                    variant="outline"
                    className="w-full justify-start py-6"
                    onClick={next}
                  >
                    Tratamento para Queda de Cabelo
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full justify-start py-6"
                    onClick={next}
                  >
                    Dermatite / Caspa
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full justify-start py-6"
                    onClick={next}
                  >
                    Crescimento & Fortalecimento
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full justify-start py-6"
                    onClick={next}
                  >
                    Reconstrução Capilar
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 2 – PROFISSIONAL */}
            {currentStep === 2 && (
              <div>
                <p className="text-muted-foreground mb-6">
                  Seleciona o profissional disponível.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <Button variant="outline" className="py-6" onClick={next}>
                    Narcisa Filipe
                  </Button>
                  <Button variant="outline" className="py-6 opacity-50 cursor-not-allowed">
                    Outro profissional (em breve)
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 3 – DATA E HORA */}
            {currentStep === 3 && (
              <div>
                <p className="text-muted-foreground mb-6">
                  Escolhe a data e o horário disponível.
                </p>

                {/* Placeholder do Datepicker */}
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
                  <Button onClick={next}>Continuar</Button>
                </div>
              </div>
            )}

            {/* STEP 4 – CONFIRMAR */}
            {currentStep === 4 && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Resumo do Agendamento</h3>

                <div className="space-y-3 text-muted-foreground">
                  <p>Serviço: <span className="text-primary">Selecionado</span></p>
                  <p>Profissional: <span className="text-primary">Narcisa Filipe</span></p>
                  <p>Data & Hora: <span className="text-primary">A definir</span></p>
                </div>

                <div className="mt-8">
                  <Button className="w-full py-6 text-lg">
                    Finalizar e Ir para Pagamento
                  </Button>
                </div>

                <p className="text-xs text-center mt-3 text-muted-foreground">
                  O pagamento será processado via Stripe. (Preparado para integração)
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* FOOTER BUTTONS */}
        <div className="flex justify-between mt-8">
          <Button variant="ghost" disabled={currentStep === 1} onClick={prev}>
            Voltar
          </Button>

          <Button disabled={currentStep === steps.length} onClick={next}>
            Próximo
          </Button>
        </div>
      </div>
    </main>
  );
}
