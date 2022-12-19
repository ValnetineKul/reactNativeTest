import React, { Fragment } from "react";
import { Pressable, StyleProp, ViewStyle } from "react-native";
import { WrapperContainer, Typography, Divider } from "../../../../components";
import { drawerContent } from "./Drawer.helpers";
import { styles } from "./Drawer.styles";
import {
  createNavigatorFactory,
  DefaultNavigatorOptions,
  ParamListBase,
  CommonActions,
  DrawerActionHelpers,
  DrawerNavigationState,
  DrawerRouter,
  DrawerRouterOptions,
  useNavigationBuilder,
} from "@react-navigation/native";
{
  /* <Drawer.Navigator
      // screenOptions={{
      //   headerShown: false,
      // }}
    >
      <Drawer.Screen name={routes.productsMain} component={Products} />
      <Drawer.Screen name={routes.drawerMain} component={DrawerComponent} />
    </Drawer.Navigator> */
}

// Props accepted by the view
type DrawerNavigationConfig = {
  tabBarStyle: StyleProp<ViewStyle>;
  contentStyle: StyleProp<ViewStyle>;
};

// Supported screen options
type DrawerNavigationOptions = {
  title?: string;
};

// Map of event name and the type of data (in event.data)
//
// canPreventDefault: true adds the defaultPrevented property to the
// emitted events.
type DrawerNavigationEventMap = {
  tabPress: {
    data: { isAlreadyFocused: boolean };
    canPreventDefault: true;
  };
};

// The props accepted by the component is a combination of 3 things
type Props = DefaultNavigatorOptions<
  ParamListBase,
  DrawerNavigationState<ParamListBase>,
  DrawerNavigationOptions,
  DrawerNavigationEventMap
> &
  DrawerRouterOptions &
  DrawerNavigationConfig;

export const DrawerMenu = ({ initialRouteName, screenOptions, children }: Props) => {
  const { state, navigation, NavigationContent } = useNavigationBuilder<
    DrawerNavigationState<ParamListBase>,
    DrawerRouterOptions,
    DrawerActionHelpers<ParamListBase>,
    DrawerNavigationOptions,
    DrawerNavigationEventMap
  >(DrawerRouter, {
    children,
    screenOptions,
    initialRouteName,
  });

  const handleNavigationPress = (route: string) => {
    const event = navigation.emit({
      type: "tabPress",
      target: route,
      canPreventDefault: true,
      data: {
        isAlreadyFocused: route === state.routes[state.index].key,
      },
    });

    if (!event.defaultPrevented) {
      navigation.dispatch({
        ...CommonActions.navigate({ name: route, merge: true }),
        target: state.key,
      });
    }
  };

  return (
    <NavigationContent>
      <WrapperContainer>
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
                const { Icon, title: routeTitle, route } = routeElement;
                return (
                  <Pressable
                    key={routeTitle}
                    onPress={() => handleNavigationPress(route)}
                    style={[styles.drawerElement]}
                  >
                    {Icon}
                    <Typography style={[styles.drawerName]}>{routeTitle}</Typography>
                  </Pressable>
                );
              })}
            </Fragment>
          );
        })}
      </WrapperContainer>
    </NavigationContent>
  );
};

export default createNavigatorFactory<
  DrawerNavigationState<ParamListBase>,
  DrawerNavigationOptions,
  DrawerNavigationEventMap,
  typeof DrawerMenu
>(DrawerMenu);
