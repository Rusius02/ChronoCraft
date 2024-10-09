// App.tsx
import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import Welcome from './screens/welcome';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Welcome />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
