import React from "react";
import TeamMember from "./TeamMember";

export default function Team() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      <TeamMember
        name="John Doe"
        role="CEO"
        imageSrc="/about-us/avatar-placeholder.svg"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
      />
      <TeamMember
        name="Jane Doe"
        role="Sócia Administrativa"
        imageSrc="/about-us/avatar-placeholder.svg"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
      />
      <TeamMember
        name="Nome completo"
        role="Cargo"
        imageSrc="/about-us/avatar-placeholder.svg"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
      />
      <TeamMember
        name="Nome completo"
        role="Cargo"
        imageSrc="/about-us/avatar-placeholder.svg"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
      />
      <TeamMember
        name="Nome completo"
        role="Cargo"
        imageSrc="/about-us/avatar-placeholder.svg"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
      />
      <TeamMember
        name="Nome completo"
        role="Cargo"
        imageSrc="/about-us/avatar-placeholder.svg"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
      />
    </div>
  );
}
