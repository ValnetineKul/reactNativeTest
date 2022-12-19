import React from "react";
import { Path } from "react-native-svg";
import { COLOR_TEXT_BLUE } from "../../colors";
import { BaseSvgIcon } from "../BaseSvgIcon";
import { IconProps } from "../icons.types";

export const ProfileIcon = (props: IconProps) => (
  <BaseSvgIcon width={25} height={25} {...props}>
    <Path
      d="M5.41667 21.5C5.41667 21.5 4 21.5 4 20.0833C4 18.6667 5.41667 14.4167 12.5 14.4167C19.5833 14.4167 21 18.6667 21 20.0833C21 21.5 19.5833 21.5 19.5833 21.5H5.41667ZM12.5 13C13.6272 13 14.7082 12.5522 15.5052 11.7552C16.3022 10.9582 16.75 9.87717 16.75 8.75C16.75 7.62283 16.3022 6.54183 15.5052 5.7448C14.7082 4.94777 13.6272 4.5 12.5 4.5C11.3728 4.5 10.2918 4.94777 9.4948 5.7448C8.69777 6.54183 8.25 7.62283 8.25 8.75C8.25 9.87717 8.69777 10.9582 9.4948 11.7552C10.2918 12.5522 11.3728 13 12.5 13V13Z"
      fill={props?.color || COLOR_TEXT_BLUE}
      fillRule="evenodd"
    />
  </BaseSvgIcon>
);
