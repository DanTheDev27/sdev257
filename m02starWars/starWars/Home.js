import React, { useState } from "react";
import { View, Text, TextInput, Button, StatusBar } from 
  "react-native";
import styles from "./styles";
import { SearchInput } from "./components/searchInput";
import { SearchModal } from "./components/searchModal";
import { FontAwesome, Ionicons } from '@expo/vector-icons';
export default function Home({ navigation }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleSearchSubmit = (text) => {
    setSearchTerm(text);
    setModalVisible(true);
  };

  return (
    // Main container view
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {/* Title and buttons container */}
      <View style={styles.topContainer}>
        <Text style={styles.Text}>SWAPI Galactic Guide</Text>

        {/* Search input field */}
        <SearchInput onSubmit={handleSearchSubmit}/>

        {/* Search modal display */}
        <SearchModal 
        visible={modalVisible}
        text={searchTerm}
        onClose={ ()=> setModalVisible(false) }
        />

        {/* Buttons container */}
        <View style={styles.buttonContainer}>
          <Button
            title="Films"
            onPress={() => navigation.navigate("Films")}
            color= '#D8C021'
          />
          <Button
            title="Planets"
            onPress={() => navigation.navigate("Planets")}
            color= '#D8C021'
          />
          <Button
            title="Spaceships"
            onPress={() => navigation.navigate("Spaceships")}
            color= '#D8C021'
          />
        </View>
      </View>
    </View>
  );
}