"use client";
import { api } from "@/lib/axios";
import {
  RegisterInputProps,
  RegisterSchema,
} from "@/lib/validations/auth-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Input } from "../UI/input-form";
import { Button } from "../UI/submit-button";

const RegisterAuthForm = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [authError, setAuthError] = useState<string>("");
  const methods = useForm<RegisterInputProps>({
    resolver: zodResolver(RegisterSchema),
  });

  if(session){
    router.replace('/')
  }

  const onSubmitUser = async (data: RegisterInputProps) => {
    try {
      const response = await api.post("/user", data);

      if (response.status === 200) {
        router.push("/login");
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response) {
          console.log(error.response.data.message);
          setAuthError(error.response.data.message);
        }
      } else {
        console.error("Erro inexperado", error);
        setAuthError(error as string);
      }
    }
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
