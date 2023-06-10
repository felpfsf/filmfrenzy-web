import prisma from "@/lib/prisma";
import {
  RegisterInputProps,
  RegisterSchema,
} from "@/lib/validations/auth-schemas";
import { checkIfUserAlreadyExists } from "@/utils/check-existing-user";
import { hashPassword } from "@/utils/crypt-password";
import { NextResponse } from "next/server";

const handleCreateUser = async (body: RegisterInputProps) => {
  const { passwordConfirmation, password, ...rest } = body;
  const { hash, salt } = hashPassword(password);
  const data = { password: hash, salt, ...rest };
  const user = await prisma.user.create({
    data,
  });
  return user;
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const response = RegisterSchema.safeParse(body);
    
    if (!response.success) {
      return NextResponse.json(
        { message: response.error.issues },
        {
          status: 409,
        }
      );
    }
    const userExists = await checkIfUserAlreadyExists(body.email);
    if (userExists) {
      return NextResponse.json(
        { message: "Usuário já cadastrado com esse e-mail" },
        {
          status: 409,
        }
      );
    }

    await handleCreateUser(body);
    return NextResponse.json(
      { message: "Usuário criado com sucesso" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Ocorreu um erro, tente novamente mais tarde" },
      { status: 400 }
    );
  }
}
