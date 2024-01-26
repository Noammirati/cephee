"use client";
import Link from "next/link";
import Image from "next/image";
import { farmhouse } from "@/app/fonts/fonts";
import { SVGCross, SVGBurger } from "@/icons";
import { useState } from "react";

interface Props {
  links: { href: string; label: string }[];
}

function MobileNavigation(props: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => {
    setMenuOpen(false);
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navLink = (link: { href: string; label: string }) => {
    return (
      <li>
        <Link href={link.href} onClick={(e) => closeMenu()}>
          {link.label}
        </Link>
      </li>
    );
  };

  return (
    <>
      <div className="flex items-center justify-between px-4 capitalize">
        <Link
          href="/"
          className="flex flex-row justify-start"
          onClick={(e) => closeMenu()}
        >
          <div className="flex flex-col items-center justify-center gap-2">
            <div className={`${farmhouse.className} fs-400`}>Céphée</div>
          </div>
          <Image src="/circle-icon.png" width={100} height={100} alt="Céphée" />
        </Link>
        <span className="sr-only">Menu</span>
        <span className="z-50" onClick={(e) => toggleMenu()}>
          {menuOpen ? <SVGCross /> : <SVGBurger />}
        </span>
      </div>
      {menuOpen && (
        <ul
          className={`MobileNavigation f-s500 bg-primary absolute top-0 right-0 p-8 w-full h-full flex flex-col gap-8 items-end justify-end capitalize`}
        >
          {props.links.map((link: { href: string; label: string }) =>
            navLink(link)
          )}
        </ul>
      )}
    </>
  );
}

export default MobileNavigation;
