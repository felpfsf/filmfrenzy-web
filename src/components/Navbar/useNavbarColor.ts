import { useEffect, useState } from "react";
import { useScroll } from "../../hooks/useScrollPosition";

export const useNavbarColor = (): string => {
  const scrollPosition = useScroll();
  const [navbarColor, setNavbarColor] = useState(
    "bg-gradient-to-r from-[#111]/30 to-transparent/5"
  );

  useEffect(() => {
    if (scrollPosition > 100) {
      setNavbarColor("bg-[#111]");
    } else {
      setNavbarColor("bg-gradient-to-r from-[#111]/30 to-transparent/5");
    }
  }, [scrollPosition]);

  return navbarColor;
};
