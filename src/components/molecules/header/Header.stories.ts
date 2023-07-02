import type { Meta, StoryObj } from "@storybook/react";

import Header from "./Header";

const meta = {
  title: "header/Header",
  component: Header,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "GSK_트렐리지200엘립타 PMS(219293)_1",
  },
};
