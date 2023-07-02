import type { Meta, StoryObj } from "@storybook/react";

import InputBox from "./InputBox";

const meta = {
  title: "input/InputBox",
  component: InputBox,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof InputBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "각각 그룹",
    notValid: true,
    isDescription: false,
    description: "이름을 입력해주세요",
  },
};
