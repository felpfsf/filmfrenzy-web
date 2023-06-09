import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const GITHUB_CLIENT =
  process.env.NEXT_PUBLIC_GITHUB_LOCAL_CLIENT_ID! ||
  process.env.NEXT_PUBLIC_GITHUB_PROD_CLIENT_ID!;

const GITHUB_SECRET =
  process.env.NEXT_PUBLIC_GITHUB_LOCAL_SECRET! ||
  process.env.NEXT_PUBLIC_GITHUB_PROD_SECRET!;

export const authOptions: NextAuthOptions = {
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
  ],
};
