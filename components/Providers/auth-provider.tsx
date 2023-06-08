"use client"
import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

interface ProviderProps {
  children: ReactNode;
}
export const AuthProvider = ({ children }: ProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};