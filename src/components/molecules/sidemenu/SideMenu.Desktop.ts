import styled from "styled-components";

interface SideMenuContainerProps {
  isHover: boolean;
}

export const SideMenuStyles = {
  Container: styled.div<SideMenuContainerProps>`
    position: absolute;
    width: 68px;
    height: 100%;
    flex-grow: 0;
    justify-content: flex-start;
    align-items: flex-start;
    box-shadow: 0 6px 12px 0 rgba(28, 39, 49, 0.05);
    background-color: #fff;
    z-index: 100;

    transition: width 0.3s ease-in-out;

    ${({ isHover }) => {
      if (isHover) {
        return `
          width: 240px;
        `;
      }
    }}
  `,
};
