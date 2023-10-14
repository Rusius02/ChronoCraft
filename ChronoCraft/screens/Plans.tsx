// LoginScreen.js (or LoginScreen.tsx)
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const PlanScreen = ({ navigation }) => {
  
  const addPlan = () => {
    // You can perform your API call here and handle authentication.
    // For this example, we'll just navigate to the next screen.
    navigation.navigate('AddPlans');
  };

  return (
    <View>
      <Text>Plan Screen</Text>
      <Button title="addPlan" onPress={addPlan} />
    </View>
  );
}

export default PlanScreen;
