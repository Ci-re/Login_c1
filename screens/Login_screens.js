import { View, Text, Image } from 'react-native'
import React from 'react'
import {styles} from "../components/styles"

export default function Login_screens() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.logo_container}>
          <Image source={require("../assets/images/logo.png")} style={styles.logo_style}></Image>
        </View>
      </View>
    </View>
  )
}