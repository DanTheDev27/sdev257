// components/SearchInput.js
import React, { useState } from "react";
import { TextInput, Button, View, StyleSheet } from "react-native";
import styles from "../styles";

export const SearchInput = ({ onSubmit }) => {
  const [text, setText] = useState("");

  const handlePress = () => {
    onSubmit(text);
    setText(""); // clears input
  };

  return (
    <View style={styles.searchContainer}>
      <TextInput
        placeholder="Search SWAPI Galactic Guide.."
        placeholderTextColor= '#B0B0B0'
        value={text}
        onChangeText={setText}
        style={styles.input}
      />
      <Button title="Search" onPress={handlePress} color='#D8C021' />
    </View>
  );
};
