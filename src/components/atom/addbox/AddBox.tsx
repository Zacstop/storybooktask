import React from "react";
import { AddBoxDesktop } from "./AddBox.Desktop";
import { Union } from "../../../assets/iconts";

interface Props {
  onClick?: () => void;
}

const AddBox = ({ onClick }: Props) => {
  return (
    <AddBoxDesktop.Container onClick={onClick}>
      <Union />
    </AddBoxDesktop.Container>
  );
};

export default AddBox;
