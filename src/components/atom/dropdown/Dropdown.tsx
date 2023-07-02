import React, { useState, useEffect, useRef } from "react";
import { DropdownDesktop } from "./Dropdown.Desktop";
import { ChevronDown } from "../../../assets/iconts";

interface MenuList {
  id: string;
  name: string;
}

interface Props {
  selectedMenu?: string;
  menuList: MenuList[];
  onClick?: (id: string) => void;
}

const Dropdown = ({
  selectedMenu = "상태 전체",
  menuList,
  onClick,
}: Props) => {
  const [isMenuListOpen, setIsMenuListOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsMenuListOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <DropdownDesktop.Container
      ref={dropdownRef}
      onClick={() => {
        setIsMenuListOpen((value) => !value);
      }}
    >
      <DropdownDesktop.SelectWrapper>
        {selectedMenu}
      </DropdownDesktop.SelectWrapper>
      <ChevronDown />

      {isMenuListOpen && (
        <DropdownDesktop.MenuListContainer>
          {menuList.map(({ id, name }) => {
            return (
              <DropdownDesktop.MenuListItem
                key={id}
                isSelected={false}
                onClick={(e) => {
                  e.stopPropagation();
                  onClick && onClick(id);
                  setIsMenuListOpen(false);
                }}
              >
                {name}
              </DropdownDesktop.MenuListItem>
            );
          })}
        </DropdownDesktop.MenuListContainer>
      )}
    </DropdownDesktop.Container>
  );
};

export default Dropdown;
