// LoginScreen.js (or LoginScreen.tsx)
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // You can perform your API call here and handle authentication.
    // For this example, we'll just navigate to the next screen.
    navigation.navigate('Plans');
  };

  return (
    <View>
      <Text>Login Screen</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

export default LoginScreen;
