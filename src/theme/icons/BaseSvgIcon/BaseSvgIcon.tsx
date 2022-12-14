import React, { PropsWithChildren } from "react";
import Svg from "react-native-svg";
import { BaseSvgProps } from "./BaseSvgIcon.types";

export const BaseSvgIcon = ({
  width,
  height,
  children,
  style,
}: PropsWithChildren<BaseSvgProps>) => (
  <Svg width={width} height={height} style={style}>
    {children}
  </Svg>
);
