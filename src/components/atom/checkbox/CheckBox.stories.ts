import { Meta, StoryObj } from "@storybook/react";
import CheckBox from "./CheckBox";

const meta = {
  title: "CheckBox",
  component: CheckBox,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof meta>
