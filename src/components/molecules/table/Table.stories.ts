import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "../../index";
import { tableColumnData, tableData } from "./TableDummyData";

const meta = {
  title: "table/Table",
  component: Table,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    columnData: tableColumnData,
    tableData: tableData,
  },
};
