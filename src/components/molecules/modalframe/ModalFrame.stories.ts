import type { Meta, StoryObj } from "@storybook/react";
import { ModalFrame } from "../../index";

const meta = {
  title: "modal/ModalFrame",
  component: ModalFrame,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ModalFrame>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "조사기관 추가",
  },
};
