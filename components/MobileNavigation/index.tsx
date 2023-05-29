"use client";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";
import NavigationMenu from "../NavigationMenu";

const MobileNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navMenuRef = useRef<HTMLDivElement | null>(null);

  const toggleNavigationMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useOutsideClick(navMenuRef, () => {
    setIsMenuOpen(false);
  });
  return (
    <>
      <button onClick={toggleNavigationMenu} className='h-6 w-6 leading-none'>
        {isMenuOpen ? <XMarkIcon /> : <Bars3Icon />}
      </button>
      <nav
        ref={navMenuRef}
        className={`fixed top-[70px] flex max-h-screen w-full justify-center bg-body p-4 transition-all duration-500 ease-in-out lg:hidden
        ${isMenuOpen ? "right-0 animate-contentShown" : "-right-full"}
        `}
      >
        <NavigationMenu />
      </nav>
    </>
  );
};

export default MobileNavigation;
