import type { Meta, StoryObj } from "@storybook/react";
import Popup from "./Popup";

const meta = {
  title: "popup/Popup",
  component: Popup,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Popup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    popupColor: "success",
    title: "Success",
    description: "check",
  },
};
