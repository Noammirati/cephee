import { useState } from "react";
import { menuData } from "./menuData";
import MenuItem from "./MenuItem";
import MenuItemCTA from "./MenuItemCTA";
import { NavbarContext } from "./NavbarContext";

function Navbar() {
  const [tabOpen, setTabOpen]: [number | null, Function] = useState(null);

  return (
    <NavbarContext.Provider
      value={{
        level: 0,
        tabOpen: tabOpen,
        handleTab: (tab: number | null) => setTabOpen(tab),
      }}
    >
      <nav className="Navbar flex w-full items-start justify-between fs-300">
        <ul className="flex w-full items-start justify-start gap-12 pt-4">
          {menuData.navigation?.map((item, index) => {
            return <MenuItem item={item} key={index} id={index} />;
          })}
        </ul>
        <ul className="flex w-full items-center justify-end px-2">
          {menuData.CTAs?.map((item, index) => {
            return <MenuItemCTA item={item} key={index} />;
          })}
        </ul>
      </nav>
    </NavbarContext.Provider>
  );
}

export default Navbar;
