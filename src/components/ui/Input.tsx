import { useFormContext } from "react-hook-form";
import { HiOutlineExclamationCircle } from "react-icons/hi2";

interface InputProps {
  label?: string;
  placeholder: string;
  type: "password" | "text" | "email";
  name: string;
}

export const Input = ({ name, placeholder, type, label }: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className='relative mb-8'>
      <input
        className='w-full border-b border-b-neutral-200 bg-transparent px-2 placeholder-neutral-300 placeholder:text-sm placeholder:italic'
        placeholder={placeholder}
        autoComplete={type}
        type={type}
        id={name}
        {...register(name)}
      />
      {errors[name]?.message && (
        <div className='absolute mt-1 flex items-center justify-center gap-x-1 text-red-500'>
          <HiOutlineExclamationCircle />
          <p className='text-xs'>{errors[name]?.message as string}</p>
        </div>
      )}
    </div>
  );
};
