import styled from "styled-components";

export const DropdownDesktop = {
  Container: styled.div`
    position: relative;
    align-self: stretch;
    flex-grow: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    padding: 0.5rem 0.5rem 0.5rem 0.75rem;
    border-radius: 4px;
    border: solid 1px #e4e7ec;
    background-color: #fff;
  `,

  SelectWrapper: styled.div`
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

    cursor: pointer;
  `,

  MenuListContainer: styled.div`
    position: absolute;
    top: 2.5rem;
    left: -1px;
    width: 100%;
    max-height: 10rem;
    overflow-y: auto;
    border-radius: 4px;
    border: solid 1px #e4e7ec;
  `,

  MenuListItem: styled.div<{ isSelected: boolean }>`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    z-index: 100;
    cursor: pointer;

    padding: 0.5rem 0.75rem;
    font-family: Inter;
    font-size: 0.875rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    text-align: left;
    color: #637083;

    &:hover {
      color: #fff;
      background-color: #99c2ff;
    }

    ${({ isSelected }) => {
      return `
        color: ${isSelected ? "#fff" : "#637083"};
        background-color: ${isSelected ? "#99c2ff" : "#fff"};
      `;
    }}
  `,
};
