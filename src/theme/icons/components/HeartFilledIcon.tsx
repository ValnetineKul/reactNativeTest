import React from "react";
import { Path } from "react-native-svg";
import { COLOR_TEXT_BLUE } from "../../colors";
import { BaseSvgIcon } from "../BaseSvgIcon";
import { IconProps } from "../icons.types";

export const HeartFilledIcon = (props: IconProps) => (
  <BaseSvgIcon width={25} height={25} {...props}>
    <Path
      d="M21.4074 6.89898C20.6117 5.27936 18.3195 3.95422 15.6531 4.72574C14.379 5.09074 13.2674 5.87349 12.4999 6.9461C11.7323 5.87349 10.6207 5.09074 9.34659 4.72574C6.67432 3.96599 4.38805 5.27936 3.59231 6.89898C2.47589 9.16645 2.93909 11.7166 4.97001 14.4788C6.5615 16.6403 8.83589 18.8312 12.1376 21.3755C12.242 21.4562 12.3705 21.5 12.5028 21.5C12.6352 21.5 12.7637 21.4562 12.868 21.3755C16.1638 18.8371 18.4442 16.6638 20.0357 14.4788C22.0606 11.7166 22.5238 9.16645 21.4074 6.89898V6.89898Z"
      fill={props?.color || COLOR_TEXT_BLUE}
    />
  </BaseSvgIcon>
);
