"use client";
import { useNavigationEvent } from "@/hooks/useNavigationEvent";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";
import NavigationMenu from "../NavigationMenu";

const MobileNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const navMenuRef = useRef<HTMLDivElement | null>(null);

  const toggleNavigationMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useOutsideClick(navMenuRef, () => {
    setIsMenuOpen(false);
  });

  useNavigationEvent(setIsMenuOpen);

  return (
    <>
      <button onClick={toggleNavigationMenu} className='h-6 w-6 leading-none'>
        {isMenuOpen ? <XMarkIcon /> : <Bars3Icon />}
      </button>
      <nav
        ref={navMenuRef}
        className={`fixed top-[68px] flex max-h-screen w-full justify-center bg-body/80 p-4 transition-all duration-500 ease-in-out lg:hidden
        ${isMenuOpen ? "right-0 animate-contentShown" : "-right-full"}
        `}
      >
        <NavigationMenu />
      </nav>
    </>
  );
};

export default MobileNavigation;
