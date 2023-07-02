import styled from "styled-components";

interface PopupDesktopProps {
  popupColor: "success" | "warning" | "error";
}

export const PopupDesktop = {
  Background: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(0, 0, 0, 0.3);
  `,
  Container: styled.div`
    width: 25rem;
    height: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    gap: 32px;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px -2px rgba(16, 24, 40, 0.03),
      0 12px 16px -4px rgba(16, 24, 40, 0.08);
    background-color: #fff;
  `,

  Wrapper: styled.div`
    align-self: stretch;
    flex-grow: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
  `,

  IconWrapper: styled.div<PopupDesktopProps>`
    flex-grow: 0;
    padding: 0.75rem;
    border-radius: 50%;
    ${({ popupColor }) => {
      switch (popupColor) {
        case "success":
          return "border: solid 8px #ecf9f2; background-color: #d9f2e5;";
        case "warning":
          return "border: solid 8px #fff9eb; background-color: #fec;";
        case "error":
          return "border: solid 8px #fee7e7; background-color: #fccfcf;";
      }
    }}

    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      path {
        ${({ popupColor }) => {
          switch (popupColor) {
            case "success":
              return "stroke: #39ac73;";
            case "warning":
              return "stroke: #f5a300;";
            case "error":
              return "stroke: #f20d0d;";
          }
        }}
      }
    }
  `,

  Title: styled.div`
    height: 1.75rem;
    align-self: stretch;
    flex-grow: 0;
    font-size: 1.125rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: normal;
    text-align: center;
    color: #141c24;
  `,

  Description: styled.div`
    height: 1.25rem;
    align-self: stretch;
    flex-grow: 0;
    font-family: Pretendard;
    font-size: 0.875rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    text-align: center;
    color: #202b37;
  `,
};
