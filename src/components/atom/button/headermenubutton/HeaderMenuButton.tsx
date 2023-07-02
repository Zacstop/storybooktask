import React from "react";
import { MenuButton } from "./HeaderMenuButton.Desktop";
import MenuIcon from "../../../../assets/iconts/Menu";

interface Props {
  onClick?: () => void;
}

const HeaderMenuButton = ({ onClick }: Props) => {
  return (
    <MenuButton.Container onClick={onClick}>
      <MenuIcon />
    </MenuButton.Container>
  );
};

export default HeaderMenuButton;
