import React from "react";
import { SearchBoxDesktop } from "./SearchBox.Desktop";
import { Search } from "../../../assets/iconts";

interface Props {
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ placeholder, onChange }: Props) => {
  return (
    <SearchBoxDesktop.Container>
      <SearchBoxDesktop.Icon>
        <Search />
      </SearchBoxDesktop.Icon>
      <SearchBoxDesktop.Input
        placeholder={placeholder}
        onChange={onChange}
      />
    </SearchBoxDesktop.Container>
  );
};

export default SearchBox;
