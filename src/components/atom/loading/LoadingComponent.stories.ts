import type { Meta, StoryObj } from "@storybook/react";
import LoadingComponent from "./LoadingComponent";

const meta = {
  title: "lading/LoadingComponent",
  component: LoadingComponent,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof LoadingComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
