import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Fireworks } from "./Fireworks";

export default {
  title: "components/Fireworks",
  component: Fireworks,
} as ComponentMeta<typeof Fireworks>;

export const Basic: ComponentStory<typeof Fireworks> = (args) => {
  return <Fireworks {...args} />;
};

Basic.args = {
  iterations: 99999999,
};
