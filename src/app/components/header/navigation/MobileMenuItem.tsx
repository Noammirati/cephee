import Link from "next/link";
import { IMenuItemNavigation } from "./menuData";
import { useState } from "react";
import Image from "next/image";
import styles from "./navigation.module.css";

interface Props {
  item: IMenuItemNavigation;
  handleClick: Function;
}

function MobileMenuItem(props: Props) {
  const item = props.item;
  const [displaySubmenu, setDisplaySubmenu] = useState(false);
  return (
    <>
      {item.submenu ? (
        <li
          className={`MobileMenuItem ${styles.MobileMenuItem} ${
            displaySubmenu
              ? styles.MobileMenuItem__open
              : styles.MobileMenuItem__close
          }`}
        >
          <span
            className={styles.MobileMenuItem__label}
            role="button"
            aria-haspopup="menu"
            aria-expanded={displaySubmenu ? "true" : "false"}
            onClick={() => setDisplaySubmenu(!displaySubmenu)}
          >
            {!displaySubmenu && (
              <Image
                src="/dropdown.svg"
                alt="Dropdown menu icon"
                height={18}
                width={18}
              />
            )}
            {item.label}
          </span>
          <ul
            className={`${styles.MobileMenuItem__submenu} ${
              displaySubmenu
                ? styles.MobileMenuItem__submenu_open
                : styles.MobileMenuItem__submenu_close
            }`}
          >
            {item.submenu.map((item, index) => (
              <MobileMenuItem
                item={item}
                key={index}
                handleClick={() => props.handleClick()}
              />
            ))}
          </ul>
        </li>
      ) : (
        <li className={`MobileMenuItem ${styles.MobileMenuItem}`}>
          <Link
            className={styles.MobileMenuItem__label}
            href={item.urlTo}
            onClick={() => props.handleClick()}
          >
            {item.label}
          </Link>
        </li>
      )}
    </>
  );
}

export default MobileMenuItem;
