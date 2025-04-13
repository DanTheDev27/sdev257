import { StyleSheet, StatusBar } from "react-native";
import { FONTS, FONT_SIZES } from '../constants/fonts'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#242830',
        alignItems: 'center',
        justifyContent: 'center',
      },
      safeArea: {
        flex: 1,
        width: '100%',
      },
      searchContainer: {
        // borderWidth:1,
        // borderColor:'red',
        alignItems: 'center',
      },
      input: {
        borderWidth: 1,
        borderColor: 'yellow',
        borderRadius: 20,
        textAlign: 'center',
        height: '40',
        width: '70%',
        marginTop: 50,
        marginBottom: 20,
        fontSize: FONT_SIZES.subtitle,
        color: '#D32F2F',
      },
      
})