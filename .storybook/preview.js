import "../src/styles/index.css";
import "antd/dist/antd.css";

import { addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

addDecorator(withInfo);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
