import React from "react";
import { View, Text, Button, StatusBar } from 
  "react-native";
import styles from "./styles";
export default function Films({ navigation }) {
  return (
    // Main container view
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {/** Title and buttons container */}
      <View style={styles.topContainer}>
        <Text style={styles.Text}>Star Wars Films</Text>
        {/** Button container */}
        <View style={styles.buttonContainer}>
          <Button
            title="Home"
            onPress={() => navigation.navigate("Home")}
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