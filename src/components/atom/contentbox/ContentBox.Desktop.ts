import styled from "styled-components";

export const ContentBoxDesktop = {
  Container: styled.div`
    flex-grow: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    border-radius: 7.6px;
    border: solid 0.9px #ced2da;
    background-color: #fff;
    box-shadow: 0 2px 4px -2px rgba(16, 24, 40, 0.06),
      0 4px 8px -2px rgba(16, 24, 40, 0.1);

    cursor: pointer;

    &:hover {
      background-color: #f8f9fa;
    }
  `,

  ContentWrapper: styled.div`
    width: 100%;
    height: 25%;
    flex-grow: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-top: solid 0.6px #97a1af;
  `,

  Content: styled.div`
    flex-grow: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8.3px;
    padding-left: 12.7px;

    h3 {
      font-size: 19.9px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 0.83;
      letter-spacing: normal;
      text-align: left;
      color: #344051;
    }

    p {
      font-size: 14.9px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.11;
      letter-spacing: normal;
      text-align: left;
      color: #8b98a6;
    }
  `,

  MoreButton: styled.button`
    border: none;
    outline: none;
    background-color: transparent;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;

    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #d9d9d9;
    }
  `,
};
