/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { ReactElement, useRef } from "react";

import { Layout } from "./src/containers";
import { AuthProvider } from "./src/context";
import { RequestStatusContextProvider } from "./src/context/RequestStatusContext";
import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";
import { Nullable } from "./src/types";

const App = () => {
  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef<Nullable<any>>(null);
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef?.getCurrentRoute?.()?.name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef?.getCurrentRoute?.()?.name;
        if (previousRouteName !== currentRouteName) {
          // Save the current route name for later comparison
          routeNameRef.current = currentRouteName;
          
          console.log(currentRouteName);
        }
      }}
    >
      <RequestStatusContextProvider>
        <AuthProvider>
          <Layout />
        </AuthProvider>
      </RequestStatusContextProvider>
    </NavigationContainer>
  );
};

export default App;
