import React, { Fragment } from "react";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Typography, Divider } from "../../../../components";
import { drawerContent } from "./Drawer.helpers";
import { styles } from "./Drawer.styles";

export const DrawerMenu = () => {
  return (
    <SafeAreaView style={[styles.mainContainer]}>
      <Typography variant="h1" color="blue" style={styles.title}>
        Ecommerce Store
      </Typography>
      {Object.values(drawerContent).map((drawerContentPart, index) => {
        const { title, routes: drawerRoutes } = drawerContentPart;
        return (
          <Fragment key={index}>
            {index > 0 && <Divider style={[styles.dividerMargin]} />}
            {!!title.length && (
              <Typography variant="h6" color="gray" style={[styles.subtitle]}>
                {title}
              </Typography>
            )}
            {drawerRoutes.map((routeElement) => {
              const { Icon, title: routeTitle, onPress } = routeElement;
              return (
                <TouchableOpacity
                  key={routeTitle}
                  onPress={onPress}
                  style={[styles.drawerElement]}
                >
                  {Icon}
                  <Typography style={[styles.drawerName]}>{routeTitle}</Typography>
                </TouchableOpacity>
              );
            })}
          </Fragment>
        );
      })}
    </SafeAreaView>
  );
};
