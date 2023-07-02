import styled from "styled-components";
import { ActiveMenuStyle } from "./SideMenuItem.styles";

interface SideMenuItemProps {
  isCurrentPath?: boolean;
  isSubMenu: boolean;
  isHover: boolean;
}

interface SideMenuTitleProps {
  isHover: boolean;
}

export const SideMenuItemStyles = {
  Container: styled.div<SideMenuItemProps>`
    flex-grow: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    cursor: pointer;

    ${({ isSubMenu }) => {
      if (!isSubMenu) {
        return `
          padding: 0.60rem 1.5rem;
        `;
      } else {
        return `
          padding: 0.60rem 1.5rem 0.60rem 3.25rem;
        `;
      }
    }}

    ${({ isCurrentPath }) => {
      if (isCurrentPath) {
        return ActiveMenuStyle;
      }
    }}

    object-fit: contain;

    &:hover {
      ${ActiveMenuStyle}
    }
  `,

  TitleContainer: styled.div`
    height: 20px;
    display: flex;
    align-items: center;
    gap: 12px;
  `,

  Title: styled.p<SideMenuTitleProps>`
    font-family: Inter;
    font-size: 0.875rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: left;
    color: #344051;

    transition: visibility 0s 0.3s, opacity 0.3s linear;

    ${({ isHover }) => {
      if (isHover) {
        return `
          width: 160px;
          opacity: 1;
          visibility: visible;
    `;
      } else {
        return `
          width: 0px;
          opacity: 0;
          visibility: hidden;
          transition: visibility 0s 0.3s, opacity 0.3s linear, width 0.55s linear;
    `;
      }
    }}
  `,
};
