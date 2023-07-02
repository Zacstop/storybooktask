import styled from "styled-components";

interface InputBoxProps {
  notValid: boolean;
}

export const InputStyle = {
  Container: styled.div`
    flex-grow: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    gap: 4px;
    padding: 0;
    object-fit: contain;
  `,

  Label: styled.div`
    height: 1.25rem;
    flex-grow: 0;
    font-family: Pretendard;
    font-size: 0.875rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    text-align: left;
    color: #344051;
  `,

  InputContainer: styled.div<InputBoxProps>`
    align-self: stretch;
    flex-grow: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    padding: 0.625rem 0.5rem 0.625rem 0.75rem;
    border-radius: 8px;

    ${({ notValid }) => {
      if (notValid) {
        return `
          border: solid 1px #d0d5dd;
        `;
      } else {
        return `
          border: solid 1px #f98686;
        `;
      }
    }}
    background-color: #fff;

    &:hover {
      border: solid 1px #637083;
    }
  `,

  Input: styled.input`
    height: 1.5rem;
    flex-grow: 1;
    font-family: Inter;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: left;
    color: #637083;
  `,
  Validation: styled.div`
    height: 1.25rem;
    align-self: stretch;
    flex-grow: 0;
    font-family: Inter;
    font-size: 0.875rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    text-align: left;
    color: #f64c4c;
  `,
};
