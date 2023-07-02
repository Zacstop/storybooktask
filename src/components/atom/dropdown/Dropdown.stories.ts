import type { Meta, StoryObj } from "@storybook/react";

import { Dropdown } from "../../index";

const meta = {
  title: "dropdown/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selectedMenu: "조사 대상자 번호 검색",
    menuList: [
      { id: "1", name: "조사 대상자 번호 검색" },
      { id: "2", name: "조사 대상자 이름 검색" },
    ],
  },
};
