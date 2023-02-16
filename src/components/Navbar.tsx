import { useState } from 'react'
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx'
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)

  const menuItems = [
    { to: '/movies', text: 'Movies' },
    { to: '/tvshows', text: 'Tv Shows' },
    { to: '/upcomming', text: 'Up Comming' }
  ]

  const toggleNavMenu = () => {
    setIsNavbarOpen(prev => !prev)
  }

  return (
    <div className='fixed m-auto flex w-full items-center justify-between bg-gradient-to-r from-[#111]/30 to-transparent/5 py-4 px-8'>
      <Link to='/'>
        <h1 className='bg-gradient-to-r from-[#A20025] via-[#F40009] to-[#FFB500] bg-clip-text font-logo text-4xl font-black tracking-widest text-fill-transparent'>
          FILMFRENZY
        </h1>
      </Link>
      <button
        className='z-10 block h-8 w-8 xl:hidden'
        onClick={toggleNavMenu}
        aria-label='Toggle navigation menu'
        aria-expanded={isNavbarOpen}>
        {isNavbarOpen ? (
          <RxCross1 className='h-full w-full' />
        ) : (
          <RxHamburgerMenu className='h-full w-full' />
        )}
      </button>
      <nav className='hidden flex-1 justify-between xl:flex'>
        <div className='ml-12 flex items-center gap-8'>
          {menuItems.map(item => (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'border-b-2 border-b-neutral-200 font-bold'
                  : 'border-b-2 border-b-transparent font-bold hover:border-b-neutral-200'
              }
              key={item.to}
              to={item.to}
              aria-current='page'>
              {item.text}
            </NavLink>
          ))}
          <div className='relative'>
            <input
              className='border-b border-b-neutral-200 bg-transparent px-4 placeholder-neutral-200 placeholder:italic'
              type='text'
              aria-label='Search movies and tv shows'
              aria-placeholder='Search for Movies and TV Shows'
              placeholder='Search title here'
            />
            <HiOutlineMagnifyingGlass className='absolute top-1 right-1' />
          </div>
        </div>
        <div className='flex gap-2'>
          <button
            className='rounded-md bg-button px-4 py-2 font-semibold ring-[#FFB500] duration-500 hover:bg-button_hover hover:ring-1'
            aria-label='Sign In button'>
            Sign In
          </button>
          <button
            className='rounded-md bg-button px-4 py-2 font-semibold ring-[#FFB500] duration-500 hover:bg-button_hover hover:ring-1'
            aria-label='Sign Up button'>
            Sign Up
          </button>
        </div>
      </nav>
      {/* mobile menu */}
      <nav
        className={
          isNavbarOpen
            ? 'fixed top-0 right-0 flex h-screen w-full flex-col items-center gap-y-10 bg-red-500 duration-200 ease-in-out'
            : 'fixed top-0 -right-full flex h-screen w-full flex-col items-center gap-y-10 bg-red-500 duration-200 ease-in-out'
        }>
        <div className='flex flex-col items-center gap-8 pt-24'>
          {menuItems.map(item => (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'border-b-2 border-b-neutral-200 font-bold'
                  : 'border-b-2 border-b-transparent font-bold hover:border-b-neutral-200'
              }
              key={item.to}
              to={item.to}
              aria-current='page'
              onClick={toggleNavMenu}>
              {item.text}
            </NavLink>
          ))}
          <div className='relative'>
            <input
              className='border-b border-b-neutral-200 bg-transparent px-4 placeholder-neutral-200 placeholder:italic'
              type='text'
              aria-label='Search movies and tv shows'
              aria-placeholder='Search for Movies and TV Shows'
              placeholder='Search title here'
            />
            <HiOutlineMagnifyingGlass className='absolute top-1 right-1' />
          </div>
        </div>
        <div className='flex gap-2'>
          <button
            className='rounded-md bg-button px-4 py-2 font-semibold ring-[#FFB500] duration-500 hover:bg-button_hover hover:ring-1'
            aria-label='Sign In button'>
            Sign In
          </button>
          <button
            className='rounded-md bg-button px-4 py-2 font-semibold ring-[#FFB500] duration-500 hover:bg-button_hover hover:ring-1'
            aria-label='Sign Up button'>
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  )
}
