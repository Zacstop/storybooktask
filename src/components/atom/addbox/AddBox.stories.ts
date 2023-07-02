import type { Meta, StoryObj } from "@storybook/react";
import AddBox from "./AddBox";

const meta = {
  title: "box/AddBox",
  component: AddBox,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof AddBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
