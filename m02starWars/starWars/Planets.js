import React, { useState, useEffect, useContext } from "react";
import { View, Text, Button, StatusBar, FlatList, ActivityIndicator,Modal, Animated, } from "react-native";
import { SearchInput } from "./components/searchInput";
import { SearchModal } from "./components/searchModal";
import styles from "./styles";
import Swipeable from "./components/Swipeable";
import { NetworkContext } from "./providers/NetworkProviders";


// Function to fetch planets data from API
const fetchPlanets = async () => {
  try {
    const response = await fetch("https://swapi.tech/api/planets/");
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching planets:", error);
    return []
  }
};

export default function Planets({ navigation }) {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingLogo, setLoadingLogo] = useState(true);
  // Grabbing network state
  const { isConnected } = useContext(NetworkContext);
  const fadeAnim = useState(new Animated.Value(0))[0]; // Initial opacity 0

  // State hooks for the search
  const [searchTerm, setSearchTerm] = useState('');
  // const [modalVisible, setModalVisible] = useState(false);

  // State hooks for the swipe modal
  const [selectedPlanetName, setSelectedPlanetName] = useState(null);
  const [infoModalVisible, setInfoModalVisible] = useState(false);

  useEffect(() => {
    // Fetch planets data when the component mounts
    const getPlanets = async () => {
      const data = await fetchPlanets();
      setPlanets(data);
      setLoading(false);
      console.log('fetched  planets:', data);
    };

    getPlanets();
  }, []);

  const filteredPlanets = planets.filter(planet => planet.name.toLowerCase().includes(searchTerm.toLowerCase()));

  // Planet deletion by index
  const deleteItem = (indexToDelete) => {
    setPlanets((prev) => prev.filter((_,i) => i !== indexToDelete));
  };

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
    // setModalVisible(true);
  };

  const handleLogoLoad = () => {
        setLoadingLogo(false);
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
      };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {!isConnected && (
        <View style={{ backgroundColor: 'red', padding: 10 }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>You are offline</Text>
        </View>
      )}
      {/* // Title and buttons container  */}
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

        <Text style={styles.Text}>Star Wars Planets</Text>

        {/* Search input field */}
        <SearchInput onSubmit={handleSearchSubmit}/>
        
        {/* Seach modal display */}
        {/* <SearchModal 
        visible={modalVisible}
        text={searchTerm}
        onClose={ ()=> setModalVisible(false) }
        /> */}

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
        data={filteredPlanets}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Swipeable 
          name={item.name}
          onSwipe={() => {
            setSelectedPlanetName(item.name);
            setInfoModalVisible(true);
            }}
          />
        )}
      />

      <Modal 
      visible={infoModalVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={() => setInfoModalVisible(false)}
      >
        <View style={styles.overlay}>
          <View style={styles.modal}>
            <Text style={styles.text}>Planet name: {selectedPlanetName}</Text>
            <Button  title="Close" onPress={() => setInfoModalVisible(false)} color="#D8C021"/>
          </View>
        </View>
      </Modal>

    </View> 
  );
}
