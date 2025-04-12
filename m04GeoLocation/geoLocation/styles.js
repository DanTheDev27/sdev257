import { StyleSheet } from 'react-native';

{/* Dont forget to export default the stylesheet*/}
{/* have to set the width and height for the mapView object */}
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapView: {
    width: '100%',
    height: '100%',
  }
});