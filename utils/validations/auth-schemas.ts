import { z } from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .email("Formato de email incorreto")
    .min(1, "Email é obrigatório"),
  password: z.string().min(6, "A senha é obrigatória e precisa de minimo 6 caracteres"),
});

export type LoginInputProps = z.infer<typeof LoginSchema>;

export const RegisterSchema = z
  .object({
    name: z.string().min(3, "Nome é obrigatório"),
    email: z
      .string()
      .email("Formato de email incorreto")
      .min(1, "Email é obrigatorio"),
    password: z.string().min(6, "A senha é obrigatória"),
    passwordConfirmation: z.string({
      required_error: "É necessário confirmar sua senha",
    }),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "As senhas não conferem",
    path: ["passwordConfirmation"],
  });

export type RegisterInputProps = z.infer<typeof RegisterSchema>;
