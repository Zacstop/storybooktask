import React from "react";
import { SideMenuItemStyles } from "./SideMenuItem.Desktop";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

interface Props {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  path: string;
  isHover: boolean;
  isSubMenu?: boolean;
  setIsModal?: React.Dispatch<React.SetStateAction<boolean>>;
  onClick?: () => void;
}

const SideMenuItem = ({
  Icon,
  title,
  path,
  isHover,
  isSubMenu = false,
  onClick,
}: Props) => {
  const location = useLocation();

  const isCurrentPath = location.pathname === path;

  return (
    <Link to={path}>
      <SideMenuItemStyles.Container
        isSubMenu={isSubMenu}
        isCurrentPath={isCurrentPath}
        isHover={isHover}
        onClick={onClick}
      >
        <SideMenuItemStyles.TitleContainer>
          <Icon />
          <SideMenuItemStyles.Title isHover={isHover}>
            {title}
          </SideMenuItemStyles.Title>
        </SideMenuItemStyles.TitleContainer>
      </SideMenuItemStyles.Container>
    </Link>
  );
};

export default SideMenuItem;
