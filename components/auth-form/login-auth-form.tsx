"use client"
import { LoginInputProps, LoginSchema } from "@/utils/validations/auth-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "../UI/submit-button";
import { Input } from "../UI/input-form";

const LoginAuthForm = () => {
  const [authError, setAuthError] = useState<string>("");
  const methods = useForm<LoginInputProps>({
    resolver: zodResolver(LoginSchema),
  });
  const onSubmitUser = async (data: LoginInputProps) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log("sending data => ", data);
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
