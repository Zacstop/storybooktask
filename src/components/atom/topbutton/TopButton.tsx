import React from "react";
import { TopButtonDesktop } from "./TopButton.Desktop";
import { Union } from "../../../assets/iconts";

interface Props {
  onClick?: () => void;
}

const TopButton = ({ onClick }: Props) => {
  return (
    <TopButtonDesktop.Container onClick={onClick}>
      {/* <Union /> */}🠕
    </TopButtonDesktop.Container>
  );
};

export default TopButton;
