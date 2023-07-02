import type { Meta, StoryObj } from "@storybook/react";
import TableFilter from "./TableFilter";


const meta = {
  title: "TableFilter",
  component: TableFilter,
  tags: ["autodocs"],
  argTypes: {},
} as Meta<typeof TableFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
