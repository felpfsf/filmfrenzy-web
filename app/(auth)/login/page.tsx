"use client";
import { Input } from "@/components/UI/input-form";
import { Button } from "@/components/UI/submit-button";
import SocialLogin from "@/components/social-login/social-login";
import { LoginInputProps, LoginSchema } from "@/utils/validations/auth-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

const Login = () => {
  const [authError, setAuthError] = useState<string>("");
  const methods = useForm<LoginInputProps>({
    resolver: zodResolver(LoginSchema),
  });
  const onSubmitUser = async (data: LoginInputProps) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log("sending data => ", data);
  };
  return (
    <div className='w-full rounded-lg py-6 lg:bg-body/60 lg:backdrop-blur-sm'>
      <FormProvider {...methods}>
        <form
          className='container flex flex-col'
          autoComplete='off'
          onSubmit={methods.handleSubmit(onSubmitUser)}
        >
          <h1 className='mb-8 pl-2 text-left text-3xl font-bold'>Entrar</h1>
          <Input label={"Digite seu e-mail"} name={"email"} type={"email"} />
          <Input
            label={"Digite sua senha"}
            name={"password"}
            type={"password"}
          />
          <Button
            text={"Entrar"}
            error={authError}
            loading={methods.formState.isSubmitting}
          />
        </form>
      </FormProvider>
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
