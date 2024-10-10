// App.tsx
import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import AppNavigator from './navigator/AppNavigation'; // Adjust the import based on your project structure
import { setupDatabase } from './db/database';



const App = () => {
  useEffect(() => {
    setupDatabase();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <AppNavigator /> 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // Dark mode background color
  },
});

export default App;
