import { z } from "zod";

export const registerSchema = z
  .object({
    displayName: z.string().min(3, "Seu nome é obrigatório"),
    email: z.string().email().min(1, "Seu email é obrigatório"),
    password: z.string().min(6, "Senha é obrigatória"),
    passwordConfirmation: z.string({
      required_error: "A confirmação de senha é necessária",
    }),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Digite a mesma senha nos dois campos",
    path: ["passwordConfirmation"],
  });

export type RegisterInputProps = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  email: z.string().email().min(1, "Seu email é obrigatório"),
  password: z.string().min(6, "Senha é obrigatória"),
});

export type LoginInputProps = z.infer<typeof loginSchema>;
