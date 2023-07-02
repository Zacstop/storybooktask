import styled from "styled-components";

export const CheckBoxDesktop = {
  Container: styled.div`
    height: 1.5rem;
    flex-grow: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    padding: 0;
    object-fit: contain;
  `,

  CheckBox: styled.input.attrs({ type: 'checkbox' })`
    width: 1.25rem;
    height: 1.25rem;
    flex-grow: 0;
    border-radius: 6px;
    border: solid 1.5px #ced2da;
    background-color: #fff;
  `,

  Label: styled.label`
    flex-grow: 0;
    font-family: Pretendard;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: left;
    color: #344051;
  `,
};
