import React from "react";
import { Text, View } from "react-native";
import { ScreenProps } from "../types";

export function TodoDetailScreen({ route }: ScreenProps<"TodoDetail">) {
  return (
    <View>
      <Text>This is {route.params.name}'s profile</Text>
    </View>
  );
}
