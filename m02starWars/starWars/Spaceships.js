import React from "react";
import { View, Text, Button, StatusBar } from 
  "react-native";
import styles from "./styles";
export default function Spaceships({ navigation }) {
  return (
    // Main container view
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {/** Title and buttons container */}
      <View style={styles.topContainer}>
        <Text style={styles.Text}>Star Wars Spaceships</Text>
        {/** Buttons container */}
        <View style={styles.buttonContainer}>
          <Button
            title="Home"
            onPress={() => navigation.navigate("Home")}
          />
          <Button
            title="Films"
            onPress={() => navigation.navigate("Films")}
          />
          <Button
            title="Planets"
            onPress={() => navigation.navigate("Planets")}
          />
        </View>
      </View>
    </View>
  );
}