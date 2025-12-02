"use client";

import { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { Stepper } from "@/components/booking/stepper";
import { SelectService } from "@/components/booking/selectService";
import { SelectProfessional } from "@/components/booking/selectProfessional";
import { DateTimePicker } from "@/components/booking/dateTimePicker";
import { BookingSummary } from "@/components/booking/bookingSummary";

import { Scissors, User, CalendarDays, CheckCircle } from "lucide-react";

// Definição dos steps do stepper
const steps = [
  { id: 1, label: "Serviço", icon: Scissors },
  { id: 2, label: "Profissional", icon: User },
  { id: 3, label: "Data & Hora", icon: CalendarDays },
  { id: 4, label: "Confirmar", icon: CheckCircle },
];

export default function BookingSchedulePage() {
  const [currentStep, setCurrentStep] = useState(1);

  // Estado centralizado com todos os dados do booking
  const [bookingData, setBookingData] = useState({
    service: "",
    professional: "",
    date: "",
    time: "",
  });

  // Navegação
  const next = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  const prev = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  // Atualiza campo específico
  const update = (field: string, value: string) => {
    setBookingData((prev) => ({ ...prev, [field]: value }));
    next();
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black pt-20 pb-32">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        {/* Título */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Agendamento de Consulta
        </h1>

        {/* Stepper */}
        <Stepper steps={steps} currentStep={currentStep} />

        {/* Card Principal */}
        <Card className="shadow-lg border dark:border-white/10">
          <CardHeader>
            <CardTitle className="text-xl">
              {steps.find((s) => s.id === currentStep)?.label}
            </CardTitle>
          </CardHeader>

          <CardContent className="min-h-[300px]">

            {/* STEP 1 */}
            {currentStep === 1 && (
              <SelectService
                onSelect={(service) => update("service", service)}
              />
            )}

            {/* STEP 2 */}
            {currentStep === 2 && (
              <SelectProfessional
                onSelect={(professional) =>
                  update("professional", professional)
                }
              />
            )}

            {/* STEP 3 */}
            {currentStep === 3 && (
              <DateTimePicker
                onSelect={({ date, time }) => {
                  setBookingData((prev) => ({ ...prev, date, time }));
                  next();
                }}
              />
            )}

            {/* STEP 4 */}
            {currentStep === 4 && (
              <BookingSummary
                data={bookingData}
                onConfirm={() => alert("Integrar Stripe aqui.")}
              />
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
