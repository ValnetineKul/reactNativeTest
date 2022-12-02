import React, { PropsWithChildren } from "react";
import Svg from "react-native-svg";
import { BaseSvgProps } from "./BaseSvgIcon.types";

export const BaseSvgIcon = ({
  width,
  height,
  children,
}: PropsWithChildren<BaseSvgProps>) => (
  <Svg width={width} height={height}>
    {children}
    {/* <Path d="M0 0h48v1H0z" fill="#063855" fillRule="evenodd" /> */}
  </Svg>
);
