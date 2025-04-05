import React, { useState, useEffect } from "react";
import { View, Text, Button, StatusBar, FlatList, ActivityIndicator } from "react-native";
import styles from "./styles";

// Function to fetch planets data from API
const fetchPlanets = async () => {
  try {
    const response = await fetch("https://swapi.dev/api/planets/");
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching planets:", error);
  }
};

export default function Planets({ navigation }) {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch planets data when the component mounts
    const getPlanets = async () => {
      const data = await fetchPlanets();
      setPlanets(data);
      setLoading(false);
    };

    getPlanets();
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
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {/** Title and buttons container */}
      <View style={styles.topContainer}>
        <Text style={styles.Text}>Star Wars Planets</Text>
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
            title="Spaceships"
            onPress={() => navigation.navigate("Spaceships")}
          />
        </View> {/** End of buttons container */}
      </View> {/** End of title and buttons container */}
      <FlatList
        data={planets}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.planetItem}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View> 
  );
}
