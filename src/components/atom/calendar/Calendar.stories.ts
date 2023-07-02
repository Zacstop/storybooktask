import type { Meta, StoryObj } from "@storybook/react";
import { Calendar } from "../../index";

const meta = {
  title: "calendar/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
