"use client";

import { ReactNode } from "react";
type ButtonProps = {
  icon?: ReactNode;
  link?: string;
  children: ReactNode;
  targetBlank?: boolean;
  isHero?: boolean;
};

export default function Button({
  icon,
  link,
  children,
  targetBlank,
  isHero,
}: ButtonProps) {
  const handleRedirection = () => {
    if (link) {
      return targetBlank
        ? window.open(link, "_blank")
        : window.open(link, "_self");
    }
  };
  const primaryButtonClasses =
    "bg-blue text-white hover:bg-white hover:border-blue hover:text-blue";
  const iconButtonClasses =
    "bg-green border-green text-black hover:bg-black hover:text-green hover:border-black";
  const heroButtonClasses =
    "hover:bg-transparent hover:text-white hover:border-white bg-white border-blue text-blue";
  const baseButtonClasses =
    "flex items-center justify-center gap-2 py-2 px-5 border border-transparent rounded-[6px] text-[16px] transition-all ease-in-out duration-150";

  const buttonClasses = icon
    ? iconButtonClasses
    : isHero
    ? heroButtonClasses
    : primaryButtonClasses;

  return (
    <button
      onClick={handleRedirection}
      className={`${baseButtonClasses} ${buttonClasses}`}
    >
      {icon}
      {children}
    </button>
  );
}
