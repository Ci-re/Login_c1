import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "../components/styles";

export default function Login_screens() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image source={require("../assets/images/onboard-image.png")} />
        <Text>Earn while you save</Text>
        <TouchableOpacity style={styles.get_started}>
          <Text>Click me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
