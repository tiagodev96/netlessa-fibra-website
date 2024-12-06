"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import Button from "../Button";

export default function HeaderTopContent() {
  const router = usePathname();
  const isCompany = router.startsWith("/grupo-lessa");

  return (
    <div className="border-b border-black">
      <div className="section-container py-6 flex flex-col xs:flex-row gap-2 justify-between items-center">
        <div className="flex gap-3">
          <Link
            href="/"
            className={`text-[14px] ${!isCompany && "font-medium"}`}
          >
            Para você
          </Link>
          <Link
            href="/grupo-lessa"
            className={`text-[14px] ${isCompany && "font-medium"}`}
          >
            Para sua empresa
          </Link>
        </div>

        <div className="flex gap-3">
          <Button
            link="https://wa.me/5571986064654"
            icon={<FaWhatsapp size={24} />}
            targetBlank
          >
            Atendimento
          </Button>
          <Button
            link="https://central.netlessa.com.br/central_assinante_web/login"
            targetBlank
          >
            Central do Cliente
          </Button>
        </div>
      </div>
    </div>
  );
}
