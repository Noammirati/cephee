import { IMenuItemNavigation } from "./menuData";
import Link from "next/link";
import Image from "next/image";
import { useContext, useState } from "react";
import { NavbarContext } from "./NavbarContext";

interface Props {
  item: IMenuItemNavigation;
  id: number;
}

function MenuItem(props: Props) {
  const item = props.item;
  const navContext = useContext(NavbarContext);
  const [tabOpen, setTabOpen]: [number | null, Function] = useState(null);
  const [displaySubmenu, setDisplaySubmenu] = useState(false);
  const [hover, setHover] = useState(false);

  const handleClick = () => {
    const open = isOpen();
    navContext.handleTab(open ? null : props.id);
    setTabOpen(open ? tabOpen : null);
    setDisplaySubmenu(!open);
  };

  const isOpen = () => {
    return displaySubmenu && props.id === navContext.tabOpen;
  };

  return (
    <>
      {item.submenu ? (
        <li
          className="MenuItem"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {item.submenu && (
            <>
              <span
                className="flex items-center"
                role="button"
                aria-haspopup="menu"
                aria-expanded={isOpen() ? "true" : "false"}
                onClick={() => handleClick()}
              >
                {item.label}
                <Image
                  className={hover ? "visible" : "invisible"}
                  src="/dropdown.svg"
                  alt="prout"
                  height={18}
                  width={18}
                />
              </span>
              <ul
                className={`dropdown ${
                  navContext.level > 0 ? "dropdown-items" : ""
                } ${isOpen() ? "absolute" : "hidden"}`}
              >
                <NavbarContext.Provider
                  value={{
                    level: navContext.level + 1,
                    tabOpen: isOpen() ? tabOpen : null,
                    handleTab: (tab: number | null) => setTabOpen(tab),
                  }}
                >
                  {item.submenu.map((item, index) => (
                    <MenuItem item={item} key={index} id={index} />
                  ))}
                </NavbarContext.Provider>
              </ul>
            </>
          )}
        </li>
      ) : (
        <li>
          <Link href={item.urlTo}>{item.label}</Link>
        </li>
      )}
    </>
  );
}

export default MenuItem;
