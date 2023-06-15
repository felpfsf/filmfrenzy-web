"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

const SocialLogin = () => {
  return (
    <div className='container mt-4 flex flex-col items-center'>
      <h1 className='relative flex h-8 w-full items-center justify-center before:absolute before:left-0 before:top-1/2 before:h-[1px] before:w-[30%] before:bg-accent-hover after:absolute after:right-0 after:top-1/2 after:h-[1px] after:w-[30%] after:bg-accent-hover'>
        Ou continue com
      </h1>
      <div className='mt-4 flex items-center space-x-8'>
        <button
          className='inline-flex'
          title='Entre usando sua conta Google'
          onClick={() => signIn("google", { callbackUrl: `${window.location.origin}` })}
        >
          <Image
            src={"/google_icon.svg"}
            alt='Icone do Google'
            width={40}
            height={40}
          />
        </button>
        {/* <button
          className='inline-flex'
          title='Entre usando sua conta Github'
          onClick={() =>
            signIn("github", { callbackUrl: `${window.location.origin}` })
          }
        >
          <Image
            src={"/github_icon.svg"}
            alt='Icone do Github'
            width={40}
            height={40}
          />
        </button> */}
      </div>
    </div>
  );
};

export default SocialLogin;
