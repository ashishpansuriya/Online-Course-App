/* eslint-disable prettier/prettier */
import * as React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IntroScreen from '../screen/IntroScreen';
import LoginScreen from '../screen/LoginScreen';
import SignUpScreen from '../screen/SignupScreen';
import MainScreen from '../screen/MainScreen';
import DetailsScreen from '../screen/DetailsScreen';
import VideoListScreen from '../screen/VideoListScreen';
import { enableScreens } from 'react-native-screens';

const Stack = createNativeStackNavigator();
enableScreens(true);
const ScreenNavigator = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen
      name="IntroScreen"
      component={IntroScreen}
      options={{
                  title: "Home",
                  headerShown: false,
                }}
    />
    <Stack.Screen name="LoginScreen" component={LoginScreen}  options={{
                  headerShown: false,
                }} />

    <Stack.Screen name="SignUpScreen" component={SignUpScreen}  options={{
                  headerShown: false,
                }} />

    <Stack.Screen name="MainScreen" component={MainScreen} options={{
                  headerShown: false,
                }} />

    <Stack.Screen name="DetailsScreen" component={DetailsScreen}  options={{
                  headerShown: false,
                }} />

    <Stack.Screen name="VideoListScreen" component={VideoListScreen} />
  </Stack.Navigator>
  );
};

export default ScreenNavigator;
