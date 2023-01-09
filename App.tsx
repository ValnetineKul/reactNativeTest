/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from "react";

import { Layout } from "./src/containers";
import { AuthProvider } from "./src/context";
import { RequestStatusContextProvider } from "./src/context/RequestStatusContext";
import { NavigationContainer } from "@react-navigation/native";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

const App = () => {
  return (
    <NavigationContainer>
      <RequestStatusContextProvider>
        <AuthProvider>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Layout />
          </TouchableWithoutFeedback>
        </AuthProvider>
      </RequestStatusContextProvider>
    </NavigationContainer>
  );
};

export default App;
