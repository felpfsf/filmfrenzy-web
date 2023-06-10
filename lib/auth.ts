import { checkIfUserAlreadyExists } from "@/utils/check-existing-user";
import { verifyPassword } from "@/utils/crypt-password";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import prisma from "./prisma";

const GITHUB_CLIENT =
  process.env.NEXT_PUBLIC_GITHUB_LOCAL_CLIENT_ID! ||
  process.env.NEXT_PUBLIC_GITHUB_PROD_CLIENT_ID!;

const GITHUB_SECRET =
  process.env.NEXT_PUBLIC_GITHUB_LOCAL_SECRET! ||
  process.env.NEXT_PUBLIC_GITHUB_PROD_SECRET!;

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter<boolean>,
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET!,
    }),
    GitHubProvider({
      clientId: GITHUB_CLIENT,
      clientSecret: GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "jsmith@test.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) throw new Error("Credenciais não fornecidas");

        const user = await checkIfUserAlreadyExists(credentials.email);

        if (!user) throw new Error("Nenhum usuário registrado com esse e-mail");

        const correctPassword = verifyPassword({
          candidatePassword: credentials.password,
          hash: user.password!,
          salt: user.salt!,
        });
        if (!correctPassword) throw new Error("Senha incorreta");

        return user;
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      if (session.user) {
        session.user.id = token.uid as string;
      }
      return session;
    },
    async jwt({ user, token }) {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
};
