import React from "react";
import { InputStyle } from "./InputBox.Desktop";

interface Props {
  label?: string;
  notValid?: boolean;
  isDescription?: boolean;
  value?: string;
  description?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputBox = ({
  label,
  notValid = true,
  isDescription = false,
  value,
  description,
  placeholder,
  onChange,
}: Props) => {
  return (
    <InputStyle.Container>
      {label && <InputStyle.Label>{label}</InputStyle.Label>}
      <InputStyle.InputContainer notValid={notValid}>
        <InputStyle.Input
          type="text"
          placeholder={placeholder}
          onChange={onChange}
          defaultValue={value}
        />
      </InputStyle.InputContainer>
      {isDescription && (
        <InputStyle.Validation>{description}</InputStyle.Validation>
      )}
    </InputStyle.Container>
  );
};

export default InputBox;
