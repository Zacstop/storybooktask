import styled from "styled-components";

export const MenuButton = {
  Container: styled.button`
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 7px;
    box-shadow: 0 2px 6px 0 rgba(28, 39, 49, 0.08);
    background-color: #fff;

    svg {
      path {
        stroke: #1a75ff;
      }
    }

    &:hover {
    }
  `,
};
