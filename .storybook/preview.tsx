import React from "react";
import type { Preview } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/global";

const preview: Preview = {
  parameters: {
    layout: "fullscreen",
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <>
        <BrowserRouter>
          <GlobalStyle />
          <Story />
        </BrowserRouter>
      </>
    ),
  ],
};

export default preview;
