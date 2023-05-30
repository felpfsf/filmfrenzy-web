import Link from "next/link";
import MobileNavigation from "../MobileNavigation";
import NavigationMenu from "../NavigationMenu";
import SearchForm from "../SearchForm";
import Searchbar from "../Searchbar";

const Header = () => {
  return (
    <header className='fixed z-10 w-full bg-gradient-to-r from-body/80 to-transparent/5 backdrop-blur-3xl'>
      <div className='mx-auto flex w-full max-w-screen-xl items-center justify-between space-x-4 p-4'>
        <Link
          href={"/"}
          className='bg-gradient-to-r from-accent via-accent-hover to-accent-caption bg-clip-text font-logo text-4xl font-black uppercase leading-none tracking-wide text-fill-transparent'
        >
          filmfrenzy
        </Link>
        {/* Mobile */}
        <nav className='flex gap-4 lg:hidden'>
          <Searchbar />
          <MobileNavigation />
        </nav>
        {/* Desktop */}
        <nav className='hidden w-full justify-between lg:flex'>
          <SearchForm variant={"desktop"} />
          {/* Navigation */}
          <NavigationMenu />
        </nav>
      </div>
    </header>
  );
};

export default Header;
