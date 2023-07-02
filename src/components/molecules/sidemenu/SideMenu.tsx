import React, { useState } from "react";
import { SideMenuStyles } from "./SideMenu.Desktop";
import SideMenuItem from "./sidemenuitem/SideMenuItem";
import { SVGProps } from "react";

export interface SideMenuType {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
  path: string;
  submenus: SideMenuType[];
}

interface Props {
  sideMenuItems: SideMenuType[];
}

const SideMenu = ({ sideMenuItems }: Props) => {
  const [hover, setHover] = useState(false);
  const [isSubMenu, setIsSubMenu] = useState(
    new Array(sideMenuItems.length).fill(false)
  );

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    const closeSubMenu = new Array(sideMenuItems.length).fill(false);
    setIsSubMenu(closeSubMenu);
    setHover(false);
  };

  const handleSubMenu = (index: number) => {
    const changeSubMenu = isSubMenu.map((item, i) => {
      if (i === index) {
        return !item;
      } else {
        return item;
      }
    });
    setIsSubMenu(changeSubMenu);
  };

  return (
    <SideMenuStyles.Container
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      isHover={hover}
    >
      {sideMenuItems.map(({ Icon, title, path, submenus }, index) => {
        const submenusLength = submenus.length;
        if (submenusLength === 0) {
          return (
            <>
              <SideMenuItem
                key={path}
                Icon={Icon}
                title={title}
                path={path}
                isHover={hover}
              />
            </>
          );
        } else {
          return (
            <>
              <SideMenuItem
                key={path}
                Icon={Icon}
                title={title}
                path={path}
                isHover={hover}
                onClick={() => {
                  handleSubMenu(index);
                }}
              />
              {hover &&
                isSubMenu[index] &&
                submenus.map(({ Icon, title, path }) => {
                  return (
                    <>
                      <SideMenuItem
                        key={path}
                        Icon={Icon}
                        title={title}
                        path={path}
                        isSubMenu={true}
                        isHover={hover}
                      />
                    </>
                  );
                })}
            </>
          );
        }
      })}
    </SideMenuStyles.Container>
  );
};

export default SideMenu;
