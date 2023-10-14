// AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../screens/welcome';
import LoginScreen from '../screens/login';
import PlanScreen from '../screens/Plans';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Plans" component={PlanScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
