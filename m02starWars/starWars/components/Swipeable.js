import React, { useRef } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Modal } from 'react-native';
import styles from '../styles';

export default function Swipeable( { onSwipe, name }) {
    //prevents multiple calls when swiping once
    const hasSwiped = useRef(false);

    function onScroll(e) {
        // e.nativeEvent.contentOffset.x === 200 & onSwipe();
        const offsetX = e.nativeEvent.contentOffset.x;

        if (offsetX >= 200 && !hasSwiped.current) {
            hasSwiped.current = true;
            onSwipe(name); // passing the name of the starship
        }
    }
    const scrollProps = {
        horizontal: true,
        pagingEnabled: true,
        showsHorizontalScrollIndicator: false,
        scrollEventThrottle: 10,
        onScroll,
    };

    return (
        <View style={styles.swipeContainer}>
            <ScrollView {...scrollProps}>
                <TouchableOpacity>
                    <View style={styles.swipeItem}>
                        <Text style={styles.swipeItemText}>
                            {name}
                        </Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.swipeBlank} />
            </ScrollView>
        </View>
        // <Modal
        //       visible={visible}
        //       animationType="slide"
        //       transparent={true}
        //       onRequestClose={onClose}
        //     >
        //       <View style={styles.overlay}>
        //         <View style={styles.modal}>
        //           <Text style={styles.text}>You searched for: {text}</Text>
        //           <Button title="Close" onPress={onClose} color='#D8C021'/>
        //         </View>
        //       </View>
        //     </Modal>
    );
}