import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const useNavigationEvent = (callback: (value: boolean) => void) => {
  const pathname = usePathname();

  useEffect(() => {
    callback(false);
  }, [callback, pathname]);
};
