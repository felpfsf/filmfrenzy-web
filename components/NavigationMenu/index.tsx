import Link from "next/link";

const NavigationMenu = () => {
  return (
    <ul className='flex flex-col gap-4 lg:flex-row'>
      <li>
        <Link href={"/movie"}>Filmes</Link>
      </li>
      <li>
        <Link href={"/tv"}>Series</Link>
      </li>
      <li>
        <Link href={"/register"}>Login</Link>
      </li>
    </ul>
  );
};

export default NavigationMenu;
