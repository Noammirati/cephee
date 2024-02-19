import { createContext } from "react";

export const NavbarContext = createContext({
  level: 0,
  tabOpen: null,
  handleTab: (tab: number | null) => {
    null;
  },
});
