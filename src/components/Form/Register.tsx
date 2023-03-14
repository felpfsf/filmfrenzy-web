import { Link } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/Input";
import { SubmitButton } from "../ui/SubmitButton";
import { HiOutlineExclamationCircle } from "react-icons/hi2";
import {
  RegisterInputProps,
  registerSchema,
} from "../../utils/UserInput.schemas";

export const Register = () => {
  const methods = useForm<RegisterInputProps>({
    resolver: zodResolver(registerSchema),
  });
  const onSubmit = async (data: RegisterInputProps) => {
    console.log('sending ->',data);
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
            placeholder={"Digite seu nome"}
            type={"text"}
            name={"displayName"}
          />
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
          <Input
            placeholder={"Confirme sua senha"}
            type={"password"}
            name={"passwordConfirmation"}
          />
          <SubmitButton variant={"submit"} label={"Registrar"} />
          <div className='mt-1 flex items-center justify-center gap-x-1 text-red-500'>
            <HiOutlineExclamationCircle />
            <p className='text-xs'>Mensagem de erro da API</p>
          </div>
        </form>
      </FormProvider>
      <div className='mt-8'>
        <p className='text-sm'>
          Já é usuário?{" "}
          <Link to='/signin' className='underline underline-offset-2'>
            Entre aqui
          </Link>
        </p>
      </div>
    </>
  );
};
