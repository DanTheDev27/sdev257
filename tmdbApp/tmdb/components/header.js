import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FONTS, FONT_SIZES } from '../constants/fonts';

const Header = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>YourFlix</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#242830',
        paddingVertical: 20,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth: 1,
        // borderColor: 'red',
    },
    title: {
        fontFamily: FONTS.pacifico,
        fontSize: FONT_SIZES.largeTitle,
        color: '#D32F2F',
    },
})

export default Header;