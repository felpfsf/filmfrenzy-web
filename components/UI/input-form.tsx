import { AlertCircle } from "lucide-react";
import { useFormContext } from "react-hook-form";

type InputType = "password" | "email" | "text";

interface InputProps {
  label: string;
  name: string;
  type: InputType;
}

export const Input = ({ label, name, type }: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const messageErrors = errors[name]?.message as string;
  return (
    <div className='relative mb-12 flex flex-col'>
      <input
        id={name}
        type={type}
        {...register(name)}
        className='peer rounded p-2 text-sm text-primary transition-all duration-200 ease-in-out focus:outline-none focus:ring focus:ring-accent'
      />
      <label
        htmlFor={name}
        className='absolute left-2 top-2 cursor-text text-sm text-primary transition-all peer-autofill:-top-5 peer-autofill:text-sm peer-autofill:font-semibold peer-autofill:text-accent peer-focus:-top-5 peer-focus:text-sm peer-focus:font-semibold peer-focus:text-accent'
      >
        {label}
      </label>
      {messageErrors && (
        <p className='absolute -bottom-5 left-2 flex items-center gap-2 text-xs font-semibold text-red-500'>
          <AlertCircle size={14} />
          {messageErrors}
        </p>
      )}
    </div>
  );
};
