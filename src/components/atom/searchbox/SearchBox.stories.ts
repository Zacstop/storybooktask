import type { Meta, StoryObj } from "@storybook/react";

import { SearchBox } from "./index";

const meta = {
  title: "input/SearchBox",
  component: SearchBox,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof SearchBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "조사 대상자 번호 검색",
  },
};
