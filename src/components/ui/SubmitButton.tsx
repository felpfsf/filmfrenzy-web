import clsx from "clsx";
import { CgSpinner } from "react-icons/cg";

interface ButtonProps {
  disable?: boolean;
  variant: "submit" | "loading";
  label: string;
}

export const SubmitButton = ({ disable, label, variant }: ButtonProps) => {
  return (
    <button
      className={clsx(
        {
          "mt-4 w-full cursor-pointer self-center rounded-lg bg-red-600 p-3 transition-colors duration-300 ease-in-out hover:bg-red-800":
            label != "loading",
        },
        { "cursor-not-allowed": variant === "loading" && disable }
      )}
      disabled={disable}
    >
      {variant === "loading" ? (
        <CgSpinner className='h-5 w-5 animate-spin' />
      ) : null}
      {label}
    </button>
  );
};
