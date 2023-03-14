import { Link } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { LoginInputProps, loginSchema } from "../../utils/UserInput.schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/Input";
import { SubmitButton } from "../ui/SubmitButton";
import { HiOutlineExclamationCircle } from "react-icons/hi2";

export const Login = () => {
  const methods = useForm<LoginInputProps>({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit = async (data: LoginInputProps) => {
    console.log("sending ->", data);
  };
  return (
    <>
      <FormProvider {...methods}>
        <form
          className='mt-4 flex w-full flex-col'
          autoComplete='off'
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <Input
            placeholder={"Entre com seu email"}
            type={"email"}
            name={"email"}
          />
          <Input
            placeholder={"Digite sua senha"}
            type={"password"}
            name={"password"}
          />
          <SubmitButton variant={"submit"} label={"Entrar"} />
          <div className='mt-1 flex items-center justify-center gap-x-1 text-red-500'>
            <HiOutlineExclamationCircle />
            <p className='text-xs'>Mensagem de erro da API</p>
          </div>
        </form>
      </FormProvider>
      <div className='mt-8'>
        <p className='text-sm'>
          Novo por aqui?{" "}
          <Link to='/signup' className='underline underline-offset-2'>
            Registre-se
          </Link>
        </p>
      </div>
    </>
  );
};
