"use client";
import Link from "next/link";
import Image from "next/image";
import { farmhouse } from "@/app/fonts/fonts";
import { SVGCross, SVGBurger } from "@/icons";
import { useState } from "react";
import { menuData } from "./menuData";
import MenuItemCTA from "./MenuItemCTA";
import MobileMenuItem from "./MobileMenuItem";

function MobileNavigation() {
  const [menuOpen, setMenuOpen] = useState(true);
  const closeMenu = () => {
    setMenuOpen(false);
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  console.log(menuOpen);
  return (
    <>
      <div className="flex items-center justify-between px-4 text-end">
        <Link
          href="/"
          className="flex flex-row justify-start"
          onClick={(e) => closeMenu()}
        >
          <Image
            src="/icons/logo-white.png"
            width={100}
            height={100}
            alt="Céphée"
          />
        </Link>
        <span className="sr-only">Menu</span>
        <span className="z-50" onClick={(e) => toggleMenu()}>
          {menuOpen ? <SVGCross /> : <SVGBurger />}
        </span>
      </div>
      {menuOpen && (
        <nav>
          <ul className="MobileNavigation bg-primary absolute top-0 right-0 p-8 w-full h-full flex flex-col gap-8 items-end justify-end">
            {menuData.navigation?.map((item, index) => (
              <MobileMenuItem
                item={item}
                key={index}
                handleClick={() => closeMenu()}
              />
            ))}
            {menuData.CTAs?.map((item, index) => {
              return <MenuItemCTA item={item} key={index} />;
            })}
          </ul>
        </nav>
      )}
    </>
  );
}

export default MobileNavigation;
