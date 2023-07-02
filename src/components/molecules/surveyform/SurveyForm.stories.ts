import type { Meta, StoryObj } from "@storybook/react";
import { SurveyForm } from "../surveyform";

const meta = {
  title: "modal/SurveyForm",
  component: SurveyForm,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof SurveyForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
