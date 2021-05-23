import React from "react";
import { Button, View } from "react-native";
import { ScreenProps } from "../types";

export function HomeScreen({ navigation }: ScreenProps<"Home">) {
  return (
    <View>
      <Button
        title="Go to todo detail"
        onPress={() => navigation.navigate("TodoDetail", { name: "World" })}
      />
    </View>
  );
}
