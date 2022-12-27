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

const App = () => {
  return (
    <RequestStatusContextProvider>
      <AuthProvider>
        <Layout />
      </AuthProvider>
    </RequestStatusContextProvider>
  );
};

export default App;
