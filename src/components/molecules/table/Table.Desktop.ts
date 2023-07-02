import styled from "styled-components";

interface TableHeaderCellProps {
  width: string;
}

export const TableDesktop = {
  Table: styled.table`
    width: 100%;
    min-width: 50rem;
    max-width: 75rem;
    height: 520px;

    display: block;
    overflow-y: auto;

    border-collapse: collapse;
  `,
  TableHeader: styled.thead`
    height: 2.5rem;
    display: block;
    align-items: center;
    border-bottom: solid 1px #97a1af;
    background-color: #f9fafb;
    position: sticky;
    top: 0;
    z-index: 1;
  `,
  TableBody: styled.tbody`
    display: block;
  `,
  TableRow: styled.tr`
    display: table;
    width: 100%;
    table-layout: fixed;

    &:hover {
      background-color: #f9fafb;
    }
  `,
  TableHeaderCell: styled.th<TableHeaderCellProps>`
    width: ${({ width }) => {
      return `${width}%`;
    }};
    text-align: center;
    vertical-align: middle;
    height: 2.5rem;
  `,
  TableDataCell: styled.td`
    height: 40px;
    text-align: center;
    vertical-align: middle;
    border-bottom: solid 1px #e4e7ec;

    font-family: Inter;
    font-size: 0.875rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: normal;
    color: #414e62;
  `,
};
