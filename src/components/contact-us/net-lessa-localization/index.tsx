import React from "react";
import LocalizationHeader from "./localization-header";
import LocalizationInformations from "./localization-informations";

export default function NetLessaLocalization() {
  return (
    <section className="section-container py-24">
      <div className="flex flex-col gap-20">
        <LocalizationHeader />
        <LocalizationInformations />
      </div>
    </section>
  );
}
