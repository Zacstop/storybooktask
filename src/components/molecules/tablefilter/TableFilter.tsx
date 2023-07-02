import React from "react";
import { TableFilterDesktop } from "./TableFilter.Desktop";

interface FilterProps {
  children: React.ReactNode;
}
const TableFilter: React.FC<FilterProps> = (FilterProps) => {
  return (
    <TableFilterDesktop.Container>
      {FilterProps.children}
    </TableFilterDesktop.Container>
  );
};

export default TableFilter;
