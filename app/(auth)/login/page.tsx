import LoginAuthForm from "@/components/auth-form/login-auth-form";
import SocialLogin from "@/components/social-login/social-login";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login | Filmfrenzy",
  description: "Faça login na sua conta",
};

const Login = () => {
  return (
    <div className='w-full rounded-lg py-6 lg:bg-body/60 lg:backdrop-blur-sm'>
      <LoginAuthForm />
      <p className='container mt-8 text-right text-sm'>
        Novo por aqui?{" "}
        <Link
          href='/register'
          className='font-semibold text-accent underline underline-offset-2 transition-colors duration-200 ease-in-out hover:text-accent-hover'
        >
          Registre-se
        </Link>
      </p>
      <SocialLogin />
    </div>
  );
};

export default Login;
