import type { Meta, StoryObj } from "@storybook/react";
import TopButton from "./TopButton";

const meta = {
  title: "button/TopButton",
  component: TopButton,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof TopButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'top',
    onClick: () => document.documentElement.scrollTop = 0
  },
};


// const moveToTop = () => (document.documentElement.scrollTop = 0);

// $(window).scroll(function() {
//   // top button controll
//   if ($(this).scrollTop() > 500) {
//       $('#topButton').fadeIn();
//   } else {
//       $('#topButton').fadeOut();
//   }
// });
// $(document).ready(function() {
// // Top Button click event handler
// $("#topButtonImg").click(function() {
//   $('html, body').animate({scrollTop:0}, '300');
// });
// });
