import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, SafeAreaView, TextInput, Button, } from 'react-native';
import { useFonts, Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import styles from './styles/styles';
import Header from './components/header';
import SearchResults from './screens/searchResults';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  
  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
    setShowResults(true);
    // tmdb api call will go here
  };

    // navigate to other screen for testing
    if (showResults) {
      return <SearchResults query={searchQuery} goBack={() => setShowResults(false)} />;
    }
  

  return (
    <View style={styles.container}>

      {/* Setting the height for the header */}
      <SafeAreaView style={styles.safeArea}>
        {/* <StatusBar barStyle='light-content'/> */}
        <Header />

        {/* Search input will go here */}
        <View style={styles.searchContainer}>
          <TextInput 
          style ={styles.input}
          placeholder='Search YourFlix'
          placeholderTextColor={'#999'}
          value={searchQuery}
          onChangeText={setSearchQuery}
          />
          <Button title='Search' onPress={handleSearch} color='#D32F2F'/>
        </View>
      </SafeAreaView>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}


