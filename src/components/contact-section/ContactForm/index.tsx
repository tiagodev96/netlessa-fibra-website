"use client";

import InputField from "@/components/globals/InputField";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaWhatsapp } from "react-icons/fa";

interface FormData {
  name: string;
  message: string;
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const { name, message } = data;
    const whatsappNumber = "+5571986064654";
    const messageToSend = `Olá, me chamo ${name}.\n${message}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      messageToSend
    )}`;

    window.open(url, "_blank");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <div className="mb-4">
        <InputField
          label="Nome"
          name="name"
          register={register}
          error={errors.name}
        />
        <InputField
          label="Mensagem"
          name="message"
          register={register}
          error={errors.message}
          isTextArea={true}
        />
      </div>

      <button
        type="submit"
        className="-mt-4 flex items-center justify-center gap-2 py-2 px-5 border border-transparent rounded-[6px] text-[16px] transition-all ease-in-out duration-150 bg-green border-green text-black hover:bg-black hover:text-green hover:border-black max-w-[122px]"
      >
        <span>
          <FaWhatsapp size={24} />
        </span>
        Enviar
      </button>
    </form>
  );
}
