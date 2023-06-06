"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavigationMenu = () => {
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
      <li>
        <Link
          href={"/register"}
          className={`border-b-2 font-bold hover:border-b-accent hover:text-accent-hover ${
            pathname === "/register"
              ? "border-b-2 border-b-accent font-bold text-accent-hover"
              : "border-b-transparent "
          }`}
        >
          Login
        </Link>
      </li>
    </ul>
  );
};

export default NavigationMenu;
