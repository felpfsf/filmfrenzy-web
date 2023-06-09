"use client";
import {
  RegisterInputProps,
  RegisterSchema,
} from "@/utils/validations/auth-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Input } from "../UI/input-form";
import { Button } from "../UI/submit-button";

const RegisterAuthForm = () => {
  const [authError, setAuthError] = useState<string>("");
  const methods = useForm<RegisterInputProps>({
    resolver: zodResolver(RegisterSchema),
  });
  const onSubmitUser = async (data: RegisterInputProps) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("sending data => ", data);
    methods.reset();
  };
  return (
    <FormProvider {...methods}>
      <form
        className='container flex flex-col'
        autoComplete='off'
        onSubmit={methods.handleSubmit(onSubmitUser)}
      >
        <h1 className='mb-8 pl-2 text-left text-3xl font-bold'>Registrar</h1>
        <Input label={"Digite seu nome"} name={"name"} type={"text"} />
        <Input label={"Digite seu e-mail"} name={"email"} type={"email"} />
        <Input label={"Digite sua senha"} name={"password"} type={"password"} />
        <Input
          label={"Confirme sua senha"}
          name={"passwordConfirmation"}
          type={"password"}
        />
        <Button
          text={"Entrar"}
          error={authError}
          loading={methods.formState.isSubmitting}
        />
      </form>
    </FormProvider>
  );
};

export default RegisterAuthForm;
