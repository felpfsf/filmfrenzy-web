"use client";
import { LogOut } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavigationMenu = () => {
  const { data: session } = useSession();
  const pathname = usePathname();

  return (
    <ul className='flex flex-col gap-4 lg:flex-row'>
      <li>
        <Link
          href={"/movie"}
          className={`border-b-2 font-bold hover:border-b-accent hover:text-accent-hover ${
            pathname === "/movie"
              ? "border-b-2 border-b-accent font-bold text-accent-hover"
              : "border-b-transparent "
          }`}
        >
          Filmes
        </Link>
      </li>
      <li>
        <Link
          href={"/tv"}
          className={`border-b-2 font-bold hover:border-b-accent hover:text-accent-hover ${
            pathname === "/tv"
              ? "border-b-2 border-b-accent font-bold text-accent-hover"
              : "border-b-transparent "
          }`}
        >
          Series
        </Link>
      </li>
      {session && session?.user ? (
        <>
          {session.user.name}
          <button onClick={() => signOut()}>
            <LogOut />
          </button>
        </>
      ) : (
        <li>
          <Link
            href={"/login"}
            className={`border-b-2 font-bold hover:border-b-accent hover:text-accent-hover ${
              pathname === "/login"
                ? "border-b-2 border-b-accent font-bold text-accent-hover"
                : "border-b-transparent "
            }`}
          >
            Login
          </Link>
        </li>
      )}
    </ul>
  );
};

export default NavigationMenu;
