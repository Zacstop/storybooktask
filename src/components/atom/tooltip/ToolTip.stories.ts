import type { Meta, StoryObj } from "@storybook/react";
import ToolTip from "./ToolTip";

const meta = {
  title: "ToolTip",
  component: ToolTip,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ToolTip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: "This is a tooltip",
  },
};
