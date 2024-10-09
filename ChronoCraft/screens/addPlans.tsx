
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const AddPlanScreen = ({ navigation }) => {
  
  const addPlan = () => {
    //Contact API
  };

  return (
    <View>
      <Text>Plan Screen</Text>
      <Button title="addPlan" onPress={addPlan} />
    </View>
  );
}

export default AddPlanScreen;
