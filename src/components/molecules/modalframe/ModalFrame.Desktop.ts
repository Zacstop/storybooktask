import styled from "styled-components";

export const ModalFrameDesktop = {
  BackgroundContainer: styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(0, 0, 0, 0.4);
  `,

  Container: styled.div`
    width: 100%;
    max-width: 680px;
    flex-grow: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    padding: 48px 34px;
    border-radius: 4px;
    box-shadow: 0 2px 6px 0 rgba(28, 39, 49, 0.08);
    border-top: solid 8px #1a75ff;
    background-color: #fff;
  `,

  Title: styled.div`
    width: 600px;
    height: 44px;
    flex-grow: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px;

    span {
      font-size: 24px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.33;
      letter-spacing: normal;
      text-align: left;
      color: #101828;
    }

    button {
      width: 30px;
      height: 30px;
      flex-grow: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background-color: #fff;

      &:hover {
        background-color: #f2f2f2;
      }
    }
  `,

  Wrapper: styled.div`
    width: 600px;
    flex-grow: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
    padding: 10px;
    border: solid 1px #dadada;
  `,

  ButtonGroup: styled.div`
    width: 600px;
    height: 44px;
    flex-grow: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    padding: 0;
    background-color: #fff;
  `,
};
