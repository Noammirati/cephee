import { useState } from "react";
import { menuData } from "./menuData";
import MenuItem from "./MenuItem";
import MenuItemCTA from "./MenuItemCTA";
import { NavbarContext } from "./NavbarContext";
import styles from "./navigation.module.css";

function Navbar() {
  const [tabOpenId, setTabOpenId]: [number | null, Function] = useState(null);

  return (
    <NavbarContext.Provider
      value={{
        level: 0,
        tabId: tabOpenId,
        setTabId: (tabId) => setTabOpenId(tabId),
      }}
    >
      <nav className={`Navbar ${styles.Navbar}`}>
        <ul>
          {menuData.navigation?.map((item, index) => {
            return <MenuItem item={item} key={index} id={index} />;
          })}
        </ul>
        <ul>
          {menuData.CTAs?.map((item, index) => {
            return <MenuItemCTA item={item} key={index} />;
          })}
        </ul>
      </nav>
    </NavbarContext.Provider>
  );
}

export default Navbar;
