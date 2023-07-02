import styled from "styled-components";

export const InputImageDesktop = {
  Label: styled.label`
    flex-grow: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 8px 12px;
    border-radius: 6px;
    border: solid 1px #d0d5dd;

    cursor: pointer;

    &:hover {
      background-color: #f8f9fa;
    }

    span {
      flex-grow: 0;
      font-family: Pretendard;
      font-size: 14px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.43;
      letter-spacing: normal;
      text-align: left;
      color: #475467;
    }
  `,
  InputTag: styled.input`
    display: none;
  `,
};
