import React from "react";
import { Meta } from "@storybook/react";

import ActivitiesGroupComponent from "../components/ActivitiesGroup";

export default {
  title: "Card",
} as Meta;

export const ActivitiesGroup = (): JSX.Element => <ActivitiesGroupComponent />;
