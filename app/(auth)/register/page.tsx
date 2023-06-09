import RegisterAuthForm from "@/components/auth-form/register-auth-form";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Crie uma conta | Filmfrenzy",
  description: "Registre-se e comece a comentar seus filmes favoritos",
};

const Register = () => {
  return (
    <div className='w-full rounded-lg py-6 lg:bg-body/60 lg:backdrop-blur-sm'>
      <RegisterAuthForm />
      <p className='container mt-8 text-right text-sm'>
        Já tem uma conta?{" "}
        <Link
          href='/login'
          className='font-semibold text-accent underline underline-offset-2 transition-colors duration-200 ease-in-out hover:text-accent-hover'
        >
          Entre aqui
        </Link>
      </p>
    </div>
  );
};

export default Register;
