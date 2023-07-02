import React from "react";
import { InputImageDesktop } from "./InputImage.Desktop";
import { Photo } from "../../../assets/iconts";

interface Props {
  setFile: React.Dispatch<React.SetStateAction<FormData | undefined>>;
}

const InputImage = ({ setFile }: Props) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const formData = new FormData();

    Array.from(files).forEach((file, index) => {
      formData.append(`file${index + 1}`, file);
    });

    setFile(formData);
  };

  return (
    <>
      <InputImageDesktop.Label htmlFor="input-file">
        <Photo />
        <span>업로드</span>
      </InputImageDesktop.Label>
      <InputImageDesktop.InputTag
        type="file"
        id="input-file"
        onChange={onChange}
        style={{ display: "none" }}
      />
    </>
  );
};

export default InputImage;
