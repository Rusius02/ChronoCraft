// PlanDetailScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlanDetailScreen = ({ route }) => {
  const { planId } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Plan Detail Screen</Text>
      <Text style={styles.text}>Displaying details for Plan ID: {planId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#282c34', // Dark background
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#61dafb', // Light blue color for title
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: '#ffffff', // White color for text
  },
});

export default PlanDetailScreen;
