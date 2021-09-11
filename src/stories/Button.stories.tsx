import React from "react";
import { Meta, Story } from "@storybook/react";

import ButtonExample, { ButtonExampleProps } from "../components/ButtonExample";

export default {
  title: "Example/Button",
  component: ButtonExample,
  Args: {
    title: "Button",
  },
} as Meta;

const Template: Story<ButtonExampleProps> = (args) => (
  <ButtonExample {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  color: "#f56",
};
