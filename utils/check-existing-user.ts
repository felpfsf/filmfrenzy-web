import { prisma } from "@/lib/prisma";

export const checkIfUserAlreadyExists = async (email: string) => {
  return await prisma.user.findUnique({
    where: { email },
  });
};
