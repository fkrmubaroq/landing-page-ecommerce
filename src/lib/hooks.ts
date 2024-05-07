import { useEffect, useState } from "react";
import { DESKTOP_SCREEN } from "./constant";
import { debounce } from "./utils";

export function useMobileScreen() {
  const [isMobileScreen, setMobileScreen] = useState<boolean>(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      const width = window.innerWidth;
      if (width <= DESKTOP_SCREEN) {
        setMobileScreen(true);
        return;
      }
      setMobileScreen(false);
    };
    const debounceCheckScreenWidth = debounce(checkScreenWidth);
    debounceCheckScreenWidth();
    window.addEventListener("resize", debounceCheckScreenWidth);
    return () => {
      console.log("co")
      window.removeEventListener("resize", debounceCheckScreenWidth);
    }
  }, [isMobileScreen]);

  return isMobileScreen
}