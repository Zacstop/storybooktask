import type { Meta, StoryObj } from "@storybook/react";
import StatusCard from "./StatusCard";
import { CheckCircle } from "../../../assets/iconts";

const meta = {
  title: "statuscard/StatusCard",
  component: StatusCard,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof StatusCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    Icon: CheckCircle,
    count: "20",
    label: "총 계약건수",
    iconBgColor: "#f2f4f7",
    iconColor: "#00b87c",
  },
};
