import React from "react";
import ContactHeader from "./contact-header";
import ContactForm from "@/components/contact-section/ContactForm";

export default function LeftContent() {
  return (
    <div className="flex flex-col gap-8">
      <ContactHeader />
      <ContactForm />
    </div>
  );
}
