import React, { useState, useContext } from "react";
import { View, Text, TextInput, Button, StatusBar, Image, Animated, ActivityIndicator } from 
  "react-native";
  import NetInfo from "@react-native-community/netinfo";
import styles from "./styles";
import { SearchInput } from "./components/searchInput";
import { SearchModal } from "./components/searchModal";
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { NetworkContext } from "./providers/NetworkProviders";

export default function Home({ navigation }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [loadingLogo, setLoadingLogo] = useState(true);
  // Grabbing network state
  const { isConnected } = useContext(NetworkContext);

  const fadeAnim = useState(new Animated.Value(0))[0]; // Initial opacity 0

  // Handle user input here
  const handleSearchSubmit = (text) => {
    setSearchTerm(text);
    setModalVisible(true);
  };

  // Handle the logo loading on a delay
  const handleLogoLoad = () => {
    setLoadingLogo(false);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    // Main container view
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {!isConnected && (
        <View style={{ backgroundColor: 'red', padding: 10 }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>You are offline</Text>
        </View>
      )}


      {/* Title and buttons container */}
      <View style={styles.topContainer}>
        
      <View style={{ height: 100, justifyContent: 'center', alignItems: 'center' }}>
          {loadingLogo && <ActivityIndicator size="large" color="#D8C021" style={{ position: "absolute" }} />}
          <Animated.Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/320px-Star_Wars_Logo.svg.png"
            }}
            onLoad={handleLogoLoad}
            style={{
              width: 250,
              height: 100,
              resizeMode: "contain",
              opacity: fadeAnim,
            }}
          />
        </View>
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