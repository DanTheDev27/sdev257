import React from "react";
import { View, Text, Button, StatusBar } from 
  "react-native";
import styles from "./styles";
export default function Home({ navigation }) {
  return (
    // Main container view
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {/** Title and buttons container */}
      <View style={styles.topContainer}>
        <Text style={styles.Text}>Home Screen</Text>
        {/** Buttons container */}
        <View style={styles.buttonContainer}>
          <Button
            title="Films"
            onPress={() => navigation.navigate("Films")}
          />
          <Button
            title="Planets"
            onPress={() => navigation.navigate("Planets")}
          />
          <Button
            title="Spaceships"
            onPress={() => navigation.navigate("Spaceships")}
          />
        </View>
      </View>
    </View>
  );
}