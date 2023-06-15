import { useCharCounter } from "@/hooks/useCharCounter";
import clsx from "clsx";
import { AlertCircle } from "lucide-react";
import { useFormContext } from "react-hook-form";

interface TextareaProps {
  label?: string;
  name: string;
}

const Textarea = ({ label, name }: TextareaProps) => {
  const { charCount, handleInputChange } = useCharCounter();
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const messageErrors = errors[name]?.message as string;
  return (
    <fieldset className='relative mb-4 flex flex-col'>
      <label htmlFor={name} className='text-sm'>
        {label}
      </label>
      <textarea
        id={name}
        {...register(name)}
        onChange={handleInputChange}
        className='h-40 resize-none rounded p-2 text-sm text-primary transition-all duration-200 ease-in-out focus:outline-none focus:ring focus:ring-accent'
      ></textarea>
      <span
        className={clsx("pr-2 pt-1 text-end text-xs", {
          "text-red-500": charCount > 650,
        })}
      >
        {charCount}/650
      </span>
      {messageErrors && (
        <p className='absolute -bottom-3 right-2 flex items-center gap-2 text-xs font-semibold text-red-500'>
          <AlertCircle size={14} />
          {messageErrors}
        </p>
      )}
    </fieldset>
  );
};

export default Textarea;
