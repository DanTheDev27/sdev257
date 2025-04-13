import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const SearchResults = ({ query, goBack }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Showing results for: {query} </Text>
            <Button title="Back" onPress={goBack} color="#D32F2F" />

            {/* Render tmdb results here */}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#242830',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 20,
      color: '#fff',
    },
  });

export default SearchResults;