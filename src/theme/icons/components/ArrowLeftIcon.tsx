import React from "react";
import { Path } from "react-native-svg";
import { COLOR_TEXT_WHITE } from "../../colors";
import { BaseSvgIcon } from "../BaseSvgIcon";
import { IconProps } from "../icons.types";

export const ArrowLeftIcon = (props: IconProps) => (
  <BaseSvgIcon width={25} height={25} {...props}>
    <Path
      d="M11.9323 3L13.4 4.4567L6.93967 10.966H21V13.0339H6.93967L13.4 19.5433L11.9323 21L3 12L11.9323 3Z"
      fill={props?.color || COLOR_TEXT_WHITE}
      fillRule="evenodd"
    />
  </BaseSvgIcon>
);
