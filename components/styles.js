import React from "react";
import { StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor: "#A5A6F6",
        paddingTop: StatusBar.currentHeight + 20,
    },
    innerContainer: {
        flex: 1,
        alignItems: "center",
    },
    logo_container : {
        alignItems: "center",
        height: 50,
        width: 50,
    },
    logo_style : {
        height: 100,
        width: 100,
    }

})