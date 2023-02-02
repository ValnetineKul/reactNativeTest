import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Card } from "./Card";
import { Text } from "react-native";

export default {
  title: "components/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

export const Basic: ComponentStory<typeof Card> = (args) => {
  return <Card {...args} />;
};

Basic.args = {
  children: <Text>"Hello World"</Text>,
};
