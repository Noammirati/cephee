"use client";

import { IMenuItemNavigation } from "./menuData";
import Link from "next/link";
import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";
import { NavbarContext } from "./NavbarContext";
import styles from "./navigation.module.css";

interface Props {
  item: IMenuItemNavigation;
  id: number;
}

function MenuItem(props: Props) {
  const item = props.item;
  const navContext = useContext(NavbarContext);
  const [tabOpen, setTabOpen]: [number | null, Function] = useState(null);
  const [displaySubmenu, setDisplaySubmenu] = useState(false);
  let ref = useRef();

  const handleClick = () => {
    const open = isOpen();
    navContext.setTabId(open ? null : props.id);
    setTabOpen(open ? tabOpen : null);
    setDisplaySubmenu(!open);
  };

  const isOpen = () => {
    return displaySubmenu && props.id === navContext.tabId;
  };

  useEffect(() => {
    const handler = (event: { target: any }) => {
      if (
        displaySubmenu &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        setDisplaySubmenu(false);
        navContext.setTabId(null);
        setTabOpen(null);
        setDisplaySubmenu(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [displaySubmenu, navContext]);

  return (
    <li className={`MenuItem ${styles.MenuItem}`}>
      {item.submenu ? (
        <>
          <span
            className={styles.MenuItem__label}
            role="button"
            aria-haspopup="menu"
            aria-expanded={isOpen() ? "true" : "false"}
            onClick={() => handleClick()}
          >
            {item.label}
            <Image
              className={styles.MenuItem__dropdownIcon}
              src="/dropdown.svg"
              alt="Dropdown menu icon"
              height={18}
              width={18}
            />
          </span>
          <ul
            className={`${styles.MenuItem__dropdownTab} ${
              navContext.level === 0
                ? styles.MenuItem__dropdownTab_under
                : styles.MenuItem__dropdownTab_nextTo
            }
            ${
              isOpen()
                ? styles.MenuItem__dropdownTab_open
                : styles.MenuItem__dropdownTab_close
            }`}
          >
            <NavbarContext.Provider
              value={{
                level: navContext.level + 1,
                tabId: isOpen() ? tabOpen : null,
                setTabId: (tabId) => setTabOpen(tabId),
              }}
            >
              {item.submenu.map((item, index) => (
                <MenuItem item={item} key={index} id={index} />
              ))}
            </NavbarContext.Provider>
          </ul>
        </>
      ) : (
        <Link className={styles.MenuItem__label} href={item.urlTo}>
          {item.label}
        </Link>
      )}
    </li>
  );
}

export default MenuItem;
