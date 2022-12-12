import React from "react";
import { Path } from "react-native-svg";
import { COLOR_TEXT_WHITE } from "../../colors";
import { BaseSvgIcon } from "../BaseSvgIcon";
import { IconProps } from "../icons.types";

export const ShoppingBagIcon = (props: IconProps) => (
  <BaseSvgIcon width={25} height={25} {...props}>
    <Path
      d="M8.69843 18.825C7.65372 18.825 6.80845 19.68 6.80845 20.725C6.80845 21.77 7.65372 22.625 8.69843 22.625C9.74314 22.625 10.5979 21.77 10.5979 20.725C10.5979 19.68 9.74314 18.825 8.69843 18.825ZM3 4.575C3 5.0975 3.42738 5.525 3.94974 5.525H4.89948L8.31854 12.7355L7.03639 15.0535C6.34308 16.3265 7.25483 17.875 8.69843 17.875H19.1456C19.6679 17.875 20.0953 17.4475 20.0953 16.925C20.0953 16.4025 19.6679 15.975 19.1456 15.975H8.69843L9.74314 14.075H16.8187C17.531 14.075 18.1578 13.6855 18.4807 13.0965L21.8808 6.931C21.9608 6.787 22.0019 6.6246 21.9999 6.45985C21.998 6.29511 21.953 6.13373 21.8695 5.9917C21.7861 5.84966 21.667 5.73189 21.524 5.65004C21.3811 5.56818 21.2192 5.52508 21.0545 5.525H6.9984L6.36207 4.1665C6.28574 4.00434 6.16481 3.86729 6.01343 3.77139C5.86205 3.67549 5.68649 3.62471 5.50731 3.625H3.94974C3.42738 3.625 3 4.0525 3 4.575V4.575ZM18.1958 18.825C17.1511 18.825 16.3058 19.68 16.3058 20.725C16.3058 21.77 17.1511 22.625 18.1958 22.625C19.2405 22.625 20.0953 21.77 20.0953 20.725C20.0953 19.68 19.2405 18.825 18.1958 18.825Z"
      fill={props.color || COLOR_TEXT_WHITE}
      fillRule="evenodd"
    />
  </BaseSvgIcon>
);
