"use client";

import { useLayoutEffect, useState } from "react";
import MobileNavigation from "./navigation/MobileNavigation";
import Navbar from "./navigation/Navbar";

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
    <header className="w-full px-2 py-8 bg-primary">
      {isMobile ? <MobileNavigation /> : <Navbar />}
    </header>
  );
}

export default Header;
