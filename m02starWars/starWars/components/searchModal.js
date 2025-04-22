// components/SearchModal.js
import React, { useEffect, useState } from "react";
import Animated, { SlideInLeft, SlideOutRight } from "react-native-reanimated";
import { Modal, View, Text, Button, StyleSheet } from "react-native";
import styles from "../styles";


export const SearchModal = ({ visible, text, onClose }) => {
  const [modalVisible, setModalVisible] = useState(visible);
  const [showContent, setShowContent] = useState(visible);

  useEffect(() => {
    if (visible) {
      setModalVisible(true);      // show modal
      setShowContent(true);       // show animated content
    } else {
      setShowContent(false);      // trigger exit animation
      setTimeout(() => {
        setModalVisible(false);   // unmount modal after exit animation
        onClose();                // callback to parent
      }, 300); // match duration of exit animation
    }
  }, [visible]);

  return (
    <Modal
      visible={modalVisible}
      animationType="none" // let Reanimated handle it
      transparent={true}
      onRequestClose={() => {
        setShowContent(false);
        setTimeout(() => {
          setModalVisible(false);
          onClose();
        }, 300);
      }}
    >
      <View style={styles.overlay}>
        {showContent && (
          <Animated.View
            entering={SlideInLeft.duration(300)}
            exiting={SlideOutRight.duration(300)}
            style={styles.modal}
          >
            <Text style={styles.text}>You searched for: {text}</Text>
            <Button
              title="Close"
              onPress={() => {
                setShowContent(false);
                setTimeout(() => {
                  setModalVisible(false);
                  onClose();
                }, 300);
              }}
              color="#D8C021"
            />
          </Animated.View>
        )}
      </View>
    </Modal>
  );
};