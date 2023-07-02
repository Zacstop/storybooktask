import { Meta, StoryObj } from "@storybook/react";
import  SectionForm  from "./SectionForm";

const meta = {
  title: "modal/SectionForm",
  component: SectionForm,
  tags: ["autodocs"],
  argTypes: {},
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    pageTitle: "1 페이지",

  }
}
