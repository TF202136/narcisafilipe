"use client";

import { cn } from "@/lib/utils";

export interface Step {
  id: number;
  label: string;
  icon: React.ElementType;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
}

export function Stepper({ steps, currentStep }: StepperProps) {
  return (
    <div className="flex justify-between items-center mb-16">
      {steps.map((step) => {
        const Icon = step.icon;
        const isActive = step.id === currentStep;
        const isCompleted = step.id < currentStep;

        return (
          <div key={step.id} className="flex flex-col items-center w-full">
            <div
              className={cn(
                "w-12 h-12 flex items-center justify-center rounded-full border-2 transition",
                isActive
                  ? "border-primary bg-primary text-white"
                  : isCompleted
                  ? "border-primary bg-primary/20 text-primary"
                  : "border-gray-300 dark:border-white/20 text-muted-foreground"
              )}
            >
              <Icon size={20} />
            </div>

            <p
              className={cn(
                "mt-2 text-sm font-medium",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
            >
              {step.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}
