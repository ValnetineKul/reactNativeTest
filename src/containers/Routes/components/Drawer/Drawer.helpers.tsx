import { Linking } from "react-native";
import { routes } from "../../../../constants";
import { COLOR_TEXT_BLUE } from "../../../../theme";
import {
  EmailIcon,
  HeartFilledIcon,
  PhoneIcon,
  ProfileIcon,
  ShareIcon,
  ShoppingBagFilledIcon,
  ShoppingBagIcon,
} from "../../../../theme/icons";

const mockPhoneNumber = "123456789";
const mockSupportMail = "test@mail.com";

export const drawerContent = {
  myAccount: {
    title: "My Account",
    routes: [
      {
        title: "My Profile",
        Icon: <ProfileIcon />,
        route: routes.productDetails,
        onPress: () => {},
      },
      {
        title: "My Wish List",
        Icon: <HeartFilledIcon />,
        route: routes.productDetails,
        onPress: () => {},
      },
      {
        title: "My Cart",
        Icon: <ShoppingBagIcon color={COLOR_TEXT_BLUE} />,
        route: routes.productDetails,
        onPress: () => {},
      },
      {
        title: "My Orders",
        Icon: <ShoppingBagFilledIcon />,
        route: routes.productDetails,
        onPress: () => {},
      },
    ],
  },
  support: {
    title: "Support",
    routes: [
      {
        title: "Email",
        Icon: <EmailIcon />,
        route: routes.productDetails,
        onPress: () => {
          Linking.openURL(`mailto:${mockSupportMail}`);
        },
      },
      {
        title: "Call",
        Icon: <PhoneIcon />,
        route: routes.productDetails,
        onPress: () => {
          Linking.openURL(`tel:${mockPhoneNumber}`);
        },
      },
    ],
  },
  misc: {
    title: "",
    routes: [
      {
        title: "Share",
        Icon: <ShareIcon />,
        route: routes.productDetails,
        onPress: () => {
          Linking.openURL(`tel:${mockPhoneNumber}`);
        },
      },
    ],
  },
};
