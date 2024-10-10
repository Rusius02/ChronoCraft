// AppNavigation.tsx
import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../screens/welcome';
import LoginScreen from '../screens/login'; // Ensure this path is correct
import PlanScreen from '../screens/Plans';
import PlanDetailScreen from '../screens/PlanDetailScreen';
import AddPlanScreen from '../screens/addPlans';
import ChronoScreen from '../screens/Chrono';
import { RootStackParamList } from './types'; // Import types

const Stack = createStackNavigator<RootStackParamList>();
// Define a custom dark theme
const DarkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#000',  // Global background color (black)
    text: '#fff',        // Global text color (white)
  },
};
function AppNavigator() {
  return (
    <NavigationContainer  theme={DarkTheme}>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Plans" component={PlanScreen} />
        <Stack.Screen name="PlanDetailScreen" component={PlanDetailScreen} />
        <Stack.Screen name="ChronoScreen" component={ChronoScreen} />
        <Stack.Screen name="AddPlanScreen" component={AddPlanScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
