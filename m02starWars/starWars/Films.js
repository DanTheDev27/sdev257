import React, { useState, useEffect } from "react";
import { View, Text, Button, StatusBar, FlatList, ActivityIndicator, Modal } from 
  "react-native";
import { SearchInput } from "./components/searchInput";
import { SearchModal } from "./components/searchModal";
import styles from "./styles";
import Swipeable from "./components/Swipeable";

const fetchFilms = async () => {
  try{
    const response = await fetch('https://www.swapi.tech/api/films');
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error('Error loading Films: ', error);
  }
}

export default function Films({ navigation }) {
  const [Films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  // state hooks for the search 
  const [searchTerm, setSearchTerm] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  // state hooks for the info modal
  const [selectedFilmTitle, setSelectedFilmTitle] = useState(null);
  const [infoModalVisible, setInfoModalVisible] = useState(false);

    useEffect(() => {
      const getFilms = async () => {
        const data = await fetchFilms();
        setFilms(data);
        setLoading(false);
      };

      getFilms();
    }, []);

    // Film deletion by index
    const deleteItem = (indexToDelete) => {
      setFilms((prev) => prev.filter((_,i) => i !== indexToDelete));
    };

    if (loading) {
          return (
            <View style={styles.container}>
              <StatusBar barStyle="dark-content" />
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          );
        }

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
      <Text style={styles.Text}>Star Wars Films</Text>

        <SearchInput onSubmit={handleSearchSubmit}/>
                
        <SearchModal 
        visible={modalVisible}
        text={searchTerm}
        onClose={ ()=> setModalVisible(false) }
        />

        {/* Button container */}
        <View style={styles.buttonContainer}>
          <Button
            title="Home"
            onPress={() => navigation.navigate("Home")}
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
      <FlatList
        data={Films}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          // <View style={styles.filmsItem}>
          //   <Text style={styles.renderedText}>{item.properties.title}</Text>
          // </View>
          <Swipeable 
          name={item.properties.title}
          onSwipe={() => {
            setSelectedFilmTitle(item.properties.title);
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
              <Text style={styles.text}>Film Title: {selectedFilmTitle}</Text>
              <Button title="Close" onPress={() => setInfoModalVisible(false)} color="#D8C021"/>
            </View>
          </View>
        </Modal>

    </View>
  );
}