import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "../../index";

const meta = {
  title: "table/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    pageList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    currentPage: 1,
  },
};
