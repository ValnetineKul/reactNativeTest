import React from "react";
import { Path } from "react-native-svg";
import { COLOR_TEXT_WHITE } from "../../colors";
import { BaseSvgIcon } from "../BaseSvgIcon";
import { IconProps } from "../icons.types";

export const HeartIcon = (props: IconProps) => (
  <BaseSvgIcon width={25} height={25} {...props}>
    <Path
      d="M15.9311 5.18634L15.9285 5.18708C14.8702 5.49025 13.9486 6.13992 13.3131 7.02804L12.4999 8.1645L11.6866 7.02804C11.0513 6.1402 10.1301 5.49065 9.07218 5.18736C6.84948 4.55588 5.06519 5.66889 4.48983 6.83995L4.48946 6.8407C3.59617 8.65501 3.87493 10.801 5.77528 13.3859M15.9311 5.18634C18.1417 4.54668 19.9328 5.66524 20.5099 6.83995L21.4069 6.39926L20.5103 6.8407C21.4038 8.6555 21.1246 10.8021 19.2292 13.3876L19.2273 13.3901M15.9311 5.18634M19.2273 13.3901C17.7537 15.4133 15.6291 17.4654 12.5029 19.8937M12.5029 19.8937M12.6129 19.8937C9.37464 17.4617 7.25213 15.3915 5.77568 13.3864"
      stroke={props?.color || COLOR_TEXT_WHITE}
      strokeWidth={2}
      fill="none"
    />
  </BaseSvgIcon>
);
