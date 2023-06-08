import { AlertCircle, Loader2 } from "lucide-react";

interface ButtonProps {
  text: string;
  error: string;
  loading: boolean;
}

export const Button = ({ error, loading = false, text }: ButtonProps) => {
  return (
    <div className='relative'>
      <button
        type='submit'
        disabled={loading}
        className={`flex w-full items-center justify-center gap-2 rounded bg-accent p-2 font-semibold text-primary transition-colors duration-200 ease-in-out active:bg-accent-caption disabled:cursor-not-allowed disabled:opacity-50 ${
          !loading ? "hover:bg-accent-hover" : ""
        }`}
      >
        {loading && (
          <Loader2 className='h-5 w-5 animate-spin text-primary/60' />
        )}
        {!loading ? text : "Carregando..."}
      </button>
      {error && (
        <p className='absolute -bottom-5 left-2 flex items-center gap-2 text-xs font-semibold text-red-500'>
          <AlertCircle size={14} />
          {error}
        </p>
      )}
    </div>
  );
};
