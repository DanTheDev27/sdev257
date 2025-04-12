import React, { useState, useEffect } from "react";
import { View, Text, Button, StatusBar, FlatList, ActivityIndicator } from "react-native";
import { SearchInput } from "./components/searchInput";
import { SearchModal } from "./components/searchModal";
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

  {/* state hooks for the search */}
  const [searchTerm, setSearchTerm] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

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
  // Handle search submit
  const handleSearchSubmit = (text) => {
    setSearchTerm(text);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {/* Title and buttons container */}
      <View style={styles.topContainer}>
        <Text style={styles.Text}>Star Wars Planets</Text>

        {/* Search input field */}
        <SearchInput onSubmit={handleSearchSubmit}/>
        
        {/* Seach modal display */}
        <SearchModal 
        visible={modalVisible}
        text={searchTerm}
        onClose={ ()=> setModalVisible(false) }
        />

        {/* Buttons container */}
        <View style={styles.buttonContainer}>
          <Button
            title="Home"
            onPress={() => navigation.navigate("Home")}
            color= '#D8C021'
          />
          <Button
            title="Films"
            onPress={() => navigation.navigate("Films")}
            color= '#D8C021'
          />
          <Button
            title="Spaceships"
            onPress={() => navigation.navigate("Spaceships")}
            color= '#D8C021'
          />
        </View> {/* End of buttons container */}
      </View> {/* End of title and buttons container */}
      <FlatList
        data={planets}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.planetItem}>
            <Text style={styles.renderedText}>{item.name || 'No name available'}</Text>
          </View>
        )}
      />
    </View> 
  );
}
