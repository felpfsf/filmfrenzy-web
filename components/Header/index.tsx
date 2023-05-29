import Searchbar from "../Searchbar";

const Header = () => {
  return (
    <header className='fixed z-10 w-full border-b bg-gradient-to-r from-body/80 to-transparent/5'>
      <div className='mx-auto flex w-full max-w-screen-xl items-center justify-between p-4'>
        <h1 className='bg-gradient-to-r from-accent via-accent-hover to-accent-caption bg-clip-text font-logo text-4xl font-black uppercase leading-none tracking-wide text-fill-transparent'>
          filmfrenzy
        </h1>
        <nav>
          <Searchbar />
        </nav>
      </div>
    </header>
  );
};

export default Header;
