"use client";
import { LoginInputProps, LoginSchema } from "@/lib/validations/auth-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Input } from "../UI/input-form";
import { Button } from "../UI/submit-button";

const LoginAuthForm = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [authError, setAuthError] = useState<string>("");
  const methods = useForm<LoginInputProps>({
    resolver: zodResolver(LoginSchema),
  });

  if (session) {
    router.replace("/");
  }

  const onSubmitUser = async (data: LoginInputProps) => {
    try {
      const res = await signIn("credentials", {
        callbackUrl: "/",
        redirect: false,
        ...data,
      });

      if (res?.ok) {
        router.push("/");
      } else {
        console.error(res?.error);
        setAuthError(res?.error as string);
      }
    } catch (error) {
      console.error(error);
      setAuthError(error as string);
    }
  };
  return (
    <FormProvider {...methods}>
      <form
        className='container flex flex-col'
        autoComplete='off'
        onSubmit={methods.handleSubmit(onSubmitUser)}
      >
        <h1 className='mb-8 pl-2 text-left text-3xl font-bold'>Entrar</h1>
        <Input label={"Digite seu e-mail"} name={"email"} type={"email"} />
        <Input label={"Digite sua senha"} name={"password"} type={"password"} />
        <Button
          text={"Entrar"}
          error={authError}
          loading={methods.formState.isSubmitting}
        />
      </form>
    </FormProvider>
  );
};

export default LoginAuthForm;
