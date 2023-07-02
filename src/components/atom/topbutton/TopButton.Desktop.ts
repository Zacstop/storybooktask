import styled from "styled-components";

export const TopButtonDesktop = {
  Container: styled.div`
    position: fixed;
    right: 2%;
    bottom: 50px;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    z-index: 999;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 30px;
    color: #fff;
    background-color: #f97066;
    user-select: none;
    cursor: pointer;
    box-shadow:  0px 0px 10px 0px #c3c3c3;


    /* flex-grow: 0;
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
    } */
  `,
  topImg: styled.div`
    background-image: url();
  `
};
