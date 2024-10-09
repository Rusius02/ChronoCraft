// AppNavigator.js
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreen from '../screens/Welcome';
import LoginScreen from '../screens/login';
import PlanScreen from '../screens/Plans';
import PlanDetailScreen from '../screens/PlanDetailScreen';
import AddPlanScreen from '../screens/addPlans';
import ChronoScreen from '../screens/Chrono';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
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
