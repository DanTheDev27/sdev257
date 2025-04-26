import React, { createContext, useEffect, useState } from "react";
import NetInfo from "@react-native-community/netinfo";

// 1. Create the context
export const NetworkContext = createContext();

// 2. Create the provider component
export const NetworkProvider = ({ children }) => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    // Subscribe to network state updates
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    // Clean up the listener on unmount
    return () => unsubscribe();
  }, []);

  return (
    <NetworkContext.Provider value={{ isConnected }}>
      {children}
    </NetworkContext.Provider>
  );
};
