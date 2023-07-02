import React from "react";
import { HeaderStyle } from "./Header.Desktop";
import HeaderMenuButton from "../../atom/button/headermenubutton/HeaderMenuButton";

interface Props {
  title: string;
  iconGroup?: React.ReactNode;
  userInfo?: React.ReactNode;
  onClickTitle?: () => void;
}

const Header = ({
  title,
  iconGroup,
  userInfo,
  onClickTitle,
}: Props) => {
  return (
    <HeaderStyle.Container>
      <HeaderStyle.WrapperLeft>
        <HeaderMenuButton />
        <HeaderStyle.Title onClick={onClickTitle}>
          {title}
        </HeaderStyle.Title>
      </HeaderStyle.WrapperLeft>
      <HeaderStyle.WrapperRight>
        {iconGroup}
        {userInfo}
      </HeaderStyle.WrapperRight>
    </HeaderStyle.Container>
  );
};

export default Header;
