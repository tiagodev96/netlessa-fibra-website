import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { FC } from "react";

type PlanCardProps = {
  plan: {
    id: string;
    name: string;
    is_highlighted: boolean;
    price: number;
    whatsapp_text: string;
    features: {
      id: string;
      name: string;
      icon: {
        url: string;
      };
    }[];
  };
  onClick: () => void;
};

const formatPrice = (price: number): string => {
  return price.toFixed(2).replace(".", ",");
};

const PlanCard: FC<PlanCardProps> = ({ plan, onClick }) => {
  return (
    <div
      className={`h-full rounded-lg border ${
        plan.is_highlighted ? "bg-blue text-white" : "bg-white"
      } p-6 flex flex-col`}
    >
      <h3
        className={`text-[20px] font-bold mb-2 ${
          plan.is_highlighted ? "text-white" : "text-black"
        }`}
      >
        {plan.name}
      </h3>
      <p
        className={`text-3xl sm:text-5xl font-bold ${
          plan.is_highlighted ? "text-green" : "text-blue"
        }`}
      >
        R${formatPrice(plan.price)}
      </p>
      <p className="text-[16px]">mensal</p>
      <Separator className="my-8" />
      <div className="flex-grow">
        <p className="font-semibold mb-4 text-[16px]">Incluso</p>
        <ul className="space-y-4">
          {plan.features.map((feature) => (
            <li
              key={feature.id}
              className="flex items-center gap-4 text-[14px]"
            >
              <Image
                src={feature.icon.url as string}
                width={24}
                height={24}
                alt={feature.name}
              />
              {feature.name}
            </li>
          ))}
        </ul>
      </div>
      <button
        className={`mt-6 w-full py-2 px-4 rounded ${
          plan.is_highlighted ? "bg-green text-blue" : "bg-blue text-white"
        } font-semibold`}
        onClick={onClick}
      >
        Contratar
      </button>
    </div>
  );
};

export default PlanCard;
