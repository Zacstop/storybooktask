import React from "react";
import { TableDesktop } from "./Table.Desktop";

export type ColumnType = {
  id: string; // 아이디 추가
  title: string;
  columnKey: string;
  width: string;
  type: "text" | "checkbox" | "button";
};

// 타입추가
interface TableRowData {
  [key: string]: string | number | boolean;
}

interface Props {
  columnData: ColumnType[];
  tableData: TableRowData[];
  clickRow?: (rowData: TableRowData) => void;
}

// 헤더 컴포넌트로 분리
const TableHeader = ({
  columnData,
}: {
  columnData: ColumnType[];
}) => (
  <TableDesktop.TableHeader>
    <TableDesktop.TableRow>
      {columnData.map((data) => (
        <TableDesktop.TableHeaderCell
          key={data.id} // unique key 사용
          width={data.width}
        >
          {data.title}
        </TableDesktop.TableHeaderCell>
      ))}
    </TableDesktop.TableRow>
  </TableDesktop.TableHeader>
);

// 바디 컴포넌트로 분리
const TableBody = ({
  columnData,
  tableData,
  clickRow,
}: {
  columnData: ColumnType[];
  tableData: TableRowData[];
  clickRow?: (rowData: TableRowData) => void;
}) => (
  <TableDesktop.TableBody>
    {tableData.map((rowData, rowIndex) => (
      <TableDesktop.TableRow
        onClick={(e) => {
          e.stopPropagation();
          clickRow && clickRow(rowData);
        }}
        key={rowIndex.toString()}
      >
        {columnData.map((column) => (
          <TableDesktop.TableDataCell
            key={column.id} // Use unique id instead of index
            width={column.width}
          >
            {column.type === "checkbox" ? (
              <input
                type="checkbox"
                onClick={(e) => e.stopPropagation()}
                checked={Boolean(rowData[column.columnKey])}
                readOnly
              />
            ) : column.type === "button" ? (
              <button>{rowData[column.columnKey] as string}</button>
            ) : (
              rowData[column.columnKey]
            )}
          </TableDesktop.TableDataCell>
        ))}
      </TableDesktop.TableRow>
    ))}
  </TableDesktop.TableBody>
);

const Table = ({ columnData, tableData, clickRow }: Props) => (
  <TableDesktop.Table>
    <TableHeader columnData={columnData} />
    <TableBody
      columnData={columnData}
      tableData={tableData}
      clickRow={clickRow}
    />
  </TableDesktop.Table>
);

export default Table;
