import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LogBox } from 'react-native';

import MainScreen from './components/screen/Main';
import LoginScreen from './components/screen/Login';
import SignupScreen from './components/screen/Signup';
import CheckoutScreen from './components/screen/Checkout';
import RestaurantDetail from './components/screen/RestaurantDetail';

import { useSelector } from 'react-redux';
import { Provider } from 'react-redux';
import store from './app/store';

LogBox.ignoreAllLogs();
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <Landing />
    </Provider>
  );
}

function Landing() {
  const { requestId, user } = useSelector((state) => state.user);

  // console.log('LANDING ' + JSON.stringify(user));

  if (user.token) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
          <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} options={{ headerShown: false }} />
          <Stack.Screen name="Checkout" component={CheckoutScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
