import { Alarm } from "../../../assets/iconts";
import { SideMenuType } from "./SideMenu";

export const sidemenudata: SideMenuType[] = [
  { Icon: Alarm, title: "알림", path: "/", submenus: [] },
  { Icon: Alarm, title: "알림", path: "/", submenus: [] },
  { Icon: Alarm, title: "알림알림 알림", path: "/", submenus: [] },
  {
    Icon: Alarm,
    title: "알림",
    path: "/",
    submenus: [
      {
        Icon: Alarm,
        title: "알림알림알림알림알림알림",
        path: "/",
        submenus: [],
      },
      {
        Icon: Alarm,
        title: "알림",
        path: "/",
        submenus: [],
      },
      {
        Icon: Alarm,
        title: "알림",
        path: "/",
        submenus: [],
      },
    ],
  },
];
