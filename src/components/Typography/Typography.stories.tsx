import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Typography } from "./Typography";
import { View } from "react-native";

export default {
  title: "components/Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>;

export const Basic: ComponentStory<typeof Typography> = () => {
  return (
    <View style={{ backgroundColor: "lightgray" }}>
      <Typography color="black">Hello world</Typography>
      <Typography color="blue">Hello world</Typography>
      <Typography color="error">Hello world</Typography>
      <Typography color="gray">Hello world</Typography>
      <Typography color="white">Hello world</Typography>
    </View>
  );
};
