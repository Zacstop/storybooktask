import type { Meta, StoryObj } from "@storybook/react";
import { AlertCircle } from "../../../assets/iconts";
import Button from "./Button";

const meta = {
  title: "button/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "submit",
    Icon: AlertCircle,
    label: "Button",
  },
};
