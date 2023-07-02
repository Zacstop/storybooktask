import type { Meta, StoryObj } from "@storybook/react";
import ContentBox from "./ContentBox";

const meta = {
  title: "box/ContentBox",
  component: ContentBox,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ContentBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "2. 선정, 제외 기준",
    description: "2022-09-18 15:46:05",
  },
};
