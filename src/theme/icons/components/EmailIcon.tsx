import React from "react";
import { Path } from "react-native-svg";
import { COLOR_TEXT_BLUE } from "../../colors";
import { BaseSvgIcon } from "../BaseSvgIcon";
import { IconProps } from "../icons.types";

export const EmailIcon = (props: IconProps) => (
  <BaseSvgIcon width={25} height={25} {...props}>
    <Path
      d="M19.3 6.5H5.7C4.765 6.5 4.0085 7.265 4.0085 8.2L4 18.4C4 19.335 4.765 20.1 5.7 20.1H19.3C20.235 20.1 21 19.335 21 18.4V8.2C21 7.265 20.235 6.5 19.3 6.5ZM19.3 9.9L12.5 14.15L5.7 9.9V8.2L12.5 12.45L19.3 8.2V9.9Z"
      fill={props.color || COLOR_TEXT_BLUE}
    />
  </BaseSvgIcon>
);
