"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
interface AuthLayoutProps {
  children: React.ReactNode;
}
const AuthLayout = ({ children }: AuthLayoutProps) => {
  const { data: session } = useSession();
  console.log("USUARIO =>", session?.user);
  if (session) {
    redirect("/");
  }
  return (
    <main>
      <Image
        src={"/bg-signup.jpg"}
        alt={""}
        fill
        className='-z-10 hidden lg:block'
      />
      <div className='absolute inset-0 -z-10 w-full bg-body/60' />
      <div className='container flex max-w-md flex-col items-center justify-center pt-24 lg:h-screen lg:pt-0'>
        {children}
      </div>
    </main>
  );
};

export default AuthLayout;
