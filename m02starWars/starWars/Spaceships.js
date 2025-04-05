import React, { useState, useEffect } from "react";
import { View, Text, Button, StatusBar, FlatList, ActivityIndicator } from 
  "react-native";
import styles from "./styles";

// Function to fetch planets data from API
const fetchSpaceShips = async () => {
  try {
    const response = await fetch('https://www.swapi.tech/api/starships/');
    const data = await response.json();
    console.log(JSON.stringify(data.results[0].name,null,1));
    return data.results;
  } catch (error) {
    console.error('Error fetching spaceships:', error);
  }
};

export default function Spaceships({ navigation }) {
  const [spaceships, setSpaceShips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSpaceShips = async () => {
      const data = await fetchSpaceShips();
      setSpaceShips(data);
      setLoading(false);
    };

    getSpaceShips();
  }, []);

  if (loading) {
      return (
        <View style={styles.container}>
          <StatusBar barStyle="dark-content" />
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }

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
      <FlatList
        data={spaceships}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.spaceshipItem}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}