import styled from "styled-components";

export const SearchBoxDesktop = {
  Container: styled.div`
    height: 2.25rem;
    flex-grow: 0;
    display: flex;
    align-items: center;
    gap: 10px;
    padding-left: 0.75rem;
    object-fit: contain;
    background-color: #fff;
    border: 1px solid #f2f4f7;
    border-radius: 4px;
  `,

  Icon: styled.div`
    width: 1.25rem;
    height: 1.25rem;
    flex-grow: 0;
    object-fit: contain;
  `,

  Input: styled.input`
    height: 1.25rem;
    flex-grow: 1;
    font-family: Inter;
    font-size: 0.875rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    text-align: left;
    color: #637083;
  `,
};
