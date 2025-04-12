import React, { useEffect, useState } from "react";
import { View, StatusBar } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
{/* Seperated stylesheet importing here*/}
import styles from "./styles";

StatusBar.setBarStyle("dark-content");

export default function App() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation.coords);
    })();
  }, []);

  return (
    <View style={styles.container}>
      {/* Mapview is used to render your location and points of interest */}
      <MapView
        style={styles.mapView}
        showsPointsOfInterest={true}
        showsUserLocation={false}
        followUserLocation={true}
        region={
          location
            ? {
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }
            : undefined
        }
      >
        {/* Used <Marker /> to render locations
        Add all locations here */}
        <Marker
          title="Ivy Tech Sellersburg"
          description="Home Campus"
          coordinate={{
            latitude: 38.389755,
            longitude: -85.762614,
          }}
        />
        <Marker
          title="Home"
          description="The neighbourhood"
          coordinate={{
            latitude: 38.49347,
            longitude: -85.77741,
          }}
        />
        <Marker 
          title="Dodger Stadium"
          description="Dodger Stadium"
          coordinate={{
            latitude: 34.0739,
            longitude: -118.2400,
          }}
        />
        <Marker 
        title="My hometown"
        description="Kaiser Permanente"
        coordinate={{
          latitude: 37.336401,
          longitude: -121.999142,
        }}
        />
        <Marker 
        title="Cracker Barrel"
        description="Good pancakes"
        coordinate={{
          latitude: 38.394681,
          longitude: -85.759741,
        }}
        />
      </MapView>
    </View>
  );
}
