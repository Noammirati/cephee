import { createContext } from "react";

export const NavbarContext = createContext({
  level: 0,
  tabId: null,
  setTabId: (tabId: number | null) => {
    tabId; // set TabId;
  },
});
