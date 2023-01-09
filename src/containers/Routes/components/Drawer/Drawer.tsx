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
import { Linking, Share } from "react-native";
import { EmailIcon, PhoneIcon, ShareIcon } from "../../../../theme/icons";
import { mockSupportMail, mockPhoneNumber } from "./Drawer.helpers";

export const DrawerMenu = (props: DrawerContentComponentProps) => {
  const handleTitlePress = () => {
    props.navigation.navigate(routes.main.products);
  };

  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: "React Native | A framework for building native apps using React",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log("activity type");
        } else {
          console.log("shared");
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("dismissed");
      }
    } catch (error) {
      console.log(error);
    }
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
        onPress={handleShare}
        label={() => <Typography>Share</Typography>}
        icon={() => <ShareIcon />}
      />
    </DrawerContentScrollView>
  );
};
