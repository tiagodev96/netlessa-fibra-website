import { Check } from "lucide-react";

export type IndiqueStep = 1 | 2 | 3;

const STEPS: { label: string }[] = [
  { label: "Amigo" },
  { label: "Você" },
  { label: "Pronto" },
];

type StepperProps = {
  currentStep: IndiqueStep;
};

export default function Stepper({ currentStep }: StepperProps) {
  return (
    <ol className="grid w-full max-w-md grid-cols-3 mx-auto" aria-label="Etapas">
      {STEPS.map(({ label }, index) => {
        const stepNumber = index + 1;
        const isCompleted = stepNumber < currentStep;
        const isActive = stepNumber === currentStep;
        const isLast = index === STEPS.length - 1;

        const circleClasses = isActive
          ? "bg-blue border-blue text-white"
          : isCompleted
          ? "bg-green border-green text-black"
          : "bg-white border-light-gray text-gray";

        return (
          <li
            key={label}
            className="relative flex flex-col items-center gap-2"
            aria-current={isActive ? "step" : undefined}
          >
            {!isLast && (
              <div
                aria-hidden="true"
                className={`absolute left-1/2 top-5 h-0.5 w-full ${
                  isCompleted ? "bg-green" : "bg-light-gray"
                }`}
              />
            )}
            <div
              className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 text-[16px] font-medium ${circleClasses}`}
            >
              {isLast ? <Check size={20} aria-hidden="true" /> : stepNumber}
            </div>
            <span
              className={`text-[14px] ${
                isActive ? "font-bold text-blue" : "text-gray"
              }`}
            >
              {label}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
