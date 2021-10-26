import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './components/screen/Main';
import LoginScreen from './components/screen/Login';
import SignupScreen from './components/screen/Signup';
import SplashScreen from './components/screen/Splash';
import CheckoutScreen from './components/screen/Checkout';
import RestaurantDetail from './components/screen/RestaurantDetail';

import { Provider } from 'react-redux';
import store from './app/store';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
          <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} options={{ headerShown: false }} />

          <Stack.Screen name="Checkout" component={CheckoutScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
