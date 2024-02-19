import { IMenuItemCTA, EMenuItemCTA } from "./menuData";
import Link from "next/link";

interface Props {
  item: IMenuItemCTA;
}

function MenuItemCTA(props: Props) {
  const item = props.item;
  return (
    <li
      className={`MenuItem ${
        item.CTAType === EMenuItemCTA.Primary
          ? "button-primary mx-2"
          : item.CTAType === EMenuItemCTA.Secondary
          ? "button-secondary mx-2"
          : ""
      }`}
    >
      <Link href={item.urlTo}>{item.label}</Link>
    </li>
  );
}

export default MenuItemCTA;
