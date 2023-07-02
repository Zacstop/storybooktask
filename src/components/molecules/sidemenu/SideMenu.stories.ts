import type { Meta, StoryObj } from "@storybook/react";
import { sidemenudata } from "./dummydata";
import SideMenu from "./SideMenu";

const meta = {
  title: "sidemenu/SideMenu",
  component: SideMenu,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof SideMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    sideMenuItems: sidemenudata,
  },
};
