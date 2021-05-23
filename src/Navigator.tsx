import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./screens/Home";
import { TodoDetailScreen } from "./screens/TodoDetail";
import { RootStackParamList } from "./types";

const RootStack = createStackNavigator<RootStackParamList>();

export function NavigatorApp() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
        <RootStack.Screen name="TodoDetail" component={TodoDetailScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
