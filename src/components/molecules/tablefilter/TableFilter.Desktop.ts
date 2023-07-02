import styled from "styled-components";

export const TableFilterDesktop = {
  Container: styled.div`
    width: 100%;
    min-width: 50rem;
    max-width: 75rem;
    flex-grow: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem;
    border-radius: 4px;
    background-color: #f2f4f7;
  `,

  MenuWrapper: styled.div`
    width: 48.375rem;
    height: 2.25rem;
    flex-grow: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 18px;
    padding: 0;
  `,

  SearchWrapper: styled.div`
    width: 24rem;
  `,
};
