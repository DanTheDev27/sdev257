import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./Home";
import Settings from "./Settings";
import Films from "./Films";
import Planets from "./Planets";
import Spaceships from "./Spaceships";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // Navigation container for page routing
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Films" component={Films} />
        <Stack.Screen name="Planets" component={Planets} />
        <Stack.Screen name="Spaceships" component={Spaceships} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}