import type { Meta, StoryObj } from "@storybook/react";
import { InputImage } from "../../index";

const meta = {
  title: "input/InputImage",
  component: InputImage,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof InputImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    setFile: () => {}
    // label: "각각 그룹",
    // notValid: true,
    // description: "이름을 입력해주세요",
  },
};
