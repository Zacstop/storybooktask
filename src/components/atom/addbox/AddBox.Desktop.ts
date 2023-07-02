import styled from "styled-components";

export const AddBoxDesktop = {
  Container: styled.div`
    flex-grow: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    box-shadow: 0 2px 8px -2px rgba(16, 24, 40, 0.06),
      0 4px 16px -2px rgba(16, 24, 40, 0.1);
    background-color: #fff;

    cursor: pointer;

    svg {
      transition: transform 0.2s ease-in-out;
      transform: scale(1);
      width: 60px;
    }

    &:hover {
      svg {
        transform: scale(1.2);
      }
    }
  `,
};
