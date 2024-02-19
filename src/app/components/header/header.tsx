"use client";

import { useLayoutEffect, useState } from "react";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";
import Navbar from "./navigation/dropdownMenu/Navbar";

function Header() {
  const [isMobile, setIsMobile] = useState(true);

  useLayoutEffect(() => {
    function updateSize() {
      const isMobileQuery = window.matchMedia("(max-width: 35em)");
      setIsMobile(isMobileQuery.matches);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, [setIsMobile]);

  return (
    <header className="w-full p-2">
      {/* {isMobile ? (
        <MobileNavigation links={links} />
      ) : (
        <DesktopNavigation links={links} />
      )} */}
      <Navbar />
    </header>
  );
}

export default Header;
