import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import MainScreen from './components/screen/Main'
import LoginScreen from './components/screen/Login'
import SignupScreen from './components/screen/Signup';
import { Alert, Button, View, Text } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Signup" component={SignupScreen}/>
       </Stack.Navigator>
    </NavigationContainer>
  );
}

