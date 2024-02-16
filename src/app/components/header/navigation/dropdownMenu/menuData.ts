export interface IMenuData {
  navigation: IMenuItem[];
  CTAs: IMenuItem[];
}

export interface IMenuItem {
  urlTo: string;
  label: string;
}

export interface IMenuItemNavigation extends IMenuItem {
  submenu?: IMenuItem[];
}

export interface IMenuItemCTA extends IMenuItem {
  CTAType: EMenuItemCTA;
}

export enum EMenuItemCTA {
  Primary,
  Secondary,
}

export const menuData = {
  navigation: [
    {
      urlTo: "#",
      label: "À propos",
    },
    {
      urlTo: "#",
      label: "Événements",
      submenu: [
        {
          urlTo: "#",
          label: "Tous les événements",
          submenu: [
            {
              urlTo: "#",
              label: "Tous les événements 1",
            },
            {
              urlTo: "#",
              label: "Tous les événements 1",
              submenu: [
                {
                  urlTo: "#",
                  label: "Tous les événements 11",
                },
                {
                  urlTo: "#",
                  label: "Tous les événements 12",
                },
                {
                  urlTo: "#",
                  label: "Tous les événements 13",
                },
              ],
            },
            {
              urlTo: "#",
              label: "Le dimanche",
            },
          ],
        },
        {
          urlTo: "#",
          label: "Les goûters",
          submenu: [
            {
              urlTo: "#",
              label: "Les goûters 1",
            },
            {
              urlTo: "#",
              label: "Les goûters 2",
            },
            {
              urlTo: "#",
              label: "Les goûters 3",
            },
          ],
        },
        {
          urlTo: "#",
          label: "Le dimanche",
        },
      ],
    },
    {
      urlTo: "#",
      label: "les Artistes",
      submenu: [
        {
          urlTo: "#",
          label: "Spoul",
        },
        {
          urlTo: "#",
          label: "Le Mathou",
        },
        {
          urlTo: "#",
          label: "Capux",
        },
      ],
    },
  ],
  CTAs: [
    {
      CTAType: EMenuItemCTA.Secondary,
      urlTo: "#",
      label: "Nous aider",
    },
    {
      CTAType: EMenuItemCTA.Secondary,
      urlTo: "#",
      label: "Nous contacter",
    },
    {
      CTAType: EMenuItemCTA.Primary,
      urlTo: "#",
      label: "Jotform",
    },
  ],
};
