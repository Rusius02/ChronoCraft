import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import LoginScreen from './Login';

interface WelcomeScreenProps {
  navigation: NavigationProp<any>;
}

function WelcomeScreen({ navigation }: WelcomeScreenProps) {
  return (
    <View>
      <Text>Welcome to Your App</Text>
      <Button
  title="Login"
  onPress={() => navigation.navigate('Login')}
/>
    </View>
  );
}

export default WelcomeScreen;
