import React from "react";
import { CheckBoxDesktop } from "./CheckBox.Desktop";

interface CheckBoxProps {
  label: string;
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  children?: React.ReactNode;
}

const CheckBox: React.FC<CheckBoxProps> = ({ label, id, checked, onChange }) => {
  const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };


  return (
    <CheckBoxDesktop.Container>
      <CheckBoxDesktop.CheckBox
        id={id}
        checked={checked}
        onChange={handleCheckChange}
      />
      <CheckBoxDesktop.Label htmlFor={id}>{label}</CheckBoxDesktop.Label>
    </CheckBoxDesktop.Container>
  );
};

CheckBox.defaultProps = {
  label: "Default Label",
}
export default CheckBox;
