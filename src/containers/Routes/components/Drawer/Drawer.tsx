import React from "react";
import { Typography, Divider } from "../../../../components";
import { styles } from "./Drawer.styles";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { routes } from "../../../../constants";
import { Linking } from "react-native";
import { EmailIcon, PhoneIcon, ShareIcon } from "../../../../theme/icons";
import { mockSupportMail, mockPhoneNumber } from "./Drawer.helpers";

export const DrawerMenu = (props: DrawerContentComponentProps) => {
  const handleTitlePress = () => {
    props.navigation.navigate(routes.main.products);
  };
  return (
    <DrawerContentScrollView>
      <DrawerItem
        label={() => (
          <Typography variant="h1" color="blue" style={styles.title}>
            Ecommerce Store
          </Typography>
        )}
        onPress={handleTitlePress}
      />

      <Typography variant="h6" color="gray" style={[styles.subtitle]}>
        My Account
      </Typography>
      <DrawerItemList {...props} />
      <Divider style={[styles.dividerMargin]} />
      <Typography variant="h6" color="gray" style={[styles.subtitle]}>
        Support
      </Typography>
      <DrawerItem
        onPress={() => {
          Linking.openURL(`mailto:${mockSupportMail}`);
        }}
        label={() => <Typography>Email</Typography>}
        icon={() => <EmailIcon />}
      />
      <DrawerItem
        onPress={() => {
          Linking.openURL(`mailto:${mockPhoneNumber}`);
        }}
        label={() => <Typography>Call</Typography>}
        icon={() => <PhoneIcon />}
      />
      <Divider style={[styles.dividerMargin]} />
      <DrawerItem
        onPress={() => console.log("SHARE")}
        label={() => <Typography>Share</Typography>}
        icon={() => <ShareIcon />}
      />
    </DrawerContentScrollView>
  );
};
