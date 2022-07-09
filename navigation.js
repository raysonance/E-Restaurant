import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import ResturantDetail from "./screens/ResturantDetail";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function RootNavigation() {
  const Stack = createNativeStackNavigator();
  const screenOptions = {
    headerShown: false,
    };
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={screenOptions}
        >
          <Stack.Screen name={"Home"} component={Home} />
          <Stack.Screen name={"ResturantDetail"} component={ResturantDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}
