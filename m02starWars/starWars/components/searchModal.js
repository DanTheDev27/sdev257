// components/SearchModal.js
import React from "react";
import { Modal, View, Text, Button, StyleSheet } from "react-native";
import styles from "../styles";


export const SearchModal = ({ visible, text, onClose }) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.text}>You searched for: {text}</Text>
          <Button title="Close" onPress={onClose} color='#D8C021'/>
        </View>
      </View>
    </Modal>
  );
};
