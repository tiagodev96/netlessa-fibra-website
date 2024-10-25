import React from "react";
import OurValuesHeader from "./our-values-header";
import Values from "./values";

export default function OurValues() {
  return (
    <section className="py-24 bg-light-blue">
      <div className="section-container flex flex-col gap-20">
        <OurValuesHeader />
        <Values />
      </div>
    </section>
  );
}
