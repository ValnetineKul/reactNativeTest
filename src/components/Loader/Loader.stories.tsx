import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Loader } from "./Loader";

export default {
  title: "components/Loader",
  component: Loader,
} as ComponentMeta<typeof Loader>;

export const Basic: ComponentStory<typeof Loader> = (args) => {
  return <Loader {...args} />;
};

Basic.args = {
  fullScreen: true,
};
