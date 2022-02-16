import React from "react";
import { StatusBar, StyleSheet } from "react-native";

export const colors = {
  primary: "#ffffff",
  secondary: "#000000",
  tetiary: "#A5A6F6",
  alternative: "#20263C",
};

export const { primary, secondary, tetiary, alternative } = colors;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primary,
    padding: 25,
    paddingTop: StatusBar.currentHeight + 20,
  },
  innerContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  logo_container: {
    height: 100,
    width: 100,
  },
  logo_style: {
    alignItems: "center",
    height: 300,
    width: 300,
  },
  get_started: {
    backgroundColor: alternative,
    height: 30,
    width: 30,
  },
});
