"use client";

import { useLayoutEffect, useState } from "react";
import DesktopNavigation from "./desktopNavigation";
import MobileNavigation from "./mobileNavigation";

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

  const links = [
    {
      href: "#",
      label: "à propos",
    },
    {
      href: "#",
      label: "événement",
    },
    {
      href: "#",
      label: "boutique",
    },
    {
      href: "#",
      label: "les artistes",
    },
    {
      href: "#",
      label: "formulaires artistes",
    },
    {
      href: "#",
      label: "Nous aider",
    },
    {
      href: "#",
      label: "Nous contacter",
    },
  ];

  return (
    <header className="w-full p-2 bg-primary">
      {isMobile ? (
        <MobileNavigation links={links} />
      ) : (
        <DesktopNavigation links={links} />
      )}
    </header>
  );
}

export default Header;
