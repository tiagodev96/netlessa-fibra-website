import { FC } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

interface InputFieldProps {
  label: string;
  type?: string;
  register: UseFormRegister<any>;
  name: string;
  error?: FieldError;
  isTextArea?: boolean;
}

const InputField: FC<InputFieldProps> = ({
  label,
  type = "text",
  register,
  name,
  error,
  isTextArea = false,
}) => {
  return (
    <div className="mb-6">
      <label htmlFor={name} className="block mb-2 small-text">
        {label}
      </label>
      {isTextArea ? (
        <textarea
          id={name}
          {...register(name, { required: true, minLength: 3 })}
          className={`border border-black rounded-[6px] p-3 w-full ${
            error ? "border-error" : "border-gray-300"
          } resize-none`}
          rows={4}
        />
      ) : (
        <input
          id={name}
          type={type}
          {...register(name, { required: true, minLength: 3 })}
          className={`border border-black rounded-[6px] p-3 w-full ${
            error ? "border-error" : "border-gray-300"
          }`}
        />
      )}
      {error && (
        <span className="text-error text-[12px]">
          Este campo é obrigatório e deve ter pelo menos 3 caracteres.
        </span>
      )}
    </div>
  );
};

export default InputField;
