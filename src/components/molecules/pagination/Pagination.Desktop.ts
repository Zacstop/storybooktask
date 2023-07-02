import styled from "styled-components";

interface PaginationProps {
  currentPage: boolean;
}

export const PaginationDesktop = {
  Container: styled.div`
    width: 100%;
    min-width: 50rem;
    max-width: 75rem;
    flex-grow: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    padding: 0.75rem 1.5rem;
    background-color: #fff;
  `,

  Wrapper: styled.div`
    height: 2.25rem;
    align-self: stretch;
    flex-grow: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,

  PageButton: styled.button`
    flex-grow: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4px;
    padding: 0 0.75rem 0 0.25rem;
    border-radius: 8px;
    background-color: #fff;

    span {
      font-size: 1rem;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.5;
      color: #1a75ff;
    }

    svg {
      path {
        stroke: #1a75ff;
      }
    }
  `,

  PageNumberButtonGroup: styled.div`
    height: 2.25rem;
    flex-grow: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;
  `,

  PageNumberButton: styled.button<PaginationProps>`
    width: 2.25rem;
    height: 2.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background-color: ${({ currentPage }) =>
      currentPage ? "#1a75ff" : "#fff"};

    span {
      font-size: 1rem;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.5;
      letter-spacing: normal;
      text-align: left;
      color: ${({ currentPage }) =>
        currentPage ? "#fff" : "#1a75ff"};
    }

    ${({ currentPage }) => {
      if (currentPage) return ``;
      return `
        &:hover {
          background-color: ${currentPage ? "#1a75ff" : "#f2f2f2"};
        }
      `;
    }}
  `,
};
